//add a prompt to the 'Click me' button
let row_num = 0;
let col_num = 0;
const buttonPrompt = document.querySelector('.btn').addEventListener('click', () => {
    row_num = Number(prompt('How many rows?')); 
    col_num = Number(prompt('How many columns?'));
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

//create function to change div colors when moused over
function changeDivColor(div) {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'lightblue';
    })
}
