# Lab 10.1 React Counter with UseEffect

## Overview

The purpose of this lab was to practice using useEffect and useState together to create responsive components.  It was important to implement the useEffect hook to manage side effects and prevent memory leaks or unexpected behavior with the clean up process.

## Features

Activity Tasks

Core Counter Functionality

1. Display Current Count: Show the current count, initialized to 0.
2. Increment Button: A button to increase the count by 1.
3. Decrement Button: A button to decrease the count by 1.

Advanced Features
1. History Tracking:

- Keep a history of all count values. Every time the count changes, add the new count to an array of previous counts.
- Display this history list to the user (e.g., “Previous counts: 0, 1, 2, 1, 2, 3”).

2. Auto-Save Functionality:

- Use useEffect to save the current count to local storage whenever it changes.
- Ensure you handle potential race conditions or cleanup if the count changes again before the “save” completes. (Hint: - cleanup function in useEffect).

3. Keyboard Event Listeners:

- Allow the user to increment the count by pressing the “ArrowUp” key.
- Allow the user to decrement the count by pressing the “ArrowDown” key.
- Use useEffect to add and remove these event listeners to the document.
- Ensure event listeners are cleaned up when the component unmounts or is no longer active.

4. Reset Mechanism:

- Implement a button to reset the count back to 0.
- This reset should also clear the tracked history of counts.

5. Step Input:

- Add an input field where the user can define a custom “step” value.
- The increment and decrement buttons should then use this step value instead of 1.
- Consider how changes to the step value affect the counter and its history.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Vite

## Reflection

This lab was pretty straight forward.  I was able to implement the counter with little trouble, although it did take some time.  One of the challenges I faced was getting the step counter to update.  Proper use of the useState hook helped fix that issue.  The group in breakout room one is helpful as always.  I'm grateful to Hasna, Ervin, Revathi, and Andrea for helping and for the company while I code.