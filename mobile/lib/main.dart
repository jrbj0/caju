import 'package:flutter/material.dart';
 
void main() => runApp(MyApp());
 
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      theme: ThemeData(
        primaryColor: Colors.teal
      ),
      
      home: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.white,
          elevation: 0.0,
          title: Text('KAJU', style: TextStyle(color: Colors.teal, fontWeight: FontWeight.bold),),
          actions: <Widget>[
            Padding(
              padding:EdgeInsets.only(right: 15.0),
              child: CircleAvatar(backgroundColor: Colors.grey,))
          ],
        ),
        body: Center(
          child: Container(
            child: Padding(
              padding: const EdgeInsets.all(15.0),
              child: Placeholder(),
            ),
          ),
        ),
        bottomNavigationBar: Row(
          children: <Widget>[
          RaisedButton.icon(
            icon: Icon(Icons.mic),
            label: Text("Áudio"),
            onPressed: () {},
            color: Colors.teal,
            textColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(10.0))),
          ),
            RaisedButton.icon(
            icon: Icon(Icons.videocam),
            label: Text("Vídeo"),
            onPressed: () {},
            color: Colors.teal,
            textColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(10.0))),
          ),
        ],
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        ),
      ),
    );
  }
}