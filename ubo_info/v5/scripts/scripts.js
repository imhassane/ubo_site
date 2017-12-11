$(jQuery).ready(function(){

  // Fonction de scroll
  $.fn.scrollView = function () {
  return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 500);
    });
  }

  $('#web-dev').click(function(){
    $('#footer-dev-conseils').slideToggle(500)
    $('#footer-web-conseils').slideToggle(500)
    $('#footer-web-conseils').scrollView()
  })

  $('#soft-dev').click(function(){
    $('#footer-dev-conseils').slideToggle(500)
    $('#footer-web-conseils').slideToggle(500)
    $('#footer-dev-conseils').scrollView()
  })

  $('#backend-title').click(function(e){
      e.preventDefault()
      $('#frontend').slideToggle(500)
      $('#backend').slideToggle(500)
  })

  $('#frontend-title').click(function(e){
      e.preventDefault()
      $('#backend').slideToggle(500)
      $('#frontend').slideToggle(500)
  })

  // Personnalisation du pied de page du blog.
  $('#plus-loin-frontend').click(function(){
    $('#frontend-plus-loin').slideToggle(500)
    $('#frontend-plus-loin').scrollView()
  })

  $('#plus-loin-backend').click(function(){
    $('#backend-plus-loin').slideToggle(500)
    $('#backend-plus-loin').scrollView()
  })


  // Pour la gestion des medias queries
  $('#navbar-brand li a').click(function(){
    if($(window).width() < 850){
      // Gestion du menu de navigation
      let click_counter = 0;
      $('#navbar-brand li').click(function(){
        click_counter++
        if(click_counter % 2 == 1){
          $(this).css({borderBottom: '1px solid white'})
        }
        $('#navbar-items').slideToggle(500)
        if(click_counter % 2 == 0){
          $(this).css({borderBottom: 'none'})
        }

      })
    }else{
      $('#navbar-items').addClass('inline-menu-items')
    }
  })
})
