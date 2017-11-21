$(document).ready(function(){
	
	// Fixement de la barre de navigation lors du scroll.
	let positionMenuBar = $("#navbar-first").offset().top
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > positionMenuBar) {
			$("#navbar-first").addClass('fixed-navigation');
		}else{
			$("#navbar-first").removeClass('fixed-navigation');
		}
	})

  $('#aside-est').show()

  $('.navbar-default ul li a').on('click', function(){

      $('#list-meilleurs-joueurs-ul').fadeToggle()

    }

  )

  $('.conference-aside').on('click', function(){
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
