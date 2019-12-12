import { Observable } from 'rxjs';
import * as fs from 'fs';

export class Transcriptor {

    constructor () {

    }

    private regexHell(fileName) {
        let filePath = "";
        let fileType = "";
    
        let splitPath = fileName.match(/(.*)\/(.*)/);
        if (splitPath != null) {
            filePath = splitPath[1] + "/";
            fileName = splitPath[2];
        }
    
        let splitType = fileName.match(/(.*)\.(.*)/);
        if (splitType != null) {
            fileName = splitType[1];
            fileType = "." + splitType[2];
        }
    
        return [filePath, fileName, fileType];
    }
    
    
    private convertToFLAC(filePath, fileName, fileType, bucketName, observer) {
        let ffmpeg = require('fluent-ffmpeg');
        console.log('1');
        ffmpeg(filePath + fileName + fileType)
            .audioCodec('flac')                    // mudar tipo arquivo
            .audioFrequency(8000)                  // 8000 16000... menor é melhor
            .audioBitrate(16000)                   // precisa ser 16000
            .audioChannels(1)                      // precisa ser 1
            .noVideo()                             // remove video se necessário
            .save("./output/" + fileName + ".flac")
            .on('error', function(err) {
                console.log('2');
                console.log('An error occurred: ' + err.message);
            })
            .on('end', async function() {
                console.log('3');
                console.log("Converted %s%s to /output/%s.flac", fileName, fileType, fileName);
                observer.complete();
            });
            console.log('4');
    }

    private async uploadToGoogle(filePath, fileName, bucketName) {
        const {Storage} = require('@google-cloud/storage');
        const storage = new Storage();
    
        // Name of the cloud storage bucket in my account
        // const bucketName = 'kaju-speech-test';
    
        await storage.bucket(bucketName).upload(filePath + fileName, {
            gzip: true,
            // By setting the option `destination`, you can change the name of the
            // object you are uploading to a bucket.
            metadata: {
                // Enable long-lived HTTP caching headers
                // Use only if the contents of the file will never change
                // (If the contents will change, use cacheControl: 'no-cache')
                cacheControl: 'public, max-age=31536000',
            },
        });
    
        let result = new Promise((res, reject) => {
             this.askForTranscription("gs://" + bucketName + "/" + fileName);
        })
    
        console.log(`${fileName} uploaded to ${bucketName}.`);
    
    //
    
    }
    
    
    private async askForTranscription(cloudFile) {
        // Imports the Google Cloud client library
        const speech = require('@google-cloud/speech');
        const client = new speech.SpeechClient();
    
        const config = {
            encoding: "FLAC",
            sampleRateHertz: 8000,
            languageCode: "en-US",
    
            enableWordTimeOffsets: true,
            enableWordConfidence: true,
            enableAutomaticPunctuation: true,
    
            speechContexts: [{
                "phrases": ["Exemplo"],
                "boost": 2
            }],
        };
    
        const audio = {
            uri: cloudFile
        };
    
        const request = {
            config: config,
            audio: audio,
        };
    
        // Detects speech in the audio file. This creates a recognition job that you
        // can wait for now, or get its result later.
        const [operation] = await client.longRunningRecognize(request);
    
        // Get a Promise representation of the final result of the job
        const [response] = await operation.promise();
    
        this.afterTranscription(response)
    }
    
    
    public async start(file) {
        const observable = require('rxjs');
    
        const bucketName = 'kaju-speech-test';
        let [filePath, fileName, fileType] = this.regexHell(file);
    
        const onFinishFLAC = new Observable( observer => {
            this.convertToFLAC(filePath, fileName, fileType, bucketName, observer);
        });
        console.log(filePath);
        console.log('5');
        onFinishFLAC.subscribe({
            complete: async () => await this.askForTranscription(filePath + fileName + fileType)
        })
    }
    
    private afterTranscription(response) {
        console.log(response)
        response.results.forEach(result => {
            console.log(`Transcription: ${result.alternatives[0].transcript}`);
        });
    
        let data = JSON.stringify(response, null, 2);
        fs.writeFileSync('output/last_response.json', data);
    }
}