/*自定义js文件
 * */
/*animate特效**/
$(document).scroll(function() {
	var s = $(document).scrollTop();
	if (s > 0 && s < 600) {
		$('#we').addClass('animated slideInLeft');
	} else {
		$('#we').removeClass('animated slideInLeft');
	}

	if (s > 1080 && s < 1080 + 900) {
		$('#girl').addClass('animated slideInLeft');
	} else {
		$('#girl').removeClass('animated slideInLeft');
	}

	if (s > 1080 + 100 && s < 1080 + 800) {
		$('#boy').addClass('animated slideInRight');
	} else {
		$('#boy').removeClass('animated slideInRight');
	}

	if (s > 1080 * 2 - 400 && s < 1080 * 2 + 1000) {
		$('#tabs1').addClass('animated fadeInLeftBig');
	} else {
		$('#tabs1').removeClass('animated fadeInLeftBig');
	}

	if (s > 1080 * 2 && s < 1080 * 2 + 1080 + 500) {
		$('#tabs2').addClass('animated slideInRight');
	} else {
		$('#tabs2').removeClass('animated slideInRight');
	}

	if (s > 1080 * 3 + 400 && s < 1080 * 3 + 1080 + 500 + 200) {
		$('#tabs3').addClass('animated slideInDown');
	} else {
		$('#tabs3').removeClass('animated slideInDown');
	}

	if (s > 1080 * 4 - 200 && s < 1080 * 4 + 1080 + 100) {
		$('#tabs4').addClass('animated slideInUp');
	} else {
		$('#tabs4').removeClass('animated slideInUp');
	}


	if (s > 1080 * 6 - 500 && s < 1080 * 6 + 1080 - 300) {
		$('#tabs5').addClass('animated slideInLeft');
	} else {
		$('#tabs5').removeClass('animated slideInLeft');
	}


	if (s > 1080 * 7 - 1000 && s < 1080 * 7 + 1080 - 700) {
		$('#tabs6').addClass('animated slideInRight');
	} else {
		$('#tabs6').removeClass('animated slideInRight');
	}
});
/*图片展示**/
var viewer = new Viewer(document.getElementById('biyezhao'), {
	url: 'data-original'
});

var viewer = new Viewer(document.getElementById('picDisplay1'), {
	url: 'data-original'
});

var viewer = new Viewer(document.getElementById('picDisplay2'), {
	url: 'data-original'
});
/*返回顶部*/
var toTOP = true;
var timer = null;
window.onload = function() {
	var otop = document.getElementById('toTop');

	otop.onclick = function() {
		timer = setInterval(function() {
			toTOP = true;
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.ceil(osTop / 10);
			document.documentElement.scrollTop -= ispeed;
			document.body.scrollTop -= ispeed;
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 20);
	}
}

window.onscroll = function() {
	if (toTOP != true) {
		clearInterval(timer);

	}
	toTOP = false;
}