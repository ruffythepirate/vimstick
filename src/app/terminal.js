function $(elid){ /* shortcut for d.gEBI */
    return document.getElementById(elid);
}

window.onload = init;


function init(){
    // cursor = $('cursor'); /* defining the global var */
    // cursor.style.left = '0px'; /* setting it's position for future use */
}

function nl2br(txt){ /* helper, textarea return \n not <br /> */
    return txt.replace(/\n/g, '<br />');
}

window.inputHandler = inputInputHandler();

const currentState = {
    row: 0,
    column: 0
};




const caret = $('cursor');

function updateCaret() {
    caret.style.left = currentState.column *10 + 'px';
    caret.style.top = 8 + currentState.row *18 + 'px';
}



// function handleCommand(command) {
//     const cmdImpl =commandImplementations[command];
//     if( cmdImpl != null) {
//         cmdImpl.execute(command);
//     } else {
//         console.log(`Could not find any implementation for command '${command.id}'`);
//     }
// }

function inputInputHandler() {
    const self = {};
    self.writeIt = function(from) {
        // e = e || window.event; /* window.event fix for browser compatibility */
        var w = $('writer'); /* get the place to write */
        var tw = from.value; /* get the value of the textarea */
        w.innerHTML = nl2br(tw); /* convert newlines to breaks and append the returned value to the content area */
    };

    self.moveIt = function(from, e) {
        e = e || window.event; 
        var keycode = e.keyCode || e.which;
        if(keycode == 37){ 
            currentState.column = Math.max(currentState.column -1, 0);
        } else if(keycode == 39) { 
            currentState.column = currentState.column+1; 
        } else if(keycode == 38 ) {
            currentState.row = Math.max(currentState.row -1, 0);
        } else if(keycode == 40) {
            currentState.row = currentState.row+1; 
        } else if (keycode == 13) {
            currentState.row++;
            currentState.column = 0;
        } else {
            currentState.column = currentState.column+1; 
        }
        updateCaret();

    };

    return self;
}
