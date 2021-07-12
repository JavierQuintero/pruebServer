let animado = document.querySelectorAll('.t'); // = selector
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
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

addEventListener('DOMContentLoaded', ()=>{
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_items = document.querySelector('header .menu_document')
            menu_items.classList.toggle('show')
        })
    }
})


