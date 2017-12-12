$(jQuery).ready(function(){

  // Affichage du formulaire de contact.
  let btn = $('#contact_btn')

  $(btn).click(function(){
    window.open('pages/contact.html','Formulaire de contact','menubar=no, scrollbars=no, top=100, left=100, width=400, height=450')
  })

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
  const media_query_screen_size = 619
  $('#navbar-brand li a').click(function(){
    if($(window).width() < media_query_screen_size){
      let $navbar = $('#navbar-brand li a')
      $($navbar).removeClass('inline-menu-items')
      // Gestion du menu de navigation
      $('#navbar-items').slideToggle(500)
    }

  })

  let learn_code      = $('#apprendre_code_title')
  let learn_code_div  = $('#apprendre_list')
  let conseils_title  = $('#conseils_title')
  let web_part        = $('#web-dev-list')
  let software_part   = $('#dev-list')
  let goals_title     = $('#goals_title')
  let goals_title_div = $('#goals')

  $(learn_code).click(function(){
    if($(window).width() < media_query_screen_size){
      $(web_part).slideUp(500)
      $(software_part).slideUp(500)
      $(goals_title_div).slideUp(500)
      $(learn_code_div).slideDown(500)
    }
  })
  $(conseils_title).click(function(){
    if($(window).width() <= media_query_screen_size){
      $(learn_code_div).slideUp(500)
      $(goals_title_div).slideUp(500)
      $(web_part).slideDown(500)
      $(software_part).slideDown(500)
    }
  })
  $(goals_title).click(function(){
    if($(window).width() < media_query_screen_size){
      $(learn_code_div).slideUp(500)
      $(goals_title_div).slideDown(500)
      $(web_part).slideUp(500)
      $(software_part).slideUp(500)
    }
  })

  // On affiche tous les éléments masqués après les medias queries.
  let counter = 0;
  $(window).resize(function(){
    if($(window).width() >= media_query_screen_size && counter == 1){
      location.reload(false)
      counter = 0;
    }else{
      counter = 1;
    }
  })
})
