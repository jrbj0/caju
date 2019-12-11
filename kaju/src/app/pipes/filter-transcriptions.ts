import { PipeTransform, Pipe } from '@angular/core';
import { Transcription } from '../models/transcription.model';

@Pipe({
    name:'filterTranscription'
})

export class FilterTranscriptions implements PipeTransform {
    transform(values:Transcription[],args?:string):Transcription[]{
        if(!args || !args.length)return values
        else{
            return values.filter((transcription:Transcription)=>{
                return transcription.name.includes(args) || transcription.transcript.includes(args)
            })
        }
    }
}
