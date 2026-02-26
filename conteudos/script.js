let BackGround = "#f4f4f4"
function mudarTema() {
    let titulo = document.getElementsByTagName("h1")
    let cabecalho = document.getElementsByTagName("h3")
    let paragrafos = document.getElementsByTagName("p")
    let planoDeFundo = document.body
    let temaTituto = ["#2c3e50","#628ab1"]
    let temaFundo = ["#f4f4f4","#25262b"]
    let temaParagrafo = ["#333","#eaeaea"]
    titulo[0].style.transition = "color 0.5s ease"
    paragrafos[0].style.transition = "color 0.5s ease"
    cabecalho[0].style.transition = "color 0.5s ease"
    planoDeFundo.style.transition = "background-color 0.5s ease"
    planoDeFundo.style.backgroundColor = BackGround
    
    if(BackGround == temaFundo[0]){
        BackGround = temaFundo[1]
        planoDeFundo.style.backgroundColor = BackGround
        for (let i = 0; i < titulo.length; i++) { 
            titulo[i].style.color = temaTituto[1] 
        }
        for (let i = 0; i < paragrafos.length; i++) {
            paragrafos[i].style.color = temaParagrafo[1]
        }
        for (let i = 0; i < cabecalho.length; i++) {
            cabecalho[i].style.color = temaTituto[1]
        }
    }
    else{
        BackGround = temaFundo[0]
        planoDeFundo.style.backgroundColor = BackGround
        for (let i = 0; i < titulo.length; i++) { 
            titulo[i].style.color = temaTituto[0] }
        for (let i = 0; i < paragrafos.length; i++) {
            paragrafos[i].style.color = temaParagrafo[0]
        }
        for (let i = 0; i < cabecalho.length; i++) {
            cabecalho[i].style.color = temaTituto[0]
        }
    }
}
//#f4f4f4 - branco #25262b cinza 
// temaTitulo temaClaro - #2c3e50 temaEscuro - #628ab1
// temaParagrafo temaClaro - #333  temaEscuro - #eaeaea 