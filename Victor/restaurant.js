
// 식당 구조체 선언.
// 학식 : 학생식당, 중식당, 생과대, 사랑방, 신소재지하, 행원파크 총 6개
// 일반 : 알촌, 와와, 호코리, 홍콩반점, 옵션, 일락, 도스마스 총 7개

var restaurant = new Array(13);

// 식당 구조체. 이름, 번호, 좌표, 학식여부가 들어가있다.
function structMem() {
	var name;
	var x;
	var y;
	var isCafet;
}

for(i = 0; i < 13; i++) {
	restaurant[i] = new structMem();
}

restaurant[0].name = "한양플라자 3층";
restaurant[0].isCafet = true;
restaurant[0].x = 127.0440063;
restaurant[0].y = 37.5564829;

restaurant[1].name = "중식당";
restaurant[1].isCafet = true;
restaurant[1].x = 127.0441844;
restaurant[1].y = 37.5576238;

restaurant[2].name = "생과대 7층";
restaurant[2].isCafet = true;
restaurant[2].x = 127.0468016;
restaurant[2].y = 37.5566739;

restaurant[3].name = "학생회관 3층";
restaurant[3].isCafet = true;
restaurant[3].x = 127.0441844;
restaurant[3].y = 37.5576238;

restaurant[4].name = "신소재 지하";
restaurant[4].isCafet = true;
restaurant[4].x = 127.0452175;
restaurant[4].y = 37.5545677;

restaurant[5].name = "행원파크";
restaurant[5].isCafet = true;
restaurant[5].x = 127.0486172;
restaurant[5].y = 37.5576029;

restaurant[6].name = "알촌";
restaurant[6].isCafet = false;
restaurant[6].x = 127.0401296;
restaurant[6].y = 37.5586157;

restaurant[7].name = "와와";
restaurant[7].isCafet = false;
restaurant[7].x = 127.040168;
restaurant[7].y = 37.5584428;

restaurant[8].name = "호코리";
restaurant[8].isCafet = false;
restaurant[8].x = 127.0404315;
restaurant[8].y = 37.5584844;

restaurant[9].name = "홍콩반점";
restaurant[9].isCafet = false;
restaurant[9].x = 127.0410600;
restaurant[9].y = 37.5601280;

restaurant[10].name = "옵션";
restaurant[10].isCafet = false;
restaurant[10].x = 127.0406470;
restaurant[10].y = 37.5587440;

restaurant[11].name = "일락";
restaurant[11].isCafet = false;
restaurant[11].x = 127.0402818;
restaurant[11].y = 37.5598106;

restaurant[12].name = "도스마스";
restaurant[12].isCafet = false;
restaurant[12].x = 127.0403217;
restaurant[12].y = 37.5584323;