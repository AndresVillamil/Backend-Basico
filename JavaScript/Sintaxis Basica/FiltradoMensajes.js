var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['¡Feliz cumpleaños!',
 'Feliz navidad mi amor',
 'Una feliz navidad a toda la familia',
 'Eres todo lo que quiero para Navidad.',
 'Que te mejores pronto'];

for(var i = 0; i < greetings.length; i++) {
 var input = greetings[i];
 if(greetings[i].indexOf('Christmas') !== -1) {
 var result = input;
 var listItem = document.createElement('li');
 listItem.textContent = result;
 list.appendChild(listItem);
 }
}