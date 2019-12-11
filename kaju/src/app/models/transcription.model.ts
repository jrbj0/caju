export interface Transcription{
    id:number;
    name:string;
    transcript:string;
    confidence:number;
    words:TranscriptionWords[]
}
export interface TranscriptionWords{
    word:string;
    startTime:TranscriptionWordsTime;
    endTime:TranscriptionWordsTime;
}
export interface TranscriptionWordsTime{
    seconds?:string;
    nanos?:number;
}