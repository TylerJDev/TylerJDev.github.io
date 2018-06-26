$(document).ready(function() {
	$('.project-overlay').css('display', 'block');
	window.sr = ScrollReveal();
	sr.reveal('.project-col')

	const t_hello = ['Hi', 'Hola', 'Howdy', 'Привет', 'Merhaba', 'Bonjour', 'Ciao', 'こんにちは']
	var helloTo = document.querySelectorAll('.changeHello');
	var t_count = 0;
	setInterval(function() {
		for (var x = 0; x < helloTo.length; x++) {
			helloTo[x].textContent = t_hello[t_count];
		}

		if (t_count === t_hello.length - 1) {
			t_count = 0;
		}
		t_count++
	}, 2000)

	$('#modal-social-header').hover(function() {
		$(this).html('Natural habitats');
	}, function() {
		$(this).html('Social');
	});
});
