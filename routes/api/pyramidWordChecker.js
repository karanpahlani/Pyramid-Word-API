const express = require('express');
const router = express.Router();
const isPyramid = require('../../services/isPyramid');

/**
 * @route        POST /api/uniqueEmailChecker/emails
 * @description  A web service that accepts http post request with a list of emails and returns in response the count of unique emails.
 * @access       public
 */
router.post('/inputString', (req, res) => {
  const inputString = req.body;
  let result = null;
  try {
    result = isPyramid(inputString);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: 'Server error!'
    });
  }
  
  return res.status(200).json(result);
});

module.exports = router;