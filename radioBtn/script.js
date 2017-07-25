/*function fun1(){
	var cbox;
cbox = document.getElementById('one');
if(cbox.checked){
	alert("Чек-бокс выбран!");
}else{
	alert("Чек-бокс не выбран!");
}
}
*/
function fun1(){
	var radi = document.getElementsByName('r1');
	for (var i = 0; i < radi.length; i++){
		if (radi[i].checked){
			alert("Выбран " + i + " -й" + "элемент");
		}
	}
}