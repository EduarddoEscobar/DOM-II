import './less/index.less'

// Your code goes here!
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseover', function(){
    funBusImg.style.width === '25%' ? funBusImg.style.width = '100%' : funBusImg.style.width = '25%';
});

let counter = 0;
let warnings = [false, false, false, false, false];

function selfDestruct() {
    document.querySelectorAll('*').forEach(element => {
        element.remove();
    })

}
document.querySelectorAll('*').forEach(elem => {
    elem.addEventListener('keydown', event => {
        counter++;
    })
    elem.addEventListener('keypress', event => {
        elem.style.backgroundColor === 'red'? elem.style.backgroundColor = 'white' : elem.style.backgroundColor = 'red';
    })
    elem.addEventListener('keyup', event => {
        if(counter >= 75){
            if(!warnings[4]){
                console.log("That's it no more website for you");
                selfDestruct();
                warnings[4] = true;
            }
            
        }else if(counter >= 74){
            if(!warnings[3]){
                console.log("I tried telling you!");
                warnings[3] = true;
            }
        }else if(counter >= 70){
            if(!warnings[2]){
                console.log("I am giving you a final warning.");
                warnings[2] = true;
            }
            
        }else if(counter >= 60){
            if(!warnings[1]){
                console.log("Can you please stop typing nonsenses?");
                warnings[1] = true;
            }
        }else if(counter >= 30){
            if(!warnings[0]){
                console.log('All this typing is getting me angry!');
                alert("Check the console");
                warnings[0] = true;
            }
        }
    })
});

document.addEventListener('scroll', function(event){
    const elements = document.querySelectorAll('*');
    elements.forEach(element => element.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
});

const header = document.querySelector('header');
header.addEventListener('click', function(event){
    header.style.backgroundColor === 'pink' ? header.style.backgroundColor = 'white': header.style.backgroundColor = 'pink';
});

const homeButtons = header.querySelectorAll('nav a');
homeButtons.forEach(homeButton => {
    homeButton.addEventListener('click', function(event){
        event.preventDefault();
        if(event.defaultPrevented){
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
        }
    });
})

const adventureImgSrc = "http://localhost:9000/img/adventure.jpg";
const letsGoImgSrc = "http://localhost:9000/img/fun.jpg";
const adventureImg = document.querySelector('.content-section .img-content img');
const letsGoImg = document.querySelector('.content-section.inverse-content .img-content img');

function switchImgs(){
    adventureImg.src === adventureImgSrc ? adventureImg.src = letsGoImgSrc: adventureImg.src = adventureImgSrc;
    letsGoImg.src === letsGoImgSrc ? letsGoImg.src = adventureImgSrc: letsGoImg.src = letsGoImgSrc;
}
adventureImg.addEventListener('dblclick', switchImgs);

letsGoImg.addEventListener('dblclick', switchImgs);

document.addEventListener('copy', function(event){
    alert('You can copy just change it up a bit so the teacher doesn\'t notice');
})

let scale =  1;
const destination = document.querySelector('.content-destination');
destination.addEventListener('wheel', function(event){
    event.preventDefault();
    event.deltaY < 0 ? scale *= event.deltaY * -2: scale /= event.deltaY * 2;
    scale = Math.min(Math.max(0.5, scale), 1.35);
    destination.style.transform = `scale(${scale})`;
})

const contentPick = document.querySelector('.content-pick');
contentPick.addEventListener('mouseenter', function(){
    scale = 2;
    let tabs = contentPick.querySelectorAll('.destination');
    tabs.forEach(element => element.style.transform = `scale(${scale})`);
});
contentPick.addEventListener('mouseleave', function(){
    scale = 1;
    let tabs = contentPick.querySelectorAll('.destination');
    tabs.forEach(element => element.style.transform = `scale(${scale})`);
});





