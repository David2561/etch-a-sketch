
let color = 'black';
let rainbow = false;

const colorpic = document.querySelector('#picker');
const canvas   = document.querySelector('.canvas');
const btnColor = document.querySelector('#color');
const btnRainb = document.querySelector('#rainbow');
const btnErasr = document.querySelector('#eraser')
const btnReset = document.querySelector('#reset');
const btnResiz = document.querySelector('#resize');


colorpic.addEventListener('change', setColor);
btnColor.addEventListener('click', setColor);
btnRainb.addEventListener('click', setRainbow);
btnErasr.addEventListener('click', erasorColor);
btnReset.addEventListener('click',resetCanvas);
btnResiz.addEventListener('click', resizeCanvas)


InitializeCanvas(16);
resetCanvas();
setColor('black');

function InitializeCanvas(canvasSize){
    
    let size = canvas.clientHeight;
    let height = size/canvasSize;
    let width = height;
    canvasSize *= canvasSize;

    for (let i = 0; i < canvasSize; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.height= height.toString()+ 'px';
        div.style.width = width.toString()+ 'px';
        div.addEventListener('mouseover',changeColor);        
        canvas.appendChild(div);
        
    }
}

function changeColor(e){
    let target = e.target;
    if (!rainbow) {
        target.style.backgroundColor = color;    

    }
    else{

        let randR = Math.floor( Math.random()*16);
        let randG = Math.floor( Math.random()*16);
        let randB = Math.floor( Math.random()*16);
        let rainbowColor = '#' + randR.toString() + 
        randG.toString() + randB.toString();
        target.style.backgroundColor = rainbowColor;
    }
}

function resetCanvas(){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor='white';
    });
}
function setColor(){
    color = colorpic.value.toString();
    rainbow = false;
    btnRainb.classList.remove('selected');
    btnErasr.classList.remove('selected');
    btnColor.classList.add('selected');
}

function erasorColor(){
    color = 'white';
    rainbow = false;
    btnRainb.classList.remove('selected');
    btnErasr.classList.add('selected');
    btnColor.classList.remove('selected');
}
function setRainbow(){
    rainbow = true;
    btnRainb.classList.add('selected');
    btnErasr.classList.remove('selected');
    btnColor.classList.remove('selected');
}
function removeCanvas(){
    
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        canvas.removeChild(pixel);
    });
}

function resizeCanvas(){
    let res = prompt("Instert canvas resolution(max. 100)")
    if(res > 0 && res <= 100)
    {
        removeCanvas();
        InitializeCanvas(res);
        resetCanvas();
    }
    else{
        alert(res + " is not a valid input.")
    }
}