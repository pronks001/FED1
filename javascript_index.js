window.onload = function(){ 
	//toggle de artikelen
	
	var mq = window.matchMedia( "(min-width: 1000px)" );
	
	var artikel1 = document.querySelector('article:nth-of-type(2)');
	var artikel2 = document.querySelector('article:nth-of-type(3)');
	var artikel3 = document.querySelector('article:nth-of-type(4)');
	var artikel4 = document.querySelector('article:nth-of-type(5)');
	var artikel5 = document.querySelector('article:nth-of-type(6)');
	var artikel6 = document.querySelector('article:nth-of-type(7)');
	var artikel7 = document.querySelector('article:nth-of-type(8)');
	var artikel8 = document.querySelector('article:nth-of-type(9)');
	var artikel9 = document.querySelector('main > article:nth-of-type(1)');

	var titel1 = document.querySelector('main > h1:nth-of-type(1)');
	var titel2 = document.querySelector('main > h1:nth-of-type(2)');
	var titel3 = document.querySelector('main > h1:nth-of-type(3)');
	
	if (mq.matches) {
	// window width is at least 500px
		artikel1.classList.add('is-invisible');
		artikel2.classList.add('is-invisible');
		artikel3.classList.add('is-invisible');
		artikel4.classList.add('is-invisible');
		artikel5.classList.add('is-invisible');	
		
		titel2.classList.add('is-inactive');
		
		document.querySelector('main > h1:nth-of-type(2)').onclick = function() {
			artikel1.classList.add('is-flexible');
			artikel2.classList.add('is-flexible');
			artikel3.classList.add('is-flexible');
			artikel4.classList.add('is-flexible');
			artikel5.classList.add('is-flexible');
			artikel9.classList.add('is-invisible');
			artikel9.classList.remove('is-visible');
			artikel6.classList.remove('is-flexible');
			artikel7.classList.remove('is-flexible');
			artikel8.classList.remove('is-flexible');
			titel1.classList.add('is-inactive');
			titel3.classList.add('is-inactive');
			titel2.classList.remove('is-inactive');
		}
		
		//Toogle de projecten
		artikel6.classList.add('is-invisible');
		artikel7.classList.add('is-invisible');
		artikel8.classList.add('is-invisible');

		titel3.classList.add('is-inactive');
		
		document.querySelector('main > h1:nth-of-type(3)').onclick = function() {
			artikel6.classList.add('is-flexible');
			artikel7.classList.add('is-flexible');
			artikel8.classList.add('is-flexible');
			artikel9.classList.add('is-invisible');
			artikel9.classList.remove('is-visible');	
			artikel1.classList.remove('is-flexible');
			artikel2.classList.remove('is-flexible');
			artikel3.classList.remove('is-flexible');
			artikel4.classList.remove('is-flexible');
			artikel5.classList.remove('is-flexible');
			titel2.classList.add('is-inactive');
			titel1.classList.add('is-inactive');
			titel3.classList.remove('is-inactive');
		}	
		
		//toggle hoofd artikel
		artikel9.classList.add('is-visible');
		
		document.querySelector('main > h1:nth-of-type(1)').onclick = function() {
			artikel9.classList.add('is-visible');
			artikel9.classList.remove('is-invisible');
			artikel6.classList.remove('is-flexible');
			artikel7.classList.remove('is-flexible');
			artikel8.classList.remove('is-flexible');
			artikel1.classList.remove('is-flexible');
			artikel2.classList.remove('is-flexible');
			artikel3.classList.remove('is-flexible');
			artikel4.classList.remove('is-flexible');
			artikel5.classList.remove('is-flexible');
			titel2.classList.add('is-inactive');
			titel3.classList.add('is-inactive');
			titel1.classList.remove('is-inactive');
			
			
		}
	}
	else {
		// window width is less than 500px
		artikel1.classList.add('is-invisible');
		artikel2.classList.add('is-invisible');
		artikel3.classList.add('is-invisible');
		artikel4.classList.add('is-invisible');
		artikel5.classList.add('is-invisible');	
		
		document.querySelector('h1:nth-of-type(2)').onclick = function() {
			artikel1.classList.toggle('is-flexible');
			artikel2.classList.toggle('is-flexible');
			artikel3.classList.toggle('is-flexible');
			artikel4.classList.toggle('is-flexible');
			artikel5.classList.toggle('is-flexible');		
		}
		
		//Toogle de projecten
		artikel6.classList.add('is-invisible');
		artikel7.classList.add('is-invisible');
		artikel8.classList.add('is-invisible');

		document.querySelector('h1:nth-of-type(3)').onclick = function() {
			artikel6.classList.toggle('is-flexible');
			artikel7.classList.toggle('is-flexible');
			artikel8.classList.toggle('is-flexible');
		}	
	}	
};