

function smoothScroll(){
  let navOffset = document.querySelector("nav").getBoundingClientRect().height;
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          console.log(target.offset());
          console.log(navOffset);
          event.preventDefault();
          $('html, body').animate({
            scrollTop: (target.offset().top - navOffset)
          }, 1000);
        }
      }
    });  
}

