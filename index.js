var randomNumber0 = Math.floor(Math.random()*6)+1;
var randomImage0 = "dice"+randomNumber0+".png";
var randomImageSource0= "images/"+randomImage0;
var image0 = document.querySelectorAll("img")[0];
image0.setAttribute("src",randomImageSource0);

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomImageSource1= "images/"+randomImage1;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource1);

if(randomNumber0>randomNumber1){
    document.querySelector("h1").innerHTML= "Player 1 wins";
} else if(randomNumber1>randomNumber0){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw"
}