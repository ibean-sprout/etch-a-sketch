//create 16X16 squares of divs
let container = document.querySelector('#container');
let sketchDivs; 

function createDivs() {
    
    for ( let i = 0; i < 256; i++) {
        sketchDivs = document.createElement('div');
        sketchDivs.classList.add('content');
        sketchDivs.style.cssText = 'width: 50px; height: 50px; color: lightblue';
        sketchDivs.style.border = 'solid black .5px';
        container.appendChild(sketchDivs);

        //creating a function with the parameter set made the hover effect stick
        changeDivColor(sketchDivs);
    }
    


}

createDivs();

//create hover/pixel effect
function changeDivColor(div) {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'lightblue';
    })
}

// let changeDivColors = document.getElementsByClassName('content');
// // console.log(changeDivColors);

// for (let i = 0; i < changeDivColors.length; i++) {
//     changeDivColors[i].addEventListener('mouseover', () => {
//         sketchDivs.style.backgroundColor = 'lightblue';
// });
// }
//         // color.addEventListener('mouseleave', () => {
//         //     sketchDivs.style.backgroundColor = 'red';
//         // })
// })


// function createPixels() {
//         let pixels = sketchDivs.addEventListener('mouseover', () => {
 //   sketchDivs.style.backgroundColor = 'lightblue';
//     })
//     pixels.addEventListener('mouseleave', () => {
//         sketchDivs.style.backgroundColor = 'lightblue';
//     })
// }


//let sixteenDivs = createDivs * 16;

//create pixelated effect with hover
