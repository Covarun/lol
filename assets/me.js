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

var titleText = [ "$ Covarun", "$ Covaru", "$ Covar", "$ Cova", "$ Cov", "$ Co", "$ C", "$ ", "$ C", "$ Co", "$ Cov", "$ Cova", "$ Covar", "$ Covaru", "$ Covarun" ];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
