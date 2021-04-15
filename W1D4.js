/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
/********************************************************** */
const areaRectangle = function(l1,l2) {
    area = l1 * l2
    return area
}
console.log('Ex1: ' ,areaRectangle(10, 5))
/********************************************************** */

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
/********************************************************** */
const crazySum = function(int1, int2) {
    return (int1===int2 ? ((int1 + int2) * 3) : int1 + int2)
    // let result = 0
    // if(int1 === int2){
    //     result = (int1 + int2) * 3
    // } else {
    //     result = int1 + int2
    // }
    // return result
}
console.log('Ex2: ' ,crazySum(5, 5))
/********************************************************** */

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
/********************************************************** */
const crazyDiff = function(n1){
    return (n1>19 ? (Math.abs(n1 - 19)) * 3 : Math.abs(n1 - 19))
    // let result = 0
    // if(n1 > 19) {
    //     result = (n1 - 19) * 3
    // } else if(n1 === 19){
    //     result = n1 - 19
    // } else {
    //     result = -(n1 - 19)
    // }
    // return result
}
console.log('Ex3: ' ,crazyDiff(-29))
/********************************************************** */

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

/********************************************************** */
const boundary = function(n) {
    return ((n >= 20 && n <= 100)||(n === 400) ? true : false)
    // if((n >= 20 && n <= 100)||(n === 400)) {
    //     return true
    // } else {
    //     return false
    // }
}
console.log('Ex4: ' ,boundary(400))
/********************************************************** */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */
/********************************************************** */
const strivify = function(string){
    return (string === 'Strive' ? string : 'Strive ' + string)
    // if(string === 'Strive'){
    //     return string
    // } else {
    //     return 'Strive ' + string
    // }
}
console.log('Ex5: ' ,strivify('budy'))
/********************************************************** */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
/********************************************************** */
const check3and7 = function(positiveNum) {
    return (positiveNum % 3 === 0 ? `${positiveNum} is multiple of: 3` 
            : (positiveNum % 7 === 0 ? `${positiveNum} is multiple of: 7` 
            : `${positiveNum} is multiple of: neither 3 nor 7`))
    
    // let multiple = 0
    // if(positiveNum % 3 === 0){
    //     multiple = 3
    // } else if(positiveNum % 7 === 0) {
    //     multiple = 7
    // } else {
    //     multiple = "neither 3 nor 7"
    // }
    // console.log(`${positiveNum} is a multiple of: ${multiple}`)
    // return multiple
}
console.log('Ex6: ' ,check3and7(40))
/********************************************************** */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
/********************************************************** */
const reverseString = function(string) {
    return string.split('').reverse().join('')
    // let reverseString = ''
    // for(i = string.length; i >= 0; i--){
    //     reverseString += string.charAt([i])
    // }
    // console.log(reverseString)
    // return reverseString
}
console.log('Ex7: ' ,reverseString('Strive'))
/********************************************************** */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */
/********************************************************** */
const upperFirst = function (string) {
    let stringArray = string.split(' ')

    for(i=0; i<stringArray.length; i++){
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
    }
    return stringArray.join(' ')
    
    // firstLetter = string.slice(0,1)
    // upperFirstLetter = firstLetter.toUpperCase()

    // let newString = upperFirstLetter
    // for(i=1; i<string.length; i++){
    //     newString += string.charAt([i])
    // }
    // console.log(newString)
    // return newString
}
console.log('Ex8: ' ,upperFirst('capitalize the first letter of each word of a given string'))
/********************************************************** */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
/********************************************************** */
const cutString = function(string) {
    return string.slice(1, string.length - 1)
    // let cut = string.slice(1, string.length - 1)
    // console.log(cut)
    // return cut
}
console.log('Ex9: ' ,cutString('Strive'))
/********************************************************** */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
/********************************************************** */
const giveMeRandom = function(n) {
    let randomArray = []
    for(i=0; i<n; i++) {
        randomArray[i]= Math.floor(Math.random() * 10)
    }
    return randomArray
}
console.log('Ex10: ' ,giveMeRandom(10))
/********************************************************** */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/