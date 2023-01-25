"use strict"

const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
const allBody = document.body;

menuBurger.addEventListener('click', function(){
	if (menuBody.classList.contains('_active')){
	menuBurger.classList.remove('_active');
	menuBody.classList.remove('_active');	
	document.body.style.cssText = '';
	} else{
	menuBurger.classList.add('_active');
	menuBody.classList.add('_active');	
	document.body.style.cssText = `overflow: hidden`;
	}
})
