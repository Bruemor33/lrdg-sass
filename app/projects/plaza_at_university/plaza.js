


(function(){

  var summaryToggle = document.getElementById('summary').addEventListener('click', function(event){

    console.log('I was clicked');

    $('#plaza-summary').toggle('slow');

  })

  $('#scroll-1').click(function(){
    $('#transform').toggleClass('transform-active');
  });
    // window.scrollTo(0, 620);



  var imageTwoScroll = document.getElementById('scroll-2').addEventListener('click', function(event){

    window.scrollTo(0, 1240);

  });

  var imageThreeScroll = document.getElementById('scroll-3').addEventListener('click', function(event){

    window.scrollTo(0, 1860);

  });

  // var imageFourScroll = document.getElementById('scroll-4').addEventListener('click', function(event){
  //
  //   window.scrollTo(0, 0);
  //
  // });

}());
