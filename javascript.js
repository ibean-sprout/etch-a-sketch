//create 16X16 squares of divs
// function createDivs(rows, columns) {

//     let container = document.querySelector('#container');
        
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-columns', columns);
//     for (let i = 0; i < (rows * columns); i++) {
//         let sketchDivs = document.createElement('div');
//         sketchDivs.classList.add('content');
//         sketchDivs.style.cssText = 'width: 30px; height: 30px; color: lightblue';
//         sketchDivs.style.border = 'solid black .5px';
//         container.appendChild(sketchDivs).className = 'grid-item';
//     } 
// }
function createDivs() {
    let container = document.querySelector('#container');
    for ( let i = 0; i < 256; i++) {
        let sketchDivs = document.createElement('div');
        sketchDivs.classList.add('content');
        sketchDivs.style.cssText = 'width: 50px; height: 50px; color: lightblue';
        sketchDivs.style.border = 'solid black .5px';
        container.appendChild(sketchDivs);

    }


}

createDivs();
//let sixteenDivs = createDivs * 16;
