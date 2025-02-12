const header = document.createElement ('header');

header.style.backgroundColor = 'lightblue';
header.style.padding = '12px';

const nav = document.createElement('nav')

const ul = document.createElement('ul');

ul.style.listStyle ='none';
ul.style.display = 'flex';
ul.style.gap = '30px';


const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')

const enlace1 = document.createElement('a');
enlace1.href = '/index.html'
enlace1.style.textDecoration = 'none'
enlace1.textContent= 'Inicio'

const enlace2 = document.createElement('a');
enlace2.href = '/pages/pages2.html'
enlace2.style.textDecoration = 'none'
enlace2.textContent = 'Pagina 2'

const enlace3 = document.createElement('a');
enlace3.href = '#'
enlace3.style.textDecoration = 'none'
enlace3.textContent = 'volver atras!'

enlace3.addEventListener('click', (event) => {
    event.preventDefault ();
    window.history.back();
})

const enlace4 = document.createElement('a');
enlace4.href = '/pages/page3.html'
enlace4.style.textDecoration = 'none'
enlace4.textContent = 'Pagina 3'

li1.appendChild(enlace1);
li2.appendChild(enlace2);
li3.appendChild(enlace3);
li4.appendChild(enlace4);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4); 


nav.appendChild(ul);

header.appendChild(nav);

document.body.prepend(header)

