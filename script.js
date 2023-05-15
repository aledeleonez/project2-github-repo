const tarjeta = document.querySelectorAll('.celda')
const frente = document.querySelectorAll('.frente')
const container = document.querySelector('.container')
const puntuacion = document.querySelector('.puntuacion span')



girarImagen()
click()
function girarImagen(){


    tarjeta.forEach(c=>{

        const num = [...Array(tarjeta.length).keys()]
        const random = Math.floor(Math.random()*tarjeta.length)

        c.style.order = num[random]
    })
}


function click(){

    for(let i =0; i<tarjeta.length; i++){


        frente[i].classList.add('mostrar')

        setInterval(() => {
            frente[i].classList.remove('mostrar')
        }, 2000);

        tarjeta[i].addEventListener('click' ,()=>{

            frente[i].classList.add('girar')
            const tarjetaGirada = document.querySelectorAll('.girar')

            if(tarjetaGirada.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                pareja(tarjetaGirada[0] , tarjetaGirada[1])
            }
        })
    }
}




function pareja(cartaUno , cartaDos){

    if(cartaUno.dataset.index == cartaDos.dataset.index){

        puntuacion.innerHTML = parseInt(puntuacion.innerHTML) + 1
       
        cartaUno.classList.remove('girar') 
        cartaDos.classList.remove('girar') 


        cartaUno.classList.add('pareja')
        cartaDos.classList.add('pareja')


    }else{

        setTimeout(() => {
            
            cartaUno.classList.remove('girar') 
            cartaDos.classList.remove('girar') 
        }, 1000);
    }
}