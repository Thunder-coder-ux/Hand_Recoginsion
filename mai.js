prediction_1 = "";
prediction_2 = "";

Webcam.set({    
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 87
});

camera = document.getElementById("camera");

Webcam.attach( "#camera" );

function takeSnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QftZCHD-V/model.json' , modelLoaded);

function modelLoaded(){
          console.log("Model has been loaded");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
