/**
 * @description isPyramid function takes input string and checks if it is a pyramid word. The logic implemented here keeps track of char count in the strings
 *              It then checks if the frequencies/count when sorted are consequtive and without blanks or not. The function return true or false based on if word is pyramid.
 *              
 *              for instance: word "banana" will return true since it is pyramid woth 1-b 2-n 3-a and the word bandana is not since b and d have same frequecy.
 *              
 *              More examples:"abbcccdddd" will return true; "bbccc" will return false since no freq of 1 is present.
 *                            "xyyy" will also return false since no char with freq 2 is present between freq 1 and 3.  
 *                 
 * @input word(string)
 */


const isPyramid = inputString => {
    var freqDict = {};
    var frequencies = [];
    //freqDict to count occurences of char in inputString.
    //frequencies array keeps list of all frequencies

    for (var i = 0; i < inputString.length; i++) {
        tempChar = inputString.charAt(i)
        if ( tempChar in freqDict){
            freqDict[tempChar] ++;                  // this loop fills the freqDict
        }
        else{
            freqDict[tempChar] = 1;
        }
      }

    
    for (var key in freqDict){
        frequencies.push(freqDict[key])             //extracting all values from freqDict to the array
    }
    
    frequencies.sort()                              //sorting frequency array


    for (var i = 1; i <= frequencies.length; i++) {
        if (i != frequencies[i-1]){                 
            return false                            //check if all the values in array are consecutive and not no duplicates are present
        }

    }

    return true;                                    // returning true if the entire array is  consecutive
};
module.exports = isPyramid;