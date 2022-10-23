let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
var one, two, three, four, five, six, seven;

let array = [
    one = {
    name: "The Anatomy of the Guitar",
    img: "url(assets/guitar.jpg)",
    href: "https://dancq.github.io/The-Anatomy-of-the-Guitar/"
},
    two = {
    name: "Bouncing Colors",
    img: "url(assets/colors.jpg)",
    href: "https://dancq.github.io/Bouncing-Colors/"
},
    three = {
    name: "Digital Clock",
    img: "url(assets/clock.jpg)",
    href: "https://dancq.github.io/Digital-Clock--Javascript/"
},
    four = {
    name: "George R. R. Martin Tribute",
    img: "url(assets/grrm.jpg)",
    href: "https://dancq.github.io/George-R-R-Martin-Tribute/"
},
    five = {
    name: "Lost Treasure",
    img: "url(assets/treasure.jpg)",
    href: "https://dancq.github.io/Lost-Treasure/"
},
    six = {
    name: "Robot Spoof",
    img: "url(assets/robot.jpg)",
    href: "https://dancq.github.io/Robot-Spoof/"
},
    seven = {
    name: "Spooky",
    img: "url(assets/spooky.jpg)",
    href: "https://dancq.github.io/Spooky/"
}
];


let j = randomRange(0, array.length - 1);
let i = j - 1;
let k = j + 1;

//Returns a random number within a chosen range
function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}


arrowLeft.onclick = function() { 
    i--;
    j--;
    k--;
    if(i < 0) {
        i = array.length - 1;
    }
    if(j < 0) {
        j = array.length - 1;
    }
    if(k < 0) {
        k = array.length - 1;
    }
    displayOn();
};

arrowRight.onclick = function() {
    i++;
    j++;
    k++;
    if(i > array.length - 1) {
        i = 0;
    }
    if(j > array.length - 1) {
        j = 0;
    }
    if(k > array.length - 1) {
        k = 0;
    }
    displayOn();
};

    
function displayOn() {
    let carouselLeft = document.getElementById("carousel-left");
    let nameLeft = document.getElementById("name-left");

    let carouselMiddle = document.getElementById("carousel-middle");
    let nameMiddle = document.getElementById("name-middle");

    let carouselRight = document.getElementById("carousel-right");
    let nameRight = document.getElementById("name-right");

    nameLeft.innerHTML = array[i].name;
    carouselLeft.style.background = array[i].img;
    carouselLeft.onclick = function() { window.open( array[i].href ) };
    
    nameMiddle.innerHTML = array[j].name;
    carouselMiddle.style.background = array[j].img;
    carouselMiddle.onclick = function() { window.open( array[j].href ) };

    nameRight.innerHTML = array[k].name;
    carouselRight.style.background = array[k].img;
    carouselRight.onclick = function() { window.open( array[k].href ) };

    carouselLeft.style.backgroundPosition = "center";
    carouselLeft.style.backgroundRepeat = "no-repeat";
    carouselLeft.style.backgroundSize = "cover";
    
    carouselMiddle.style.backgroundPosition = "center";
    carouselMiddle.style.backgroundRepeat = "no-repeat";
    carouselMiddle.style.backgroundSize = "cover";

    carouselRight.style.backgroundPosition = "center";
    carouselRight.style.backgroundRepeat = "no-repeat";
    carouselRight.style.backgroundSize = "cover";
}


window.onload = function() { 
   
    displayOn();

};