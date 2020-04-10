const isPyramid = inputString => {
    freqDict = {};

    for (var i = 0; i < inputString.length; i++) {
        tempChar = inputString.charAt(i)

        if ( tempChar in freqDict){
            freqDict[tempChar] ++;
        }
        else{
            freqDict[tempChar] = 1;
        }
      }

      frequencies = freqDict.values()
      frequencies.sort()

      for (var i = 1; i <= frequencies.length; i++) {
        if (i != frequencies[i-1]){
            return false
        }

      }
      return true
};

module.exports = isPyramid;