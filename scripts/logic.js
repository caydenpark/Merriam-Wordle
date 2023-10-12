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
    
        // Adjusts width, height, and fontSize for each cell
        for (let j = 0; j < numCols; j++) {
            const col = document.createElement('div');
            if (wotdLength > 5) {
                if (wotdLength == 6) {
                    col.style.width = "45px";
                    col.style.height = "45px";
                    col.style.fontSize = "20px";
                } 
                else if (wotdLength == 7) {
                    col.style.width = "39px";
                    col.style.height = "39px";
                    col.style.fontSize = "20px";
                } 
                else if (wotdLength == 8) {
                    col.style.width = "34px";
                    col.style.height = "34px";
                    col.style.fontSize = "20px";
                }
                else if (wotdLength == 9) {
                    col.style.width = "29px";
                    col.style.height = "29px";
                    col.style.fontSize = "15px";
                }
                else if (wotdLength == 10) {
                    col.style.width = "26px";
                    col.style.height = "26px";
                    col.style.fontSize = "15px";
                }
                else if (wotdLength == 11) {
                    col.style.width = "23px";
                    col.style.height = "23px";
                    col.style.fontSize = "15px";
                }
                else if (wotdLength == 12) {
                    col.style.width = "20px";
                    col.style.height = "20px";
                    col.style.fontSize = "15px";
                }
                else if (wotdLength == 13) {
                    col.style.width = "18px";
                    col.style.height = "18px";
                    col.style.fontSize = "15px";
                }
                else if (wotdLength == 14) {
                    col.style.width = "16px";
                    col.style.height = "16px";
                    col.style.fontSize = "15px";
                }
                else if (wotdLength == 15) {
                    col.style.width = "15px";
                    col.style.height = "15px";
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

