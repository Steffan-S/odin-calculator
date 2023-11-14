# Assignment: Build a Calculator

### Objective:
This project is going to combine everything you’ve learned so far: you’re going to make an on-screen calculator using JavaScript, HTML, and CSS.

### Task:
Build a basic recipe website with the following specifications:

- Create functions for all of the basic math operators:
    add
    subtract
    multiply
    divide

- A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation.
- Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
- Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
    Do not worry about wiring up the JS just yet.  
    There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
    Add a “clear” button.

- Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
- Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.


[🔗 Live Preview](https://steffan-s.github.io/odin-calculator/)

## Overview

### Features:

- Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time
- Your calculator should not evaluate more than a single pair of numbers at a time.
- You should round answers with long decimals so that they don’t overflow the screen.
- Pressing = before entering all of the numbers or an operator could cause problems!
- Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
- Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

### Tools Used:

- Visual Studio Code: Code editor for development.
- Terminal: Used for various command-line operations.
- Git and GitHub: Version control and collaborative development.

### Screenshots:

<img width="664" alt="Screenshot 2023-11-14 at 12 52 46" src="https://github.com/Steffan-S/odin-calculator/assets/142731728/378c0539-3547-4ecb-a39d-89ef51b9fd7d">

### Contribution

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create an issue or submit a pull request.
