var myNodelist = document.getElementByTagName('li');
for(var i = 0; i < myNodelist.length; i++){
	var span = document.createElement('span');
	var txt = document.createTextNode("\u00d7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}