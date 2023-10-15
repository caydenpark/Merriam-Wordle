let wotd;
let wotdLength;

async function fetchWOTD() {
    // Get Word of the Day (wotd)
    try {
        const response = await fetch("https://corsproxy.io/?https://www.merriam-webster.com/word-of-the-day");
        if (response.status === 200) {
            const htmlContent = await response.text();
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlContent;
            // wotd = tempDiv.querySelector(".word-header-txt").innerText.toUpperCase();
            wotd = "Block".toUpperCase();
            if (tempDiv.querySelector(".word-header-txt")) {
                // The fetch is complete, and wotd has been set
                console.log("Merriam-Webster's WOTD: ", wotd);
                wotdLength = wotd.length;
                createBoard();
            } else {
                console.error("Failed to find .word-header-txt element.");
            }
        } else {
            throw new Error("Failed to retrieve page content.");
        }
    } catch (error) {
        console.error("Error: ", error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Call the fetchWOTD function when the DOM is ready
    fetchWOTD();
});

function createBoard() {
    /* 
        Create the board based off how long the word of the day is
    */
    
    // Set the gridTemplateColumns property for all .row elements within #board container
    const container = document.getElementById('board');
    const rows = container.querySelectorAll('.row');
    rows.forEach(row => {
        row.style.gridTemplateColumns = `repeat(${wotdLength}, auto)`;
    });
    
    // Define number of rows and columns
    const numCols = wotdLength;    
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
        
        // Adjusts width, height, and fontSize for each tile
        for (let j = 0; j < numCols; j++) {
            const col = document.createElement('div');
            col.id = `${i}-${j}`; // Add unique ID to each tile
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

    let currentRow = 0;
    let currentTile = 0;
    const wotdLetters = wotd.split('');
    let guessLetters = [];
    let guessWord;

// Add event listeners to keyboard keys
const keyboard = document.getElementById('keyboard');
keyboard.addEventListener('click', (e) => {
    const clickedKey = e.target;
    if (clickedKey.id !== 'backspace' && clickedKey.id !== 'enter') {
        // Populate the next empty tile with the clicked key's letter
        const tileId = `${currentRow}-${currentTile}`;
        console.log(`tileID: ${tileId}`);
        const tile = document.getElementById(tileId);
        tile.textContent = clickedKey.textContent;
        currentTile++;
        guessLetters.push(clickedKey.textContent);
        guessWord = guessLetters.join("");
        console.log(guessWord);
    } else if (clickedKey.id == 'backspace') {
        // Handle backspace key: clear the content of the last populated tile
        if (currentTile > 0) {
            currentTile--;
            const tileId = `${currentRow}-${currentTile}`;
            console.log(`tileID: ${tileId}`);
            const tile = document.getElementById(tileId);
            tile.textContent = '';
            guessLetters.pop();
            guessWord = guessLetters.join("");
            console.log(guessWord);
        }
    } else if (clickedKey.id == 'enter') {
        if (wotdLength == guessWord.length) {
            let remainingLetters = wotd.split('');
            for (let i = 0; i < wotdLength; i++) {
                const tileId = `${currentRow}-${i}`;
                console.log(`tileID: ${tileId}`);
                const tile = document.getElementById(tileId);
                if (guessLetters[i] === wotdLetters[i]) {
                    const letterToRemove = guessLetters[i];
                    const indexToRemove = remainingLetters.indexOf(letterToRemove);
                    if (indexToRemove !== -1) {
                        remainingLetters.splice(indexToRemove, 1);
                    }
                    console.log(`tileID: ${tileId}`);
                    tile.classList.add('green-tile');
                    const keyboardLetter = document.getElementById(tile.innerText);
                    keyboardLetter.classList.add('green-key');
                } else {
                    tile.classList.add('gray-tile');
                    const keyboardLetter = document.getElementById(tile.innerText);
                    keyboardLetter.classList.add('gray-key');
                }
                console.log(`Remaining Letters: ${remainingLetters}`);
            }
            for (let i = 0; i < wotdLength; i++) {
                const tileId = `${currentRow}-${i}`;
                console.log(`tileID: ${tileId}`);
                const tile = document.getElementById(tileId);
                if (remainingLetters.includes(guessLetters[i]) && guessLetters[i] !== wotdLetters[i]) {
                    const letterToRemove = guessLetters[i];
                    const indexToRemove = remainingLetters.indexOf(letterToRemove);
                    if (indexToRemove !== -1) {
                        remainingLetters.splice(indexToRemove, 1);
                    }
                    tile.classList.add('yellow-tile');
                    const keyboardLetter = document.getElementById(tile.innerText);
                    keyboardLetter.classList.add('yellow-key');
                }
                console.log(`Remaining Letters: ${remainingLetters}`);
            }
        } else {
            console.error("User's guess not same length as WOTD");
        }
        // Reset guessWord and guessLetters every time enter is pressed
        guessWord = "";
        guessLetters = [];
        currentRow++;
        currentTile = 0;
    }
});
}