//add a prompt to the 'Click me' button
let row_num = 0;
let col_num = 0;
const buttonPrompt = document.querySelector('.btn').addEventListener('click', () => {
    row_num = Number(prompt('How many rows?')); 
    col_num = Number(prompt('How many columns?'));
        if (row_num === undefined || row_num === 0) {
            row_num = 16;
        }
    
        if (col_num === undefined || col_num === 0) {
            col_num = 16;
        }
    createDiv(row_num, col_num)
});




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
//createDiv(64, 64);
//referehce for div creation: https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

//create random colors to fill the divs
function randomRGB() {
    // let rgb;
    // let reset = 9;
    // for (let i = 0; i < 10; i++) {
    //     if(i === 8) {
    //         alert(`i is equal to ${i}`)
    //         rgb = 'rgb(0, 0, 0)'
    //     } else {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        rgb =`rgb(${r}, ${g}, ${b})`
    //     }
    // }
    return rgb
    
}
//create function to change div colors when moused over
function changeDivColor(div) {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = randomRGB();
    })
}
