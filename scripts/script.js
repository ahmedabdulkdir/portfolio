function displayNumberLine(){
    const mainHeight = document.getElementById('main').offsetHeight;    
    const lines = Math.ceil(mainHeight / 27.4);
    let numberLine = '';
    for (i = 1; i < lines; i++) {
        if (i < 10) {

            numberLine += '<li class="number">'+ '&nbsp;' + i +  '</li>';
        }
        else {
            numberLine += '<li class="number">'+ i + '</li>';
        }
    }
    document.getElementById('lines').innerHTML = numberLine; 
}

displayNumberLine();