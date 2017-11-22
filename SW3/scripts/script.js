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

  $('#aside-est').show()
  $('.conference-aside-a').on('click', function(){
    $('#aside-est').toggle()
    $('#aside-ouest').toggle()
  })

  // La conference ouest est inactive au debut.
  $('#aside-ouest-a').addClass('table-inactive');
  $('#aside-est-a').addClass('table-active');

  $('#aside-ouest-a a').click(function(){
		$(this).parent().removeClass('table-inactive')
		$(this).parent().addClass('table-active')
		$('#aside-est-a').addClass('table-inactive')
	})

	$('#aside-est-a a').click(function(){
		$(this).parent().removeClass('table-inactive')
		$(this).parent().addClass('table-active')
		$('#aside-ouest-a').addClass('table-inactive')
	})

})
