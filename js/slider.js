(function(){
    var idAct = Number(document.querySelector('.text-slider--show').id)

    setInterval(function(){
        if(idAct === 1){
            document.getElementById(idAct).classList.remove('text-slider--show')
            idAct = 3
            setTimeout(function(){document.getElementById(idAct).classList.add('text-slider--show')}, 1500)
        }
        else{
            document.getElementById(idAct).classList.remove('text-slider--show')
            idAct -= 1
            setTimeout(function(){document.getElementById(idAct).classList.add('text-slider--show')}, 1500)
        }

    }, 3000)

    
   
}())