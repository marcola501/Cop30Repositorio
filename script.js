alterarlayout = () => {
    let fotter = document.getElementById('HiddenShow');
    let largura = window.innerWidth;
    let grama = document.getElementsByClassName("grama-fundo")
    let navi = document.getElementsByTagName('nav');
    let divs = document.getElementsByClassName('divisores');
    if (largura < 769) {//para telas menores que 769px
        navi[0].style.flexDirection = 'column';
        navi[0].style.alignItems = 'center';
        navi[0].style.justifyContent = 'center';
        navi[0].style.gap = '0.5rem';
        fotter.style.display = 'none';
        
        grama[0].style.display = 'none'

        for (let i = 0; i < divs.length; i++) {
            divs[i].style.width = '70%';
            divs[i].style.fontSize = '1rem';
            divs[i].style.margin = '8px 0';
            divs[i].style.padding = '3em';
            divs[i].style.borderRadius = '13px';
            divs[i].style.transition = 'padding 0.25s ease, transform 0.25s ease';
        }
    } else {//para telas maiores ou iguais a 769px
        navi[0].style.flexDirection = 'row';
        navi[0].style.alignItems = 'center';
        navi[0].style.justifyContent = 'center';
        navi[0].style.gap = '0.5rem';
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.width = 'auto';
            divs[i].style.fontSize = '1.2rem';
            divs[i].style.margin = '0 8px';
            divs[i].style.padding = '3.4em';
            divs[i].style.borderRadius = '14px';
            divs[i].style.transition = 'padding 0.25s ease, transform 0.25s ease';
        }
        fotter.style.display = 'block';
    }
};

window.addEventListener('resize', alterarlayout);
window.addEventListener('load', alterarlayout);


//function alterarTema() {
//    let body = document.getElementsByTagName('body')
//
//    try {
//        if (localStorage.getItem('tema') === 'escuro'){
//        body[0].style.backgroundColor = '#f5f5f5';
//        localStorage.setItem('tema', 'claro');
//    } else {
//        body[0].style.backgroundColor = '#1a1a1a';
//            localStorage.setItem('tema', 'escuro');}
//    } catch (e) {
//        if (e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
//            console.error('Storage cheio');
//            // tratar: limpar itens antigos, avisar usuário, etc.
//        } else {
//            throw e;
//        }
//    }
//
//    let tema = localStorage.getItem('tema')
//    if (tema === 'escuro'){
//        body[0].style.backgroundColor = '#1a1a1a';
//    } else {
//        body[0].style.backgroundColor = '#f5f5f5';
//    }
//};