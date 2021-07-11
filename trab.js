let animado = document.querySelectorAll('.t'); // = selector
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    //modificarHeader()
    for(i=0;i<animado.length;i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 650 < scrollTop){
                animado[i].style.opacity = 1; 
                animado[i].classList.add('haciArriba');  
        }else{
            animado[i].style.opacity = 0; 
            animado[i].classList.remove('haciArriba'); 
        }
    }
}
addEventListener('scroll', mostrarScroll);

//Para efecto del header
function modificarHeader(){
    let logo = document.querySelector('.logoE');
    let item_menu = document.querySelector('.contenedor_menu');

    logo.children[0].style.fontSize = "2.1em";
    logo.children[1].style.fontWeight = "300";
    for(let i=0;i>=item_menu.length;i++){
        item_menu.children[i].style.fontSize = "1.2em";
    }
}