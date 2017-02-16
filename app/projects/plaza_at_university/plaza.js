


(function(){

  var summaryToggle = document.getElementById('summary').addEventListener('click', function(event){

    console.log('I was clicked');

    $('#plaza-summary').toggle('slow');

  });


  var imageOneScroll = document.getElementById('scroll-1').addEventListener('click', function(event){

    window.scrollTo(0, 1080);

  });

  var imageTwoScroll = document.getElementById('scroll-2').addEventListener('click', function(event){

    window.scrollTo(0, 2160);

  });

  var imageThreeScroll = document.getElementById('scroll-3').addEventListener('click', function(event){

    window.scrollTo(0, 3240);

  });

  var imageFourScroll = document.getElementById('scroll-4').addEventListener('click', function(event){

    window.scrollTo(0, 0);

  });

  //
  // var BlurBGImage = (function(){
  //
  //   var $bxWrapper = $('#bx-wrapper'),
  //   //Loading Status
  //   $bxLoading = $bxWrapper.find('div.bx-loading'),
  //   //Container for the BG images and respective canvas
  //   $bxContainer = $bxWrapper.find('div.bx-container'),
  //   //The Background Images we are going to use
  //   $bxImgs = $bxContainer.children('img'),
  //   //Total number of Background Images
  //   bxImgsCount = $bxImgs.length,
  //   //The Thumb Elements
  //   $thumbs = $bxWrapper.find('div.bx-thumbs > a').hide(),
  //   //Current images index
  //   current = 0,
  //   //Variation to show the image;
  //   //(1) - Blurs the current one, fades out and shows the next image;
  //   //(2) - blurs the current one, fades out, and shows the next image (but initially blured)
  //   //speed is the speed of the animation
  //   //blur Factor is the factor use in the StackBlur script
  //   animationOptions = {speed: 700, variation: 1, blurFactor: 10},
  //   //control if currently animating
  //   isAnimating = false,
  //   //Check if canvas is supported
  //   supportCanvas = Modernizer.cavas,
  //
  //   //init function
  //   init = function(){
  //
  //     //preload all images and respective canvas
  //     var loaded = 0;
  //
  //     $bxImgs.each(function(i){
  //
  //       var $bximg = $(this);
  //
  //       //save the position of the image in data-pos
  //       $('<img data-pos="' + $bximg.index() + '"/>').load(function(){
  //
  //         var $img = $(this),
  //         //size of image to be fullscreen and centered
  //         dim = getImageDim($img.attr('src')),
  //         pos = $img.data('pos');
  //
  //         //add the canvas to the DOM
  //         $.when(createCanvas(pos, dim)).done( function() {
  //
  //           ++loaded;
  //
  //           //all images and canvas loaded
  //           if(loaded === $bxImgsCount) {
  //
  //             //show thumbs
  //             $thumbs.fadeIn();
  //
  //             //apply style for bg images and canvas
  //             centerImageCanvas();
  //
  //             //hide loading Status
  //             $bxLoading.hide();
  //
  //             //initialize events
  //             initEvents();
  //
  //           }
  //
  //         });
  //
  //       }).attr('src', $bximg.attr('src'));
  //
  //     });
  //
  //   },
  //   //creates the blurred canvas image
  //   createCanvas = function(dim, pos) {
  //
  //     return $.Deferred(function(dfd) {
  //
  //       //if canvas not supported
  //       if(!supportCanvas) {
  //         dfd.resolve();
  //         return false;
  //       }
  //
  //       //create the canvas element:
  //       //size and position will be the same, like the fullscreen image
  //       var $img = $bxImgs.eq(pos),
  //       imgW = dim.width,
  //       imgH = dim.height,
  //       imgL = dim.left,
  //       imgT = dim.top,
  //
  //       canvas = document.createElement('canvas');
  //
  //       canvas.className = 'bx-canvas';
  //       canvas.width = imgW;
  //       canvas.height = imgH;
  //       canvas.style.width = imgW + 'px';
  //       canvas.style.height = imgH + 'px';
  //       canvas.style.left = imgL + 'px';
  //       canvas.style.top = imgT + 'px';
  //       canvas.style.visibility = 'hidden';
  //       //save the position of the canvas to know which image this is linked to
  //       canvas.setAttribute('data-pos', pos);
  //       //append the canvas to the same container the images are
  //       $bxContainer.append(canvas);
  //       //Blur it using the StackBlur script
  //       stackBlurImage($img.get(0), dim, canvas, animationOptions.blurFactor, false, dfd.resolve);
  //
  //     }).promise();
  //
  //   },
  //   //gets the image size and position in order to make it fullscreen
  //   getImageDim = function(img) {
  //
  //     var $img = new Image();
  //
  //     $img.src = img;
  //
  //     var $win = $(window),
  //     w_w = $win.width(),
  //     w_h = $win.height(),
  //     r_w = w_h / w_w,
  //     i_w = $img.width,
  //     i_h = $img.height,
  //     r_i = i_h / i_w,
  //     new_w, new_h, new_left, new_top;
  //
  //     if(r_w > r_i) {
  //
  //       new_h = w_h;
  //       new_w = w_h / r_i;
  //
  //     }else {
  //
  //       new_h = w_w * r_i;
  //       new_w = w_w;
  //
  //     }
  //
  //     return {
  //       width: new_w,
  //       height: new_h,
  //       left: (w_w - new_w) / 2,
  //       top: (w_h - new_h) / 2
  //     };
  //
  //   },
  //   //initialize the events
  //   initEvents = function() {
  //
  //     $(window).on('resize.BlurBGImage', function(event){
  //
  //       //apply style for bg image and canvas
  //       centerImageCanvas();
  //       return false;
  //
  //     });
  //
  //     //clicking on a thumb reveals the respective bg image
  //     $thumbs.on('click.BlurBGImage', function(event){
  //
  //       var $thumb = $(this),
  //       pos = $thumb.index();
  //
  //       if(!isAnimating && pos !== current) {
  //
  //         $thumbs.removeClass('bx-thumbs-current');
  //         $thumb.addClass('bx-thumbs-current');
  //         isAnimating = true;
  //         //show the background image
  //         showImage(pos);
  //
  //       }
  //
  //       return false;
  //
  //     });
  //
  //   },
  //   //apply style for background image and canvas
  //   centerImageCanvas = function() {
  //
  //     $bxImgs.each(function(i) {
  //
  //       var bximg = $(this),
  //       dim = getImageDim($bximg.attr('src')),
  //       $currCanvas = $bxContainer.children('canvas[data-pos' + $bximg.index() + ']'),
  //       styleCss = {
  //         width	: dim.width,
  //         height : dim.height,
  //         left : dim.left,
  //         top : dim.top
  //       };
  //
  //       $bximg.css(styleCss);
  //
  //       if(supportCanvas)
  //         $currCanvas.css(styleCss);
  //
  //       if(i === current)
  //         $bximg.show();
  //
  //     });
  //
  //   },
  //   //shows the position of the image at "pos"
  //   showImage = function(pos) {
  //
  //     //current image
  //     var $bxImage = $bxImgs.eq(current);
  //     //current canvas
  //     $bxCanvas = $bxContainer.children('canvas[data-pos=' + $bxImage.index() + ']'),
  //     //next image to show
  //     $bxNextImage = $bxImgs.eq(pos),
  //     //next canvas to show
  //     $bxNextCanvas = $bxContainer.children('canvas[data-pos=' + $bxNextImage.index() + ']');
  //
  //     //if canvas is supported
  //     if(supportCanvas) {
  //
  //       $.when($title.fadeOut()).done(function(){
  //
  //         $title.text($bxNextImage.attr('title'));
  //
  //       });
  //
  //       $bxCanvas.css('z-index', 100).css('visibility', 'visible');
  //
  //       $.when($bxImage.fadeOut(animationOptions.speed)).done(function(){
  //
  //         switch(animationOptions.variation){
  //
  //           case 1 :
  //             $title.fadeIn(animationOptions.speed);
  //             $.when($bxNextImage.fadeIn(animationOptions.speed)).done(function(){
  //
  //               $bxCanvas.css('z-index', 1).css('visibility', 'hidden');
  //               current = pos;
  //               $bxNextCanvas.css('visibility', 'hidden');
  //               isAnimating = false;
  //
  //             });
  //             break;
  //           case 2 :
  //             $bxNextCanvas.css('visibility', 'visible');
  //
  //             $.when($bxCanvas.fadeOut(animationOptions.speed * 1.5)).done(function(){
  //
  //               $(this).css({
  //                 'z-index': 1,
  //                 'visibility': 'hidden'
  //               }).show();
  //
  //               $title.fadeIn(animationOptions.speed);
  //
  //               $.when($bxNextImage.fadeIn(animationOptions.speed)).done(function(){
  //
  //                 current = pos;
  //                 $bxNextCanvas.css('visibility', 'hidden');
  //                 isAnimating = false;
  //
  //               });
  //
  //             });
  //             break;
  //
  //         };
  //
  //       });
  //
  //     }
  //     //If canvas is not shown, just work with background image
  //     else {
  //
  //       $title.hide().text($bxNextImage.attr('title')).fadeIn(animationOptions.speed);
  //       $.when($bxNextImage.css('z-index', 102).fadeIn(animationOptions.speed)).done(function(){
  //
  //         current = pos;
  //         $bxImage.hide();
  //         $(this).css('z-index', 101);
  //         isAnimating = false;
  //
  //       });
  //
  //     }
  //
  //   };
  //
  //   return {
  //     init: init
  //   };
  //
  // })();
  //
  // //call the init function
  // BlurBGImage.init();

}());
