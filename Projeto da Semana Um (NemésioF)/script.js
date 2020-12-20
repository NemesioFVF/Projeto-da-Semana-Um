const nav=document.getElementsByTagName("nav") [0];

//criando um objeto de leitura para retonar a medida em px da distancia do elemento em relação ao topo
const toponav=nav.offsetTop;

window.onscroll=function (){
    fixarmenu();
}

function fixarmenu (){
    if(window.pageYOffset >= toponav){
        nav.classList.add("fixonotopo");
        } else {
            nav.classList.remove("fixonotopo");
        }
}

var img = document.querySelector('#link01')

function changeImg(){
    if(img.src.match('img/l1.png')){
        img.src = 'img/l2.png'
    }
    else if (img.src.match('img/l2.png')) {
        img.src = 'img/l3.png'
    }
    else if (img.src.match('img/l3.png')) {
        img.src = 'img/l4.png'
    }
    else if (img.src.match('img/l3.png')) {
        img.src = 'img/l4.png'
    }
    else if (img.src.match('img/l4.png')) {
        img.src = 'img/l5.png'
    }
    else if (img.src.match('img/l5.png')) {
        img.src = 'img/l6.png'
    }
    else if (img.src.match('img/l6.png')) {
        img.src = 'img/l7.png'
    }
    else if (img.src.match('img/l7.png')) {
        img.src = 'img/l8.png'
    }
    else {
        img.src = 'img/l1.png'
    }
}

// para treinar usei getElementById pra ver se dava bom

var img2 = document.getElementById('link02')

img2.onclick = function changeImg(){
    if(img2.src.match('img/l10.png')){
        img2.src = 'img/l11.png'
    }
    else if (img2.src.match('img/l11.png')) {
        img2.src = 'img/l12.png'
    }
    else if (img2.src.match('img/l12.png')) {
        img2.src = 'img/l13.png'
    }
    else if (img2.src.match('img/l13.png')) {
        img2.src = 'img/l14.png'
    }
    else if (img2.src.match('img/l14.png')) {
        img2.src = 'img/l15.png'
    }
    else if (img2.src.match('img/l15.png')) {
        img2.src = 'img/l16.png'
    }
    else if (img2.src.match('img/l16.png')) {
        img2.src = 'img/l17.png'
    }
    else if (img2.src.match('img/l17.png')) {
        img2.src = 'img/l18.png'
    }
    else {
        img2.src = 'img/l10.png'
    }
}

var texto = document.getElementById('title')
function changeText(){
    if(texto.innerHTML == "<br>" + 'Link'){
        texto.innerHTML =  "<br>" + 'O Link não é a Princesa Zelda'
        texto.style.fontSize = '7em'
        texto.letter.spacing = '28px'
    } 
    else if (texto.innerHTML == "<br>" + 'O Link não é a Princesa Zelda') {
        texto.innerHTML =  "<br>" + "<br>" + "<br>" +'"Mas então, quando toda a esperança havia acabado, e o fim parecia iminente...' + "<br>" + 'um jovem garoto de vestes verdes apareceu como que do nada.' + "<br>" + 'Empunhando uma lâmina que bania o mal, ele aprisionou o ser das trevas e trouxe à luz de volta à terra...."' + "<br>" + "<br>" + '— Prólogo de The Wind Waker'
        texto.style.fontSize = '2em'
        texto.letter.spacing = '5px'
    }
    else{
        texto.innerHTML = "<br>" + 'Link'
        texto.style.fontSize = '7em'
        texto.letter.spacing = '28px'
    }
}


// exibindo a tada e hora
document.querySelector('.datahj').innerHTML = new Date().toLocaleString()


// controlando a musca 

var Audio = document.getElementById('audioZL');
var play = document.getElementById('play');
var pause = document.getElementById('pause');

var playShow = function() {
  Audio.play();
  play.style.display = "none";
  pause.style.display = "inline-block";
};

var pauseShow = function() {
  Audio.pause();
  play.style.display = "inline-block";
  pause.style.display = "none";
};