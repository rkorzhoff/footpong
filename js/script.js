var ball = $('.ball')
var fieldHeight = $('.field').height() - 50;
var fieldWidth = $('.field').width() - 50;
var posYMin = Math.min(0, fieldHeight);
var posYMax = Math.max(0, fieldHeight);


ball.on('click', function () {
	var posX = ball.position().left;
	var posY = Math.floor(Math.random() * (posYMax - posYMin + 1) + posYMin);
	if (posX === 0) {
		ball.animate({
			top: posY,
			left: fieldWidth
		}, 1000, ddd(posY))
	} else {
		ball.animate({
			top: posY,
			left: '0'
		}, 1000, ddd(posY))
	}
});
function ddd(posY) {
	if (posY >=200 && posY <=280) {
		alert('ГОЛ!');
	} else {
		alert('Промах!');
	}
	console.log(posY) 	
}
