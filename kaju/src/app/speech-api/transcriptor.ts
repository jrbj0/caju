import * as ffmpeg from 'fluent-ffmpeg';
import * as speech from '@google-cloud/speech';
import { Storage } from '@google-cloud/storage';
import { writeFileSync } from 'fs';

export class Transcriptor {

  constructor() {

  }


  // Name of the cloud storage bucket in my account
  private bucketName = 'kaju-speech-test';

  // Language of the chosen audio file
  private audioLanguage = 'pt-BR';

  private regexHell(fileName) {
    let filePath = '';
    let fileType = '';

    const splitPath = fileName.match(/(.*)\/(.*)/);
    if (splitPath != null) {
      filePath = splitPath[1] + '/';
      fileName = splitPath[2];
    }

    const splitType = fileName.match(/(.*)\.(.*)/);
    if (splitType != null) {
      fileName = splitType[1];
      fileType = '.' + splitType[2];
    }

    return [filePath, fileName, fileType];
  }


  private convertToFLAC(filePath, fileName, fileType) {
    return new Promise<string>((resolve, reject) => {
      ffmpeg(filePath + fileName + fileType)
      .audioCodec('flac')         // Type of the file
      .audioFrequency(8000)       // Could be 16k but 8k is lighter
      .audioBitrate(16000)        // Needs to be 16k
      .audioChannels(1)           // Needs to be mono, unless we try to use dual speaker recognition
      .noVideo()                  // Removes video if necessary
      .save('./output/' + fileName + '.flac')
      .on('error', function(err) {
        console.log('An error occurred: ' + err.message);
        reject();
      })
      .on('end', async function() {
        console.log('Converted %s%s to /output/%s.flac', fileName, fileType, fileName);
        resolve('./output/' + fileName + '.flac');
      });
    });
  }


  private async uploadToGoogle(filePath, fileName) {
    const storage = new Storage();

    const bucket = await storage.bucket(this.bucketName).upload(filePath, {
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

    console.log(`${fileName} uploaded to ${this.bucketName}.`);

    return 'gs://' + this.bucketName + '/' + fileName;
  }


  private async askForTranscription(cloudFile) {
    const client = new speech.v1.SpeechClient();

    const config = {
      encoding: 'FLAC',
      sampleRateHertz: 8000,
      languageCode: this.audioLanguage,

      enableWordTimeOffsets: true,
      enableWordConfidence: true,
      enableAutomaticPunctuation: true,

      speechContexts: [{
        phrases: ['Exemplo'],
        boost: 2
      }],
    };

    const audio = {
      uri: cloudFile
    };

    const request = {
      config,
      audio
    };

    // Detects speech in the audio file. This creates a recognition job that you
    // can wait for now, or get its result later.
    const [operation] = await client.longRunningRecognize(request);

    // Get a Promise representation of the final result of the job
    const [response] = await operation.promise();

    return response;
  }

  public async start(file, bucket, language) {
    this.bucketName = bucket;
    this.audioLanguage = language;

    const [filePath, fileName, fileType] = this.regexHell(file);

    const convertedFile = await this.convertToFLAC(filePath, fileName, fileType);

    const cloudPath = await this.uploadToGoogle(convertedFile, fileName + '.flac');

    const response = await this.askForTranscription(cloudPath);

    console.log(response);

    response.results.forEach(result => {
      console.log(`Transcription: ${result.alternatives[0].transcript}`);
    });

    const data = JSON.stringify(response, null, 2);
    writeFileSync('output/last_response.json', data);
  }
}

let aaa = new Transcriptor();
aaa.start('input/missile.mp4', 'kaju-speech-test', 'en-US');
