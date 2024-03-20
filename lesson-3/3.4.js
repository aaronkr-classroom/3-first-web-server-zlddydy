// listing3.4.js

/**
 * cities 패키지 예시 (p. 77)
 * 
 * require 모듈 설명 (p. 71)
 * 
 * require 모듈은 모듈에 코드를 읽어들이는 역할을 하며, 읽어들인 모듈을 
 * 우리가 만든 모듈의 export 객체에 붙이는 방식으로 수행한다. 그 결과,
 * 가져온 코드가 어떤 방식으로 재사용될 필요가 생겨도 이를 다시 읽어들일
 * 필요가 없어진다.
 */

// 먼저 터미널에서 npm install cities 명령해야 한다.
const cities = require('cities');

var myCity = cities.zip_lookup("82901");
console.log(myCity);

//82901 = Rock Springs, WY
//90201 = Beverly Hills, San Francisco, CA
//60606 = Chicago, IL
//99501 = Anchorage, AK
//33162 = Miami, FL
//10007 = NYC, NY
//77070 = Houston, TX