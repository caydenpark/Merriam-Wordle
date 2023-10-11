document.addEventListener('DOMContentLoaded', function() {
    // Your code here, including the createBoard function
    createBoard();
});

function createBoard() {
    /* 
        CREATE THE BOARD 
        Creates the board based off how long the word of the day is
    */
    
    // Get Word of the Day (wotd)
    const wotd = "Block";
    const wotdLength = wotd.length;
    const numCols = wotdLength;

    // Get container element in which the rows will go
    const container = document.getElementById('board');
    
    // Set the gridTemplateColumns property for all .row elements within #board container
    const rows = container.querySelectorAll('.row');
    rows.forEach(row => {
        row.style.gridTemplateColumns = `repeat(${wotdLength}, auto)`;
    });

    // Define number of rows and columns
    let numRows = 6;

    if (wotdLength != 5) {
        if (wotdLength < 5) {
            numRows = 5;
        } else if (wotdLength <= 7) {
            numRows = 7;
        } else if (wotdLength === 8) {
            numRows = 8;
        } else if (wotdLength === 9) {
            numRows = 9;
        } else {
            numRows = 10;
        }
    }
    
    // Loops to create rows and columns
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 0; j < numCols; j++) {
            const col = document.createElement('div');
            if (wotdLength > 6) {
                if (6 < wotdLength <= 8) {
                    col.style.width = "30px";
                    col.style.height = "30px";
                    col.style.fontSize = "20px";
                }
                else if (8 < wotdLength <= 10) {
                    col.style.width = "35px";
                    col.style.height = "35px";
                    col.style.fontSize = "15px";
                }
            } else {
                col.style.width = "50px";
                col.style.height = "50px";
                col.style.fontSize = "30px";
            }
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}
