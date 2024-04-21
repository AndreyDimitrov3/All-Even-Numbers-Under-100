document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('button').addEventListener('click', function(){

    let i = 0;

    while (i < 100){
        i = i + 2;
        
        document.querySelector('#demo').append(i + ", ");
    }

    document.querySelector('button').disabled = true;
    })
})