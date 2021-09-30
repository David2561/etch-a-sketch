
InitializeCanvas(256);
function InitializeCanvas(canvasSize){
    const canvas = document.querySelector('.canvas');
    for (let i = 0; i < canvasSize; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        canvas.appendChild(div);
    }
}