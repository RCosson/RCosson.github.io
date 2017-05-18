setTimeout( function(){
  $(document).ready(function() {
    $(".top").slideDown(750).removeClass('.hidden');
    $(".bottom").slideDown(750).removeClass('.hidden');
  });

  $(document).ready(function(){
      setTimeout(function(){
        $('.nav').slideDown(750).removeClass('.hidden');
       },
    750);
  });

  $(document).ready(function(){
      setTimeout(function(){
        $('.titles').fadeIn(750).removeClass('.hidden');
       },
    1500);
  });
}  , 800 );
