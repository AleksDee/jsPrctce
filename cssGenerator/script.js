function fun1(){

	var ran1 = document.getElementById('rul').value;
	var ran2 = document.getElementById('rbl').value;
	var ran3 = document.getElementById('rur').value;
	var ran4 = document.getElementById('rbr').value;

	var txt1 = document.getElementById('tul');
	var txt2 = document.getElementById('tbl');
	var txt3 = document.getElementById('tur');
	var txt4 = document.getElementById('tbr');

	var grBlock = document.getElementById('block2');

	txt1.value = ran1;
	txt2.value = ran2;
	txt3.value = ran3;
	txt4.value = ran4;

	grBlock.style.borderRadius = ran1 + "px " + ran2 + "px " + ran3 + "px " + ran4 + "px";

}

