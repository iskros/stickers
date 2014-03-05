$(document).ready(function  () {
	var n = 0;
	$('.sticker').click(function  () {
		//$('.macbook').append('<div class=' + this +' new"></div>');
		console.log($(this).attr('id'));


		var id = $(this).attr('id');			

		n++;

		if (n <= 12) {
	  		$('.macbook').append('<div class="sticker new" id="' + id +  '"></div>');  		
			$('.macbook .sticker').draggable({containment:'.macbook'});		
		} else {
			alert('No place');
			n = 0;
		}
	});

	$('.clear').click(function  () {
		$('.macbook div').remove();
	});
});