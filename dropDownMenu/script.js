var nav = document.getElementById('nav');
nav.onmouseover = function(event){
	var target = event.target;
	console.log(event.target);
	if(target.className == 'menu'){
		var s = target.getElementsByClassName('submenu');
		console.log(s);
		
		s[0].style.display = 'block';
	}
}

document.onmouseover = function(event){
	var target = event.target;
	console.log(event.target);
	if(target.className!='menu' && target.className!='submenu'){
		closeMenu();
	}
}

function closeMenu(){
	var menu = document.getElementById('nav');
	var subm = document.getElementsByClassName('submenu');
	for (var i=0; i<subm.length; i++){
		subm[i].style.display = 'none';
	}
}