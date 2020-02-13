'use strict';

function results() {

  $('#number-chooser').submit(event => {
    
    // stop default form submission behaviour
    event.preventDefault();

    // get number submitted
    //  parseInt() function parses a string argument and returns an integer
    const num = parseInt( $(event.currentTarget).find('input[name="number-choice"]').val());
    console.log(num);


    // insert <div> element with class selector
    $('.js-results').addClass('fizz-buzz-item');

    // set up conditional for results
    if (num >= 0) {
      if (num % 3 === 0 && num % 5 === 0) {
        //fizzbuzz
      } else if (num % 3 === 0) {
        //fizz
      } else if (num % 5 === 0) {
        //buzz
      } else {
        //display number
      }
    } else {
      // null, not a positive number
    }


    // console.log('listener firing!!');
    // console.log(event.target);
  });
}
$(results);