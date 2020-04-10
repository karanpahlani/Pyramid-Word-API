# Pyramid-Word-API
This web setvices accepts http requests with strings and returns boolean response.
Written in Nodejs and deployed on heroku: https://pyramid-word-api.herokuapp.com/api/pyramidWordChecker/inputString

# Request Format
body format: { "string":"banana" }

# Response format: 
true

# Examples:
abbcccdddd" will return true; 

"bbccc" will return false since no freq of 1 is present.

"xyyy" will also return false since no char with freq 2 is present between freq 1 and 3.

# Instructions
Hit this URL with POST request:
https://pyramid-word-api.herokuapp.com/api/pyramidWordChecker/inputString
with JSON body format: { "string":"banana" }
and you will recieve output as true or false. 
"Invalid Input" in case of empty string.
