$(document).ready(function(){

	// Fixement de la barre de navigation lors du scroll.
	let positionMenuBar = $("#navbar-first").offset().top

	$(window).scroll(function(){
		if ($(this).scrollTop() > positionMenuBar) {
			$("#navbar-first ul").addClass('fixed-navigation');
		}else{
			$("#navbar-first ul").removeClass('fixed-navigation');
		}
	})

	// Menu deroulant au clic.
	$('#list-meilleurs-joueurs-ul').hide()
	$('#list-meilleurs-joueurs').on('click', function(){
		$('#list-meilleurs-joueurs-ul').slideToggle()
	}

)
	// Chargement de la page en Ajax
	$('a').click(function(e){
		let adresse = e.target.href
		adresse = adresse.split('/')
		adresse = adresse[adresse.length - 1]

		$.ajax()
	})

  $('#aside-est').show()


  $('.conference-aside-a').on('click', function(){
    $('#aside-est').toggle()
    $('#aside-ouest').toggle()
  })

  // La conference ouest est inactive au debut.
  $('#aside-ouest-a').addClass('table-inactive');
  $('#aside-est-a').addClass('table-active');

  $('.conference-aside').click(function(){
	  $('#aside-ouest-a').toggleClass('table-active')
	  $('#aside-ouest-a').toggleClass('table-inactive')
	  $('#aside-est-a').toggleClass('table-active')
	  $('#aside-est-a').toggleClass('table-inactive')
  })

})
