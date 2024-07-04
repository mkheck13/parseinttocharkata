// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". 
// The first character in the string is always a number.

// we need to convert the string to a number
// Number() will convert the char to number
// we want to access the first char in the string, inputString[0] will do that
// just return all that
function getAge(inputString){
    return Number(inputString[0])
}


// completely didn't pay attention to the name of the kata
// we will do parseInt now
function getAge(inputString){
    return parseInt(inputString)
}