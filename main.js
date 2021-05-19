const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('Olha quem apareceu..');
	myHeading.textContent = 'Popó!';
}