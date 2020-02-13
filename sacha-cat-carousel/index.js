'use strict';


function thumbnailToggle() {
  
  // when a user selects one of the .thumbnail images using the mouse or keyboard, that image should be displayed in the full-size .hero image container at the top.

  // Updating the image should also update its alt attribute.

  $('.thumbnail').click(event => {
    // initially console.log to test if event listener is firing as expected
    // console.log(event.target);

    // find '.thumbnail' img src event.currentTarget
    const imgSrc = $(event.currentTarget).find('img').attr('src');
    // console.log(imgSrc);

    // find '.thumbnail' alt attribute, too
    const altSrc = $(event.currentTarget).find('img').attr('alt');
    // console.log(altSrc);

    // replace '.hero' img src and alt with event.currentTarget
    $('.hero img').attr('src', imgSrc);
    $('.hero img').attr('alt', altSrc);

    // To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.
    // ... so didn't have to write any code for this as this functionality appears to be automatically inherent in the HTML, but I don't know why?
  });

}
$(thumbnailToggle);




// REMINDER TO SELF: DEBUGGING TIP

/*
Make sure your event listener is firing when you expect it
Make sure you're selecting the right node(s)
Make sure you're capturing the right data

e.g.

$('img').click((e) => {
  // test listener before writing a lot of code...
  console.log(e.target);
});

*/