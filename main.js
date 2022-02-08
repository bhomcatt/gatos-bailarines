function start(){
navigator.mediaDevices.getUserMedia({
audio:true,
});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lfFaG5_io/model.json", modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,result){
if(error){
    console.error(error);
}else{
    console.log(result);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML = "escucho"+result[0].label;
    document.getElementById("result_confidence").innerHTML = "precision"+(result[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img1 = document.getElementById("alien 1");
    img2 = document.getElementById("alien 2");
    img3 = document.getElementById("alien 3");
    img4 = document.getElementById("alien 4");
    if(result[0].label == "Aplausos"){
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }
    else if(result[0].label == "Campana"){
        img2.src = "aliens-02.gif";
        img1.src = "aliens-01.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }
    else if(result[0].label == "Chasquido"){
        img3.src = "aliens-03.gif";
        img2.src = "aliens-02.png";
        img1.src = "aliens-01.png";
        img4.src = "aliens-04.png";
    }
    else if(result[0].label == "Ruido de fondo"){
        img4.src = "aliens-04.gif";
        img2.src = "aliens-02.png";
        img1.src = "aliens-01.png";
        img3.src = "aliens-03.png";
    }
}
}