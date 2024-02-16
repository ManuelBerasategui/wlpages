(function(){
    var idAct = Number(document.querySelector('.text-slider--show').id)
    document.querySelector('.bi-arrow-left-circle').addEventListener('click', ()=>{
        
        if(idAct === 1){
            document.getElementById(idAct).classList.remove('text-slider--show')
            idAct = 3
            setTimeout(function(){document.getElementById(idAct).classList.add('text-slider--show')}, 800)
        }
        else{
            document.getElementById(idAct).classList.remove('text-slider--show')
            idAct -= 1
            setTimeout(function(){document.getElementById(idAct).classList.add('text-slider--show')}, 800)
        }
    })
    document.querySelector('.bi-arrow-right-circle').addEventListener('click', ()=>{
        if(idAct === 3){
            document.getElementById(idAct).classList.remove('text-slider--show')
            idAct = 1
            setTimeout(function(){document.getElementById(idAct).classList.add('text-slider--show')}, 800)

            
        }
        else{
            document.getElementById(idAct).classList.remove('text-slider--show')
            idAct += 1
            setTimeout(function(){document.getElementById(idAct).classList.add('text-slider--show')}, 800)

        }
    })

    
   
}())