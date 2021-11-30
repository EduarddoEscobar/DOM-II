import './less/index.less'

// Your code goes here!
let smallBus = false;
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseover', event => {
    if(!smallBus){
        funBusImg.style.width = '25%';
        smallBus = true;
    }else{
        funBusImg.style.width = '100%';
        smallBus = false;
    }
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
        elem.style.backgroundColor = 'red';
    })
    elem.addEventListener('keyup', event => {
        if(counter >= 150){
            if(!warnings[4]){
                console.log("That's it no more website for you");
                selfDestruct();
                warnings[4] = true;
            }
            
        }else if(counter >= 149){
            if(!warnings[3]){
                console.log("I tried telling you!");
                warnings[3] = true;
            }
        }else if(counter >= 140){
            if(!warnings[2]){
                console.log("I am giving you a final warning.");
                warnings[2] = true;
            }
            
        }else if(counter >= 120){
            if(!warnings[1]){
                console.log("Can you please stop typing nonsenses?");
                warnings[1] = true;
            }
        }else if(counter >= 15){
            if(!warnings[0]){
                console.log('All this typing is getting me angry!');
                alert("Check the console");
                warnings[0] = true;
            }
        }
    })
});

