


(function(){

  var summaryToggle = document.getElementById('summary').addEventListener('click', function(event){

    $('#dwell-summary').toggle('slow');

  });

  var imageOneScroll = document.getElementById('scroll-1').addEventListener('click', function(event){

    window.scrollTo(0, 1080);

  })

  var imageTwoScroll = document.getElementById('scroll-2').addEventListener('click', function(event){

    window.scrollTo(0, 2160);

  });

  var imageThreeScroll = document.getElementById('scroll-3').addEventListener('click', function(event){

    window.scrollTo(0, 3240);

  });

  var imageFourScroll = document.getElementById('scroll-4').addEventListener('click', function(event){

    window.scrollTo(0, 0);

  });

}());
