if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "$ StandartCoder", "$ StandartCode", "$ StandartCod", "$ StandartCo", "$ StandartC", "$ Standart", "$ Standar", "$ Standa", "$ Stand", "$ Stan", "$ Sta", "$ St", "$ S", "$ S", "$ St", "$ Sta", "$ Stand", "$ Standa", "$ Standar", "$ Standart", "$ StandartC", "$ StandartCo", "$ StandartCode", "$ StandartCoder" ];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
