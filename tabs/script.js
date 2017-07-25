var tab;
var tabContent;

window.onload = function(event){
	tab = document.getElementsByClassName('tab');
	tabContent = document.getElementsByClassName('tab-content');
	hideTabContent(1);
};

function hideTabContent(a){
	for (var i=a; i<tabContent.length; i++){
		tabContent[i].classList.add('hide');
		tabContent[i].classList.remove('show');
		tab[i].classList.remove('whiteborder');
	}
}

document.getElementById('tabs').onclick = function(event){
	var target = event.target;
	if(target.className == 'tab' ){
		for(i=0; i<tab.length; i++){
			if(target == tab[i]){
				showTabContent(i);

			}
		}
	}
}

function showTabContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabContent(0);
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
		tab[b].classList.add('whiteborder');
	}
}



