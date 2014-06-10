function AddFrontZero(inValue, digits) {
	var result = '';
	inValue = inValue.toString();
	if (inValue.length < digits) {
		for ( i = 0; i < digits - inValue.length; i++)
			result += '0';
	}
	result += inValue;
	return result;
}//  [출처] [javascript] Date() : 현재 날짜 시간 가져오기 |작성자 빨간안경


$(document).ready(function() {
	$("#selectionbutton").click(function() {
		var i;

		if ($("#radio-view-a").is(":checked")) {// 학식 추가
			var num = Math.floor(Math.random() * 145) + 1;
			// 1 ~ 145 까지 숫자 하나 생성.
			// 대부분 동일한 확률이지만 와와와 알촌은 약간 높다. 하하하
			if (1 <= num && num <= 10)
				i = 0;
			//한양플라자 3층
			else if (11 <= num && num <= 20)
				i = 1;
			//중식당
			else if (21 <= num && num <= 30)
				i = 2;
			//생과대 7층
			else if (31 <= num && num <= 40)
				i = 3;
			//학생회관 3층
			else if (41 <= num && num <= 50)
				i = 4;
			//신소재 지하
			else if (51 <= num && num <= 60)
				i = 5;
			//행원파크
			else if (61 <= num && num <= 70)
				i = 8;
			//호코리
			else if (71 <= num && num <= 80)
				i = 9;
			//홍콩반점
			else if (81 <= num && num <= 90)
				i = 10;
			//옵션
			else if (91 <= num && num <= 100)
				i = 11;
			//일락
			else if (101 <= num && num <= 110)
				i = 12;
			//도스마스
			else if (111 <= num && num <= 125)
				i = 7;
			//와와
			else if (126 <= num && num <= 145)
				i = 6;
			//알촌
		} else {// 학식 제외
			var num = Math.floor(Math.random() * 85) + 1;
			// 1 ~ 85 까지 숫자 하나 생성.
			//역시 와와와 알촌은 살짝 높다.
			if (1 <= num && num <= 10)
				i = 8;
			//호코리
			else if (11 <= num && num <= 20)
				i = 9;
			//홍콩반점
			else if (21 <= num && num <= 30)
				i = 10;
			//옵션
			else if (31 <= num && num <= 40)
				i = 11;
			//일락
			else if (41 <= num && num <= 50)
				i = 12;
			//도스마스
			else if (51 <= num && num <= 65)
				i = 7;
			//와와
			else if (66 <= num && num <= 85)
				i = 6;
			//알촌
		}
		// 뒤로가기를 눌렀다가 다시 오는 경우를 대비해서.
		$("#menuandmap > .selected").remove();

		$("#menuandmap").prepend("<h1 class='selected' style='text-align:center'>" + restaurant[i].name + "</h1>");
	});

	$("#menubutton").click(function() {
		var i;
		for ( i = 0; i < 13; i++) {
			if (restaurant[i].name == $(".selected").html()) {

				// 뒤로가기를 눌렀다가 다시 오는 경우를 대비해서.
				$("#menuheader > .selected").remove();
				$("#menuboard > .selected").remove();

				$("#menuheader").append("<h1 class='selected ui-title' style='text-align:center'>" + restaurant[i].name + "</h1>");
				if (!restaurant[i].isCafet) {
					$("#menuboard").append("<p class='selected ui-title' style='text-align:center'>" + "학식이 아닌 경우에는 메뉴보기를 지원하지 않습니다." + "</p>");
				} else {
					var date = new Date();
					// 해당 학식에 맞는 xml주소 저장. Date, Day함수들을 사용한다.
					// 그리고 xml파일의 주소는 항상 월요일 기준이므로 date.getDate() - (date.getDay() - 1)%7를 쓴다.

					var monday = AddFrontZero(date.getFullYear(), 4) + "-" + AddFrontZero(date.getMonth() + 1, 2) + "-" + AddFrontZero(date.getDate() - (date.getDay() - 1) % 7, 2);
					var today = AddFrontZero(date.getFullYear(), 4) + "-" + AddFrontZero(date.getMonth() + 1, 2) + "-" + AddFrontZero(date.getDate(), 2);
					var url = "http://www.hanyang.ac.kr/upmu/sikdan/xml/rest";

					if (i < 4) {
						url = url + "010" + (i + 1) + "_" + monday + ".xml";
					} else if (i == 4) {
						url = url + "0106_" + monday + ".xml";
					} else if (i == 5) {
						url = url + "0108_" + monday + ".xml";
					}

					urlYQL = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'" + encodeURIComponent(url) + "'&diagnostics=false";

					$.ajax({
						type : "GET",
						url : urlYQL,
						datatype : "xml",
						success : function(data, textStatus) {
							$("#menuboard > .selected").remove();
							$("menuInfo", data).each(function() {
								if ($("date", this).text() == today) {
									name = $("menu_name", this).text();
									price = $("menu_price", this).text();
									$("#menuboard").append("<tr class='selected'>" + "<td>" + name + "</td>" + "<td>" + price + "</td>" + "</tr>");
								}
							});
						}
					});
				}
				break;
			}
		}
	});

	$("#mapbutton").click(function() {
		var x, y;
		for ( i = 0; i < 13; i++) {
			if (restaurant[i].name == $(".selected").html()) {
				x = restaurant[i].x;
				y = restaurant[i].y;
				break;
			}
		}
		map = new daum.maps.Map(document.getElementById("map"), {
			center : new daum.maps.LatLng(37.555891179826986, 127.0494683876335),
			level : 3	// 줌 레벨.
		});

	});

});
