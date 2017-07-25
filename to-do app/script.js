var myNodelist = document.getElementsByTagName('li');

for (var i=0; i < myNodelist.length; i++){
	var span = document.createElement('span');
	var txt = document.createTextNode('\u00d7');
	span.appendChild(txt);
	span.className = 'close';
	myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = 'none';
	}
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	if(ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement(){
	var li = document.createElement('li');
	var input = document.getElementById('myInput').value;
	var txt = document.createTextNode(input);
	li.appendChild(txt);

	if(input === ''){
		alert('Поле не может быть пустым!');
	}else{
		document.getElementById('myUl').appendChild(li);
	}
	document.getElementById('myInput').value = "";

	var span = document.createElement('span');
	var txt = document.createTextNode('\u00d7');
	
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);
	
	var close = document.getElementsByClassName('close');
	for(var i=0; i < close.length; i++){
		close[i].onlclick = function(){
			var div = this.parentElement;
			div.style.display = 'none';
		}
	}
}

