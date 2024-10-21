var yelclr=document.querySelector('.yellow');
var redclr=document.querySelector('.red');

function green(){
    document.getElementById("green").style.background="green";
}
var g=setTimeout(green,1000);

function stop1(){
    clearTimeout(g);
}
setTimeout(stop1,3000);


function yellow(){
    document.getElementById("yellow").style.background="yellow";
}
var y=setTimeout(yellow,3000);


function red(){
    document.getElementById("red").style.background="red";
}
var r=setTimeout(red,6000);


// function stop2(){
//     clearTimeout(y);
// }
// setTimeout(stop2,4000);

// function stop3(){
//     clearTimeout(r);
// }
// setTimeout(stop3,5000);