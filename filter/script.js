function myFunction(){
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");//поле инпут;
	filter = input.value.toUpperCase();//само значение с поля инпут в верхнем регистре;
	ul = document.getElementById("myUl");//Список ul
	li = document.getElementsByTagName('li');//все элементы li (массив);

	for (i=0; i<li.length; i++){//перебираем элементы li в цикле;
		a = li[i].getElementsByTagName("a")[0];//элемент a, а именно текст внутри него([0]);
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {//Если в преобразованном в врехний регистр тексте есть то что мы ввели(filter), то взовращаем строку, если нет - ничего...
			li[i].style.display = "";
			}
			else{
				li[i].style.display = "none";
			}
	}


}