import 'dart:io' as io;

import 'package:flutter/material.dart';
import 'package:audio_recorder/audio_recorder.dart';
import 'package:path_provider/path_provider.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  void startRecorder() async {
    bool hasPermissions = await AudioRecorder.hasPermissions;
    bool isRecording = await AudioRecorder.isRecording;
    var directory = await getApplicationDocumentsDirectory();
    print(hasPermissions);
    print(isRecording);
    if (hasPermissions && !isRecording) {
      await AudioRecorder.start(
          path: '${directory.path}/test', audioOutputFormat: AudioOutputFormat.AAC);
    } else if (isRecording) {
      Recording recording = await AudioRecorder.stop();
      print(
          "Path : ${recording.path},  Format : ${recording.audioOutputFormat},  Duration : ${recording.duration},  Extension : ${recording.extension},");
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      theme: ThemeData(primaryColor: Colors.teal),
      home: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.white,
          elevation: 0.0,
          title: Text(
            'KAJU',
            style: TextStyle(color: Colors.teal, fontWeight: FontWeight.bold),
          ),
          actions: <Widget>[
            Padding(
                padding: EdgeInsets.only(right: 15.0),
                child: CircleAvatar(
                  backgroundColor: Colors.grey,
                ))
          ],
        ),
        body: Center(
          child: Container(
            child: Padding(
              padding: const EdgeInsets.all(15.0),
              child: Image.asset(
                  'assets/img/drawkit-list-app-monochrome-1200px.png'),
            ),
          ),
        ),
        bottomNavigationBar: Row(
          children: <Widget>[
            RaisedButton.icon(
              icon: Icon(Icons.mic),
              label: Text("Áudio"),
              onPressed: () {
                this.startRecorder();
              },
              color: Colors.teal,
              textColor: Colors.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0))),
            ),
            RaisedButton.icon(
              icon: Icon(Icons.videocam),
              label: Text("Vídeo"),
              onPressed: () {},
              color: Colors.teal,
              textColor: Colors.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0))),
            ),
          ],
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        ),
      ),
    );
  }
}
