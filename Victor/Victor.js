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

		setTimeout(function() {
			$(location).attr('href', "#loadingpage");
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
			setTimeout(function() {
				$(location).attr('href', "#secondpage");
			}, 7 * 1000);
		}, 1000);

	});

	$("#menubutton").click(function() {
		var i;
		// 선택된 식당의 인덱스를 저장할 변수.
		for ( i = 0; i < 13; i++) {
			if (restaurant[i].name == $(".selected").html()) {

				// 뒤로가기를 눌렀다가 다시 오는 경우를 대비해서.
				$("#menuheader > .selected").remove();
				$("#menuboard > .selected").remove();
				$("#menuheader").append("<h1 class='selected ui-title' style='text-align:center'>" + restaurant[i].name + "</h1>");
				if (!restaurant[i].isCafet) {
					$("#menuboard").append("<p class='selected ui-title' style='text-align:center'>" + "학식이 아닌 경우에는 메뉴보기를 지원하지 않습니다." + "</p>");
				} else if (new Date().getDay() == 0) {
					$("#menuboard").append("<p class='selected ui-title' style='text-align:center'>" + "일요일에는 학식이 없습니다." + "</p>");
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
								var i = 0;
								if (($("date", this).text() == today) && i < 10) {
									i++;
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
		var i;

		for ( i = 0; i < 13; i++) {
			if (restaurant[i].name == $(".selected").html()) {
				x = restaurant[i].x;
				y = restaurant[i].y;
				break;
			}
		}

		// 지도생성
		$("#map").height(screen.height - 50);
		map = new daum.maps.Map(document.getElementById("map"), {
			center : new daum.maps.LatLng(restaurant[i].y, restaurant[i].x),
			level : 1	// 줌 레벨.
		});

		// 마커생성
		var marker = new daum.maps.Marker({
			position : new daum.maps.LatLng(restaurant[i].y, restaurant[i].x)
		});

		// 알림창 생성
		var infowindow = new daum.maps.InfoWindow({
			content : '<p style="margin: 7px 22px 7px 12px;font: 12px/1.5 sans-serif"><strong>도착점</strong></p>',
			removable : true
		});

		navigator.geolocation.getCurrentPosition(function(pos) {
			var lat, lng;
			lat = pos.coords.latitude;
			lng = pos.coords.longitude;
			var marker = new daum.maps.Marker({
				position : new daum.maps.LatLng(lat, lng)
			});
		});
		marker.setMap(map);
		map.relayout();

	});
	/*
	 $("#mapbutton").bind("click", function(event) {
	 var i;
	 // 선택된 식당의 인덱스를 저장할 변수.
	 for ( i = 0; i < 13; i++) {
	 if (restaurant[i].name == $(".selected").html()) {
	 var geo = new GeoTrans();
	 geo.init("katec", "geo");

	 var pt = new Point(restaurant[i].x, restaurant[i].y);
	 var out_pt = geo.conv(pt);
	 //alert("경도 : " + out_pt.x + "\n위도 : " + out_pt.y);

	 //var lat = 48.68341882;
	 //var lng = 2.372738925;37.556192,
	 var latlng = new google.maps.LatLng(37.556192, 127.045391);
	 alert(latlng);
	 var options = {
	 zoom : 15,
	 center : latlng,
	 mapTypeId : google.maps.MapTypeId.ROADMAP
	 };
	 var $content = $("#win2 div:jqmData(role=content)");
	 $content.height(screen.height - 50);
	 var map = new google.maps.Map($content[0], options);
	 $.mobile.changePage($("#win2"));

	 new google.maps.Marker({
	 map : map,
	 animation : google.maps.Animation.DROP,
	 position : latlng
	 });

	 google.maps.relayout();

	 break;
	 }
	 }
	 });*/

});
