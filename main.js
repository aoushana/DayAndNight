$(document).ready(function() {
  //This code will run after your page loads
  //When button is clicked, check to see if the body has the sun class applied
//  to it, if it does, then remove that class and add moon, otherwise, remove
//  the moon class and add sun.
  $( '#orb' ).click( function() {
    //we want to check to see if the body has the .black class. we will use
    //jquery .hasClass to do that
    if($( '#orb' ).hasClass( 'sun' )){
      //then we want to take the current class away and add a differnt one.
      //use the .removeClass and .addClass jquery functions to do that
       $('#orb').removeClass('sun').addClass('moon');

    } else {
      //otherwise remove white and turn it black
      $('#orb').removeClass('moon').addClass('sun');

    }
    if($( '#sky' ).hasClass( 'day' )){
      //then we want to take the current class away and add a differnt one.
      //use the .removeClass and .addClass jquery functions to do that
       $('#sky').removeClass('day').addClass('night');

    } else {
      //otherwise remove white and turn it black
      $('#sky').removeClass('night').addClass('day');
    }

    if ($('#moonspot1').hasClass('visible')) {
    $('#moonspot1').removeClass('visible');
} else {
    $('#moonspot1').addClass('visible');
}
  if ($('#moonspot2').hasClass('visible')) {
    $('#moonspot2').removeClass('visible');
  } else {
    $('#moonspot2').addClass('visible');
}

if ($('#moonspot3').hasClass('visible')) {
  $('#moonspot3').removeClass('visible');
} else {
  $('#moonspot3').addClass('visible');
}
  });
});
