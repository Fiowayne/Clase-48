const header = document.createElement ('header');

header.style.backgroundColor = 'lightblue';
header.style.padding = '12px';

const nav = document.createElement('nav')

const ul = document.createElement('ul');

ul.styles.listStyle ='none';
ul.styles.display = 'flex';
ul.styles.gap = '5px';

const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

const enlace1 = document.createElement('a');
enlace1.href = '/index.html'
enlace1.style.textDecoration = 'none'
enlace1.textContent= 'Inicio'

const enlace2 = document.createElement('a');
enlace1.href = '/pages/pages2.html'
enlace1.textContent = 'Pagina 2'

li1.appendChild(enlace1);

ul.appendChild(li1);

nav.appendChild(ul); 

header.appendChild(nav);

document.body.prepend(header)

