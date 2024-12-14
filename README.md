# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state variable within its dependency array.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version.

## Bug Description
The original code attempts to increment the count state variable within the `useEffect` hook's callback, resulting in a continuous update cycle because it modifies a value that is listed within the dependency array. This leads to an infinite loop and renders the component unresponsive.

## Solution
The solution involves restructuring the dependency array so it does not depend on the state variable that is being updated.  In many cases, this is best achieved by using a different state variable as a trigger and ensuring the effect only executes when necessary.