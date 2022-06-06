const selecionar = (idOuClass) => {
    let elemento = document.querySelector(`${idOuClass}`)
    return elemento
}

const selecionarAll = (idOuClass) => {
    let elemento = document.querySelectorAll(`${idOuClass}`)
    return elemento
}

//-----------------------------------------------------------

const width = document.documentElement.clientWidth
const height = document.documentElement.clientHeight

const altura = window.innerHeight
const largura = window.innerWidth

//botão divs direita, esquerda, setaDireita, setaEsquerda aparece quando o mouse passa e desaparece 
//quando o mouse sai --- inicio

selecionar('#direita').onmouseover = () => {
    selecionar('#direita').style.backgroundColor = '#d4cccc'
    selecionar('#setaDireita').style.display = 'block'
}
selecionar('#direita').onmouseout = () => {
    selecionar('#direita').style.backgroundColor = ''
    selecionar('#setaDireita').style.display = 'none'
}

selecionar('#esquerda').onmouseover = () => {
    selecionar('#esquerda').style.backgroundColor = '#d4cccc'
    selecionar('#setaEsquerda').style.display = 'block'
}
selecionar('#esquerda').onmouseout = () => {
    selecionar('#esquerda').style.backgroundColor = ''
    selecionar('#setaEsquerda').style.display = 'none'
}

//botão divs direita, esquerda, setaDireita, setaEsquerda aparece quando o mouse passa e desaparece 
//quando o mouse sai --- fim

//controle dinamico da distancia entre as class paineis conforme a largura da pagina--------------inicio

function controleDistanciaPaineis(){
    let listaDistanciLeft = []
    let distanciaLeft = -690
    for(let i = 1366; i > 0; i -= 10){
        distanciaLeft += 20
        listaDistanciLeft.push([i, distanciaLeft])
    }
    for(let e = 0; e < listaDistanciLeft.length; e++){
        if(listaDistanciLeft[e][0] == largura || listaDistanciLeft[e][0] < largura) return listaDistanciLeft[e][1]
    }
}

// console.log(controleDistanciaPaineis())

//controle dinamico da distancia entre as class paineis conforme a largura da pagina--------------fim

//botões esquerda e direita ----------------------------------inicio

let controleEsquerdaDireita = 0

function esquerda(controleLeft){
    let temporalizador = setInterval(() => {
        controleEsquerdaDireita -= 10
        //console.log(controleEsquerda)
        selecionar('#painel').style.left = `${controleEsquerdaDireita}px`
        if(controleEsquerdaDireita == controleLeft) clearInterval(temporalizador)
    })
}

function funControleEsqeurda(){
    if(controleEsquerdaDireita == 0) {
        esquerda(controleDistanciaPaineis())
    }else if(controleEsquerdaDireita == controleDistanciaPaineis()) {
        esquerda(controleDistanciaPaineis() * 2)
    }else if(controleEsquerdaDireita == controleDistanciaPaineis() * 2) {
        esquerda(controleDistanciaPaineis() * 3)
    }else if(controleEsquerdaDireita == controleDistanciaPaineis() * 3) {
        esquerda(controleDistanciaPaineis() * 4)
    }
}

function direita(controleRight){
    let temporalizador2 = setInterval(() => {
        controleEsquerdaDireita += 10
        //console.log(controleEsquerda)
        selecionar('#painel').style.left = `${controleEsquerdaDireita}px`
        if(controleEsquerdaDireita == controleRight) clearInterval(temporalizador2)
    })
}

function funControleDireita(){
    if(controleEsquerdaDireita == controleDistanciaPaineis()){
        direita(0)
    }else if(controleEsquerdaDireita == controleDistanciaPaineis() * 2){
        direita(controleDistanciaPaineis())
    }else if(controleEsquerdaDireita == controleDistanciaPaineis() * 3){
        direita(controleDistanciaPaineis() * 2)
    }else if(controleEsquerdaDireita == controleDistanciaPaineis() * 4){
        direita(controleDistanciaPaineis() * 3)
    }
}

selecionar('#direita').onclick = funControleDireita
selecionar('#esquerda').onclick = funControleEsqeurda

//botões esquerda e direita ----------------------------------fim

//configuração de altura e largura div painel -----------------inicio

selecionar('#painel').style.width = `${(largura / 2) * 6}px`
selecionar('#painel').style.height = `${480}px`

//configuração de altura e largura div painel -----------------fim

//controle responsivo da largura das class paineis ----------------------inicio

selecionarAll('.paineis').forEach((a) => a.style.width = `${(largura / 2) - 20}px`)

//controle responsivo da largura das class paineis ----------------------fim

//posição left das divs painelId# e class paineis ----------------------------inicio

function posicaoLeftDivPainelId(posicao){
    let listaPainel = ['#painelId2', '#painelId3', '#painelId4', '#painelId5', '#painelId6']
    let listaPosicaoLeftPaineis = []

    let controlePainel = 0
    // let controleLargura = 688
    let controleLargura = 683

    // selecionar('#painelId1').style.left = `${12}px`
    selecionar('#painelId1').style.left = `${3}px`

    for(let g = 1366; g > 0; g--){
        controleLargura -= 0.5
        listaPosicaoLeftPaineis.push([g, controleLargura])
    }
    
    for(let i = 0; i < listaPainel.length; i++){
        controlePainel += 1
        for(let c = 0; c < listaPosicaoLeftPaineis.length; c++){
            if(posicao == listaPosicaoLeftPaineis[c][0]){
                selecionar(`${listaPainel[i]}`).style.left = `${listaPosicaoLeftPaineis[c][1] * controlePainel}px`
            }
        }
    }
}

posicaoLeftDivPainelId(largura)

//posição left das divs painelId# e class paineis  ----------------------------fim

//controle responsivo da altura da div painel e da class paineis -----------------inicio


let listaControleAlturaDivPainel = []
let controleAlturaDivPainel = 481

for(let q = 1366; q > 480; q--){
    controleAlturaDivPainel -= 0.2
    listaControleAlturaDivPainel.push([q, controleAlturaDivPainel])
}

for(let z = 0; z < listaControleAlturaDivPainel.length; z++){
    if(largura == listaControleAlturaDivPainel[z][0]){
        selecionar('#painel').style.height = `${listaControleAlturaDivPainel[z][1]}px`
        selecionarAll('.paineis').forEach(a => a.style.height = `${listaControleAlturaDivPainel[z][1]}px`)
    }
}

//controle responsivo da altura da div painel e da class paineis -----------------fim

// controle de altura div principal abaixo 1366px------inicio

selecionar('#principal').style.height = `${500}px`
selecionar('.direcionalDireitaEsquerda').style.height = `${500}px`
selecionar('#esquerda').style.height = `${500}px`

let controle = []
let alturDivPrincipal = 500

for(let g = 1366; g > 480; g--){
    alturDivPrincipal -= 0.2
    controle.push([g, alturDivPrincipal])
}

for(let i = 0; i < controle.length; i++){
    if(largura == controle[i][0]){
        selecionar('#principal').style.height = `${controle[i][1]}px`
        selecionar('.direcionalDireitaEsquerda').style.height = `${controle[i][1]}px`
        selecionar('#esquerda').style.height = `${controle[i][1]}px`
    }
}

// controle de altura div principal abaixo 1366px------fim

// controle de altlura (centralizando) divs setaDireita e setaEsquerda --- inicio

let lisatSetaDireitaEsquerda = []
let controleAlturaDivPrincipal = 222

for(let e = 1366; e > 220; e--){
    controleAlturaDivPrincipal -= 0.08
    lisatSetaDireitaEsquerda.push([e, controleAlturaDivPrincipal])
}

for(let t = 0; t < lisatSetaDireitaEsquerda.length; t++){
    if(largura == lisatSetaDireitaEsquerda[t][0]){
        selecionar('#setaDireita').style.top = `${lisatSetaDireitaEsquerda[t][1]}px`
        selecionar('#setaEsquerda').style.top = `${lisatSetaDireitaEsquerda[t][1]}px`
    }
}

// controle de altlura (centralizando) divs setaDireita e setaEsquerda --- fim

//controle de responsividade da altura da div principal e suas divs e class filhas, abaixo de 1366px---inicio

function controleTamanhoIdPrincipalClassDirecionalDireitaEsquerda(){

    const wid = document.documentElement.clientWidth
    const heig = document.documentElement.clientHeight

    const alt = window.innerHeight
    const larg = window.innerWidth //1366

    // controle de altura div principal abaixo 1366px------inicio

    for(let i = 0; i < controle.length; i++){
        if(larg == controle[i][0]){
            selecionar('#principal').style.height = `${controle[i][1]}px`
            selecionar('.direcionalDireitaEsquerda').style.height = `${controle[i][1]}px`
            selecionar('#esquerda').style.height = `${controle[i][1]}px`
        }
    }

    // controle de altura div principal abaixo 1366px------fim

    // controle de altlura (centralizando) divs setaDireita e setaEsquerda --- inicio

    for(let h = 0; h < lisatSetaDireitaEsquerda.length; h++){
        if(larg == lisatSetaDireitaEsquerda[h][0]){
            selecionar('#setaDireita').style.top = `${lisatSetaDireitaEsquerda[h][1]}px`
            selecionar('#setaEsquerda').style.top = `${lisatSetaDireitaEsquerda[h][1]}px`
        }
    }

    // controle de altlura (centralizando) divs setaDireita e setaEsquerda --- fim

    //controle responsivo da altura da div painel e da class paineis -----------------inicio

    for(let y = 0; y < listaControleAlturaDivPainel.length; y++){
        if(larg == listaControleAlturaDivPainel[y][0]){
            selecionar('#painel').style.height = `${listaControleAlturaDivPainel[y][1]}px`
            selecionarAll('.paineis').forEach(a => a.style.height = `${listaControleAlturaDivPainel[y][1]}px`)
        }
    }

    //controle responsivo da altura da div painel e da class paineis -----------------fim

    //controle responsivo da largura das class paineis ----------------------inicio

    selecionarAll('.paineis').forEach(a => a.style.width = `${(larg / 2) - 20}px`)

    //controle responsivo da largura das class paineis ----------------------fim

    //posição left das divs painelId# e class paineis ----------------------------inicio

    posicaoLeftDivPainelId(larg)

    //posição left das divs painelId# e class paineis ----------------------------fim

}

selecionar('#corpo').onresize = controleTamanhoIdPrincipalClassDirecionalDireitaEsquerda

//controle de responsividade da altura da div principal e suas divs e class filhas, abaixo de 1366px---fim