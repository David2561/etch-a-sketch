
const canvas = document.querySelector('.canvas');



InitializeCanvas(16);
function InitializeCanvas(canvasSize){
    canvasSize *= canvasSize;
    
    for (let i = 0; i < canvasSize; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover',changeColor);        
        canvas.appendChild(div);
    }
}

function changeColor(e){
    let target = e.target;
    target.style.backgroundColor = "black";
}