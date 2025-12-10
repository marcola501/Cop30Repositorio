alterarlayout = () => {
    let largura = window.innerWidth;
    let navi = document.getElementsByTagName('nav');
    let divs = document.getElementsByClassName('divisores');
    if (largura < 769) {
        navi[0].style.flexDirection = 'column';
        navi[0].style.alignItems = 'center';
        navi[0].style.justifyContent = 'center';
        navi[0].style.gap = '0.5rem';
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.width = '70%';
            divs[i].style.fontSize = '1rem';
            divs[i].style.margin = '8px 0';
            divs[i].style.padding = '3em';
            divs[i].style.borderRadius = '13px';
            divs[i].style.transition = 'padding 0.25s ease, transform 0.25s ease';
        }
    } else {
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
    }
};

window.addEventListener('resize', alterarlayout);
window.addEventListener('load', alterarlayout);