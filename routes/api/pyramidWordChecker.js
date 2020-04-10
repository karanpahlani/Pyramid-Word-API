const express = require('express');
const router = express.Router();
const isPyramid = require('../../services/isPyramid');


// POST request:  /api/pyramidWordChecker/inputString
// info: This API accepts strings and return true or false based on if word is pyramid. it returns message invalid input on empty strings. 
 
router.post('/inputString', (req, res) => {
  const {string}  = req.body;
  
  if (string === "") {
    res.status(400).json({
        msg: 'Invalid Input'
      });
    }

  let result = null;
  try {
    result = isPyramid(string);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: 'Server error!'
    });
  }
  
  return res.status(200).json(result);
});

module.exports = router;