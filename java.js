
const titoloVecchio = 'Sculture moderne'

const modifyH1 = function(){
    document.querySelector('h1').innerText  === titoloVecchio ? document.querySelector('h1').innerText = 'Di Dubbio Gusto!' : document.querySelector('h1').innerText = titoloVecchio 
}


const modifyBgColor = function() {
    let body = document.querySelector('body')
    body.classList.contains('red') ? body.classList.remove('red') : body.classList.add('red')
}

const modifyAddress = function(){
    let address = document.getElementById('address')
    address.innerText === "67100, L'Aquila, Via da qui, 77" ? address.innerText = '69300, Fantasia, Via fasulla, 8' : address.innerText = "67100, L'Aquila, Via da qui, 77"
}

const modifyLink = function(){
    let links = document.querySelectorAll('a')
    for( link of links){
        link.classList.toggle('amazon-link')
    }
}

const hideImages = function(){
    let images = document.querySelectorAll('img')
    for ( let i = 0; i < images.length; i++){
        images[i].classList.toggle('hidden')
    }
}

const getRandomColor = function(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}

const modifyColor = function(){
    let prices = document.getElementsByClassName('price')
    /* for ( price of prices){
        price.style.color = randomColor
    } */
    for ( price of prices ) {
        price.style.color = getRandomColor()
    }
}
