function start_audio() {
    navigator.mediaDevices.getUserMedia({audio:true});
    teachable=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PExaKNLPq/model.json",model_ready);
}
function model_ready() {
    teachable.classify(gotresults);
}
function gotresults(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_red=Math.floor(Math.random()*255)+1;
        random_blue=Math.floor(Math.random()*255)+1;
        random_green=Math.floor(Math.random()*255)+1;

       
        document.getElementById("name_animal").innerHTML="Name of Animal :"+results[0].label;
        //rgb(255,178,98)
        document.getElementById("name_animal").style.color="rgb("+random_red+","+random_green+","+random_blue+")";  

        img=document.getElementById("animal_img");

        if (results[0].label== "Bark") {
            img.src="png-clipart-pets-yorkshire-pet-yorkshire-removebg-preview.png";
        } else if(results[0].label=="Meow"){
         img.src="cat.png";
        }
        else if(results[0].label=="Roar"){
         img.src="tiger.png";
        }
        else if (results[0].label=="Chriping"){
         img.src="png-clipart-parrot-product-kind-parrot-removebg-preview.png";
        }
        else  {
            img.src="backgroundnosie.png";
           }
    }
}