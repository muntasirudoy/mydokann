


    let count = 0;
    //if add to cart btn clicked
    $('.add-to-cart').on('click', function (){
      let cart = $('.cart-nav');
      // find the img of that card which button is clicked by user
      let imgtodrag = $(this).parent('.item').find("img").eq(0);
      if (imgtodrag) {
        // duplicate the img
        var imgclone = imgtodrag.clone().offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        }).css({
          'opacity': '0.8',
          'position': 'absolute',
          'height': '150px',
          'width': '150px',
          'z-index': '11'
        })
        
        
        .appendTo($('body')).animate({
        'top': cart.offset().top + 30,
    'left': cart.offset().left + 30,
       'width': 20,
      'height': 20
    }, 1000, 'easeInOutExpo');
    
        setTimeout(function(){
          count++;
          $(".cart-nav .item-count").text(count);
        }, 1500);

        setTimeout(function () {
            cart.effect('shake', {
            times: 3
             }, 200);
            }, 1500);


        imgclone.animate({
          'width': 0,
          'height': 0
        }, function(){
          $(this).detach()
        });
      }
    });
    
















