Challenge: 
Using the JavaScript language, have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens on a standard 8x8 chess board with no other pieces on the board. 
The structure of strArr will be the following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the 
chessboard and 8,8 is the top-right). Your program should determine if all of the queens are placed in such a way where none of them are attacking each other. If this is true for the given input, return the string true 
otherwise return the first queen in the list that is attacking another piece in the same format it was provided. 

For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true.





Source: 
https://www.coderbyte.com/language/Eight%20Queens





Thoughts: 
Very cool challenge that kicked my butt for a while! i like passing the math operations in the callback function, that helped me cut out alot of code, but its a bit harder to understand.