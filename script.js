const colors = [
  /* "red",
  "blue",
  "green",
  "purple",
  "brown",
  "darkblue",
  "black",
  "gold",
   */
    "#0000CC", // Royal Blue
    "#DC143C", // Crimson Red
    "#6A0DAD", // Dark Purple
    "#006400", // Forest Green
    "#D35400", // Deep Orange
    "#C00070", // Hot Pink
    "#000080", // Navy Blue
    "#00796B", // Dark Teal
    "#8B4513", // Chocolate
    "#800000", // Maroon
    "#4B0082", // Indigo
    "#8B008B"  // Dark Magenta
];

const abugida = [
  "ሀ",
  "ሁ",
  "ሂ",
  "ሃ",
  "ሄ",
  "ህ",
  "ሆ",
  "ለ",
  "ሉ",
  "ሊ",
  "ላ",
  "ሌ",
  "ል",
  "ሎ",
  "ሐ",
  "ሑ",
  "ሒ",
  "ሓ",
  "ሔ",
  "ሕ",
  "ሖ",
  "መ",
  "ሙ",
  "ሚ",
  "ማ",
  "ሜ",
  "ም",
  "ሞ",
  "ሠ",
  "ሡ",
  "ሢ",
  "ሣ",
  "ሤ",
  "ሥ",
  "ሦ",
  "ረ",
  "ሩ",
  "ሪ",
  "ራ",
  "ሬ",
  "ር",
  "ሮ",
  "ሰ",
  "ሱ",
  "ሲ",
  "ሳ",
  "ሴ",
  "ስ",
  "ሶ",
  "ሸ",
  "ሹ",
  "ሺ",
  "ሻ",
  "ሼ",
  "ሽ",
  "ሾ",
  "ቀ",
  "ቁ",
  "ቂ",
  "ቃ",
  "ቄ",
  "ቅ",
  "ቆ",
  "በ",
  "ቡ",
  "ቢ",
  "ባ",
  "ቤ",
  "ብ",
  "ቦ",
  "ተ",
  "ቱ",
  "ቲ",
  "ታ",
  "ቴ",
  "ት",
  "ቶ",
  "ቸ",
  "ቹ",
  "ቺ",
  "ቻ",
  "ቼ",
  "ች",
  "ቾ",
  "ነ",
  "ኑ",
  "ኒ",
  "ና",
  "ኔ",
  "ን",
  "ኖ",
  "ኘ",
  "ኙ",
  "ኚ",
  "ኛ",
  "ኜ",
  "ኝ",
  "ኞ",
  "አ",
  "ኡ",
  "ኢ",
  "ኣ",
  "ኤ",
  "እ",
  "ኦ",
  "ከ",
  "ኩ",
  "ኪ",
  "ካ",
  "ኬ",
  "ክ",
  "ኮ",
  "ኸ",
  "ኹ",
  "ኺ",
  "ኻ",
  "ኼ",
  "ኽ",
  "ኾ",
  "ወ",
  "ዉ",
  "ዊ",
  "ዋ",
  "ዌ",
  "ው",
  "ዎ",
  "ዐ",
  "ዑ",
  "ዒ",
  "ዓ",
  "ዔ",
  "ዕ",
  "ዖ",
  "ዘ",
  "ዙ",
  "ዚ",
  "ዛ",
  "ዜ",
  "ዝ",
  "ዞ",
  "ዠ",
  "ዡ",
  "ዢ",
  "ዣ",
  "ዤ",
  "ዥ",
  "ዦ",
  "የ",
  "ዩ",
  "ዪ",
  "ያ",
  "ዬ",
  "ይ",
  "ዮ",
  "ደ",
  "ዱ",
  "ዲ",
  "ዳ",
  "ዴ",
  "ድ",
  "ዶ",
  "ጀ",
  "ጁ",
  "ጂ",
  "ጃ",
  "ጄ",
  "ጅ",
  "ጆ",
  "ገ",
  "ጉ",
  "ጊ",
  "ጋ",
  "ጌ",
  "ግ",
  "ጎ",
  "ጠ",
  "ጡ",
  "ጢ",
  "ጣ",
  "ጤ",
  "ጥ",
  "ጦ",
  "ጨ",
  "ጩ",
  "ጪ",
  "ጫ",
  "ጬ",
  "ጭ",
  "ጮ",
  "ጰ",
  "ጱ",
  "ጲ",
  "ጳ",
  "ጴ",
  "ጵ",
  "ጶ",
  "ጸ",
  "ጹ",
  "ጺ",
  "ጻ",
  "ጼ",
  "ጽ",
  "ጾ",
  "ፀ",
  "ፁ",
  "ፂ",
  "ፃ",
  "ፄ",
  "ፅ",
  "ፆ",
  "ፈ",
  "ፉ",
  "ፊ",
  "ፋ",
  "ፌ",
  "ፍ",
  "ፎ",
  "ፐ",
  "ፑ",
  "ፒ",
  "ፓ",
  "ፔ",
  "ፕ",
  "ፖ",
  "ቨ",
  "ቩ",
  "ቪ",
  "ቫ",
  "ቬ",
  "ቭ",
  "ቮ",
  "ኧ",
  "ቷ",
  "ቿ",
  "ቋ",
  "ኋ",
  "ጓ",
  "ሟ",
  "ቧ",
  "ሷ",
  "ሿ",
  "ካ ኳ",
  "ጧ",
  "ጯ",
  "ዟ",
  "ዧ",
  "ኗ",
  "ኟ",
  "ሏ",
  "ሯ",
  "ፏ",
  "ዷ",
  "ጇ",
  "ጿ",
  "ጷ",
  "ቯ",
  "ሗ",
  "ዃ",
];

/*
==========================================================
AMHARIC LETTER RANDOM GAME
==========================================================

HOW THE GAME WORKS:

1. User clicks START.
2. Four random Amharic letters appear.
3. A 5-second countdown begins.
4. When countdown reaches zero:
   - The four letters disappear.
   - One of the four letters is randomly selected.
   - The selected letter appears in a larger size.
5. User clicks NEXT to start another round.
6. The process repeats until the user stops playing.

IMPORTANT:
The next round NEVER starts automatically.
The user must click the button.
==========================================================
*/

// ==========================================================
// 1. COLORS
// ==========================================================

// These colors are randomly assigned to the four letters.
// Use valid CSS color names.

// ==========================================================
// 2. GET HTML ELEMENTS
// ==========================================================

// Get the Start/Next button from the HTML.
const startButton = document.getElementById("startButton");

// Container that displays the four random letters.
const wordArea = document.getElementById("wordArea");

// Element that displays the final selected letter.
const selectedWord = document.getElementById("selectedWord");

// Element that displays the countdown (5, 4, 3, 2, 1).
const countdown = document.getElementById("countdown");

// ==========================================================
// 3. GAME VARIABLES
// ==========================================================

// Stores the four randomly selected letters for the current round.
let randomWords = [];

// Stores the countdown timer.
// We use ONE timer and clear it after each round.
let countdownInterval = null;

// Controls whether a round is currently running.
let isRunning = false;

// ==========================================================
// 4. START A NEW ROUND
// ==========================================================

function startRound() {
  // ------------------------------------------------------
  // PREVENT ANOTHER ROUND FROM STARTING WHILE ONE IS RUNNING
  // ------------------------------------------------------

  if (isRunning) {
    return;
  }

  // Mark the game as running.
  isRunning = true;

  // ------------------------------------------------------
  // CLEAR PREVIOUS ROUND DATA
  // ------------------------------------------------------

  // Empty the previous four-letter array.
  randomWords = [];

  // Remove letters from the previous round.
  wordArea.innerHTML = "";

  // Clear the previously selected letter.
  selectedWord.textContent = "";

  // Hide the selected letter while showing four new letters.
  selectedWord.style.display = "none";

  // Remove the previous animation.
  selectedWord.classList.remove("grow");

  // ------------------------------------------------------
  // PICK FOUR UNIQUE RANDOM LETTERS
  // ------------------------------------------------------

  // Continue selecting letters until we have four.
  while (randomWords.length < 4) {
    // Generate a random position in the alphabet array.
    const randomIndex = Math.floor(Math.random() * abugida.length);

    // Get the letter at that position.
    const word = abugida[randomIndex];

    // Make sure the same letter is not selected twice.
    if (!randomWords.includes(word)) {
      // Add the new letter to our array.
      randomWords.push(word);
    }
  }

  // ------------------------------------------------------
  // DISPLAY THE FOUR LETTERS
  // ------------------------------------------------------

  randomWords.forEach(function (word, index) {
    // Create a new HTML span for each letter.
    const span = document.createElement("span");

    // Apply the CSS class called "word".
    span.className = "word";

    // Put the Amharic letter inside the span.
    span.textContent = word;

    // --------------------------------------------------
    // POSITION LETTERS IN A 2 x 2 GRID
    // --------------------------------------------------

    // index % 2 gives us column 0 or 1.
    const column = index % 2;

    // Math.floor(index / 2) gives us row 0 or 1.
    const row = Math.floor(index / 2);

    // Position the letter horizontally.
    span.style.left = column * 50 + 25 + "%";

    // Position the letter vertically.
    span.style.top = row * 50 + 25 + "%";
    

    // --------------------------------------------------
    // ASSIGN A RANDOM COLOR
    // --------------------------------------------------

    // Select a random color from the colors array.
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply the selected color.
    span.style.color = randomColor;

    // --------------------------------------------------
    // ADD THE LETTER TO THE SCREEN
    // --------------------------------------------------

    wordArea.appendChild(span);
  });

  // ------------------------------------------------------
  // SHOW THE FOUR LETTERS AND COUNTDOWN
  // ------------------------------------------------------

  wordArea.style.display = "block";

  // Make the countdown visible.
  countdown.style.display = "block";

  // ------------------------------------------------------
  // DISABLE THE BUTTON DURING THE COUNTDOWN
  // ------------------------------------------------------

  // This prevents the user from starting another round
  // before the current round has finished.
  startButton.disabled = true;

  // ------------------------------------------------------
  // START THE 10-SECOND COUNTDOWN
  // ------------------------------------------------------

  // Every new round starts at 10 seconds.
  let seconds = 10;

  // Make sure the countdown starts with the normal color.
  countdown.classList.remove("warning");

  // Display 10 immediately.
  countdown.textContent = seconds;

  // Run this function every 1 second.
  countdownInterval = setInterval(function () {
    // Reduce the countdown by one.
    seconds--;

    // Display the new number.
    countdown.textContent = seconds;

    // --------------------------------------------------
    // CHANGE COUNTDOWN COLOR
    // --------------------------------------------------

    /*
       When the countdown reaches:

           3 → RED
           2 → RED
           1 → RED

       For 10 through 4, the normal color is used.
    */

    if (seconds <= 3 && seconds > 0) {
      // Add the "warning" CSS class.
      countdown.classList.add("warning");
    } else {
      // Remove the "warning" class.
      countdown.classList.remove("warning");
    }

    // --------------------------------------------------
    // COUNTDOWN FINISHED
    // --------------------------------------------------

    if (seconds <= 0) {
      // Stop the timer.
      clearInterval(countdownInterval);

      // Reset the timer variable.
      countdownInterval = null;

      // Select and display one of the four letters.
      selectRandomLetter();
    }
  }, 1000);
}

// ==========================================================
// 5. SELECT ONE RANDOM LETTER AFTER THE COUNTDOWN
// ==========================================================

function selectRandomLetter() {
  // --------------------------------------------------
  // PICK ONE RANDOM LETTER FROM THE FOUR
  // --------------------------------------------------

  const randomIndex = Math.floor(Math.random() * randomWords.length);

  const wordToShow = randomWords[randomIndex];

  // --------------------------------------------------
  // HIDE THE COUNTDOWN
  // --------------------------------------------------

  countdown.style.display = "none";

  // --------------------------------------------------
  // REMOVE THE FOUR ORIGINAL LETTERS
  // --------------------------------------------------

  wordArea.innerHTML = "";

  // --------------------------------------------------
  // DISPLAY THE SELECTED LETTER
  // --------------------------------------------------

  selectedWord.textContent = wordToShow;

  // Make sure the selected letter is visible.
  selectedWord.style.display = "flex";

  // Apply the grow animation.
  selectedWord.classList.remove("grow");

  // Force browser to restart the animation.
  void selectedWord.offsetWidth;

  selectedWord.classList.add("grow");

  // --------------------------------------------------
  // ROUND COMPLETED
  // --------------------------------------------------

  isRunning = false;

  startButton.textContent = "ቀጥል";

  startButton.disabled = false;
}

// ==========================================================
// 6. START / NEXT BUTTON EVENT
// ==========================================================

// Listen for clicks on the same button.
startButton.addEventListener("click", function () {
  // Start a new round.
  // This function will:
  // - Pick four new letters.
  // - Display the four letters.
  // - Reset the countdown to five seconds.
  // - Select one letter after five seconds.

  startRound();
});
