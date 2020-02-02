document.oncontextmenu = function(){
    event.returnValue = false;
}

document.onselectstart = function(){
    event.returnValue = false;
}

document.oncopy = function(){
    event.returnValue = false;
}

document.onkeydown = function(){
    if( event.ctrlKey ){
        return false;
    }
    if ( event.altKey ){
        return false;
    }
    if ( event.shiftKey ){
        return false;
    }
} 