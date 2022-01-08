// Select color input
// Select size input
const table = document.getElementById('pixelCanvas');
let color = document.getElementById("colorPicker");
let sizePicker = document.getElementById('sizePicker');

let span = document.getElementById('inputWidth');
let height = document.getElementById('inputHeight');
makecanvas(span,height)
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', (event) => {
    event.preventDefault();
    $('tr').remove();
    //store input values for the span and height of the grid
    span = document.getElementById("inputWidth").value;
    height = document.getElementById("inputHeight").value;


    makecanvas(span, height);
});

function makecanvas(height, span) {
    //  Your code goes  here!

    // Loop and add table rows
    for (var i = 0; i < span; i++ ) {
        let row = table.insertRow(i);

        // Loop and add table cells
        for (var j = 0; j < height;  j++){
            let col = row.insertCell(j);
            //paintt the canvas
            col.addEventListener('click', (event) => {
                col.style.backgroundColor = color.value;
            });
        }
    }
}
