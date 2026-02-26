const alterarlayout = () => {
    const fotter = document.getElementById('HiddenShow');
    const largura = window.innerWidth;
    const grama = document.getElementsByClassName('grama-fundo');
    const navi = document.getElementsByTagName('nav');
    const divs = document.getElementsByClassName('divisores');

    if (!navi.length) return;

    if (largura < 769) {//para telas menores que 769px
        navi[0].style.flexDirection = 'column';
        navi[0].style.alignItems = 'center';
        navi[0].style.justifyContent = 'center';
        navi[0].style.gap = '0.5rem';

        if (fotter) {
            fotter.style.display = 'none';
        }

        if (grama.length && grama[0] instanceof HTMLElement) {
            grama[0].style.display = 'none';
        }

        for (let i = 0; i < divs.length; i++) {
            const divisor = divs[i];
            if (!(divisor instanceof HTMLElement)) continue;

            divisor.style.width = '70%';
            divisor.style.fontSize = '1rem';
            divisor.style.margin = '8px 0';
            divisor.style.padding = '3em';
            divisor.style.borderRadius = '13px';
            divisor.style.transition = 'padding 0.25s ease, transform 0.25s ease';
        }
    } else {//para telas maiores ou iguais a 769px
        navi[0].style.flexDirection = 'row';
        navi[0].style.alignItems = 'center';
        navi[0].style.justifyContent = 'center';
        navi[0].style.gap = '0.5rem';

        for (let i = 0; i < divs.length; i++) {
            const divisor = divs[i];
            if (!(divisor instanceof HTMLElement)) continue;

            divisor.style.width = 'auto';
            divisor.style.fontSize = '1.2rem';
            divisor.style.margin = '0 8px';
            divisor.style.padding = '3.4em';
            divisor.style.borderRadius = '14px';
            divisor.style.transition = 'padding 0.25s ease, transform 0.25s ease';
        }

        if (fotter) {
            fotter.style.display = 'block';
        }

        if (grama.length && grama[0] instanceof HTMLElement) {
            grama[0].style.display = 'block';
        }
    }
};

window.addEventListener('resize', alterarlayout);
window.addEventListener('load', alterarlayout);


