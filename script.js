
let color = 'black';
let rainbow = false;

const canvas = document.querySelector('.canvas');
const btnColor = document.querySelector('#color');
const btnRainb = document.querySelector('#rainbow');
const btnErasr = document.querySelector('#eraser')
const btnReset = document.querySelector('#reset');
const btnResiz = document.querySelector('#resize');



btnErasr.addEventListener('click', ()=>{
    color = 'white';
})
btnReset.addEventListener('click',resetCanvas);


InitializeCanvas(16);
resetCanvas();

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
        let randcode = Math.floor( Math.random()*16);
        let rainbowColor = '#' + randcode.toString() + 
        randcode.toString() + randcode.toString();
        
        target.style.backgroundColor = rainbowColor;
    }
}

function resetCanvas(){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor='white';
    });
}


