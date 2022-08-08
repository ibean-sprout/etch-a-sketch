//add a prompt to the 'Click me' button
// let num
// const buttonPrompt = document.querySelector('.btn').addEventListener('click', () => {
//     num = Number(prompt('How many squares per side?')); 
//     // createDivs()
// });




//create 16X16 squares of divs
const container = document.querySelector('#container');

 //create one row of any number
 function createDiv(rows, column) {
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', column);
    
    for (let r = 0; r < (rows * column); r++) {
        let sketchDivs = document.createElement('div');
        // sketchDivs.setAttribute('style', `grid-template-rows: repeat(${row})`);
        // sketchDivs.setAttribute('style', `grid-template-columns: repeat(${column})`);
        container.appendChild(sketchDivs).className = 'grid-item';

        changeDivColor(sketchDivs);

    }
    
 }
createDiv(64, 64);


function changeDivColor(div) {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'lightblue';
    })
}
// function createDivs() {
//     let container = document.querySelector('#container');
//     for ( let i = 0; i < 256; i++) {
//         let sketchDivs = document.createElement('div');
//         sketchDivs.classList.add('content');
//         sketchDivs.style.cssText = 'width: 50px; height: 50px; color: lightblue';
//         sketchDivs.style.border = 'solid black .5px';
//         container.appendChild(sketchDivs);

//     }


// }

// createDivs();