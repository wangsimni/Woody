$(document).ready(function() {
	$("#thebutton").click(function() {
		var i;
		if($("#flip-1").val() == "on") { // 학식 추가
			var num = Math.floor(Math.random() * 145) + 1; // 1 ~ 145 까지 숫자 하나 생성.
			// 대부분 동일한 확률이지만 와와와 알촌은 약간 높다. 하하하
			if(1 <= num && num <= 10)
				i = 0;//한양플라자 3층
			else if(11 <= num && num <= 20)
				i = 1;//중식당
			else if(21 <= num && num <= 30)
				i = 2;//생과대 7층
			else if(31 <= num && num <= 40)
				i = 3;//학생회관 3층
			else if(41 <= num && num <= 50)
				i = 4;//신소재 지하
			else if(51 <= num && num <= 60)
				i = 5;//행원파크
			else if(61 <= num && num <= 70)
				i = 8;//호코리
			else if(71 <= num && num <= 80)
				i = 9;//홍콩반점
			else if(81 <= num && num <= 90)
				i = 10;//옵션
			else if(91 <= num && num <= 100)
				i = 11;//일락
			else if(101 <= num && num <= 110)
				i = 12;//도스마스
			else if(111 <= num && num <= 125)
				i = 7;//와와
			else if(126 <= num && num <= 145)
				i = 6;//알촌
		}
		else if($("#flip-1").val() == "off") { // 학식 제외
			var num = Math.floor(Math.random() * 85) + 1; // 1 ~ 85 까지 숫자 하나 생성.
			//역시 와와와 알촌은 살짝 높다.
			if(1 <= num && num <= 10)
				i = 8;//호코리
			else if(11 <= num && num <= 20)
				i = 9;//홍콩반점
			else if(21 <= num && num <= 30)
				i = 10;//옵션
			else if(31 <= num && num <= 40)
				i = 11;//일락
			else if(41 <= num && num <= 50)
				i = 12;//도스마스
			else if(51 <= num && num <= 65)
				i = 7;//와와
			else if(66 <= num && num <= 85)
				i = 6;//알촌
		}
		$(".selected").remove();		// 뒤로가기를 눌렀다가 다시 오는 경우를 대비해서.
		$("#thething").prepend("<h1 class='selected' style='text-align:center'>" + restaurant[i].name + "</h1>");
	});
});