import symbols from './js/data';

class Keyboard {
    constructor() {
     

  

        this.keyCode = symbols.keyCode;

        this.keyWhich = symbols.keyWhich;

        this.keysOnEng = symbols.keysOnEng;

        this.keysOnEngUp = symbols.keysOnEngUp;

        this.keysOnRuss = symbols.keysOnRuss;

        this.keysOnRussUp = symbols.keysOnRussUp;

        this.isCapsLock = false;

        this.isShift = false;

        this.isEng = JSON.parse(localStorage.getItem('isEng'));
        
    }


    init() {
        this.textarea = document.createElement('textarea');
        this.wrapper = document.createElement('div');
     
        this.keyboard = document.createElement('div');
        this.keyboard.classList.add('keyboard-wrapper');
        this.wrapper.classList.add('wrapper');
        const body = document.querySelector('body');
        body.appendChild(this.wrapper);
        this.wrapper.appendChild(this.textarea);
        this.wrapper.appendChild(this.keyboard);

        this.helper = document.createElement('div');
        this.helper.innerText = 'ShiftLeft + AltLeft === English/Russian';
        this.helper.classList.add('helper');
        this.wrapper.appendChild(this.helper);
    }

    changeCaseLayout(keyVal, index, isEng, isCapsLock, isShift) {

        if (isEng){

             keyVal = this.keysOnEng[index]
             
            };

        if (isEng && isCapsLock){

            keyVal = this.keysOnEngUp[index]
        };

        if (isShift && isEng && isCapsLock){

             keyVal = this.keysOnEng[index]

            } else if (isEng && isShift){

                keyVal = this.keysOnEngUp[index]

            };

        if (!isEng){

             keyVal = this.keysOnRuss[index]

            };

        if (!isEng && isCapsLock){

             keyVal = this.keysOnRussUp[index]

            };

        if (isShift && !isEng && isCapsLock){

             keyVal = this.keysOnRuss[index]

            } else if (!isEng && isShift) {

                keyVal = this.keysOnRussUp[index]
            };
        return keyVal;
    }

    addKeysOnKeyboard() {


        this.keyboard.querySelectorAll('span').forEach(item => {

            item.remove();


        })

        this.keyWhich.forEach((key, index) => {

            let keyVal = '';

            keyVal = this.changeCaseLayout(keyVal, index, this.isEng, this.isCapsLock, this.isShift);

            let keyClass = 'key ';
            if (index == 14 || index == 29 || index == 42 || index == 55) {
                this.keyboard.innerHTML += '<span style="clear: both; display: block; width: 100%"></span>';
            }
            if (key == 8) {

                keyVal = 'Backspace';
                keyClass += 'big_control_key control_key';

            }
            if (key == 9) {

                keyVal = 'Tab';
                keyClass += 'short-control-key control_key';

            }
            if (key == 46) {

                keyVal = 'Del';
                keyClass += 'control_key';

            }
            if (key == 20) {

                keyVal = 'CapsLock';
                keyClass += 'big_control_key  control_key';

            }
            if (key == 13) {

                keyVal = 'Enter';
                keyClass += 'big_control_key  control_key';

            }
            if (key == 16 || key == 'ShiftRight') {

                keyVal = 'Shift';
                keyClass += 'big_control_key  control_key';

            }
            if (key == 17 || key == 'ControlRight') {

                keyVal = 'CtrL';
                keyClass += 'short-control-key control_key';

            }
            if (key == 91 || key == 'MetaRight') {

                keyVal = 'Win';
                keyClass += 'short-control-key control_key';

            }
            if (key == 18 || key == 'AltRight') {

                keyVal = 'Alt';
                keyClass += 'short-control-key control_key';

            }
            if (key == ' ' || key == 'Space' || key == 32) {

                keyVal = " ";
                keyClass += 'backspace_key';

            }
            if (key == 38 || key == 40 || key == 37 || key == 39){
                
                keyClass += 'short-control-key control_key';
            }

            this.keyboard.innerHTML += `<span class="${keyClass}" data=${key} datacode=${this.keyCode[index]} id="${keyVal.charCodeAt()}"> ${keyVal} </span>`;
        });

        let shiftL = document.querySelector('span.key[datacode="ShiftLeft"]');

        let shiftR = document.querySelector('span.key[datacode="ShiftRight"]');

        if (this.isShift == true) {

            if (event.code === 'ShiftLeft'){ 

                shiftL.classList.add('active-shift');

            } else if (event.code === 'ShiftRight'){

                shiftR.classList.add('active-shift')
            };
        }

        this.capslock = document.getElementById('67');

        if (this.isCapsLock) {

            this.capslock.classList.add('active-shift');

        }else { 
            this.capslock.classList.remove('active-shift');
        }

    }

    keyUpHandler(event) {

        event.preventDefault();

        document.querySelectorAll('.key').forEach(element => {

            let item_data = element.getAttribute('datacode');

            if (item_data == event.code){

            element.classList.remove('active');

            }
        });

        if ((event.code === 'AltLeft' && event.shiftKey) || (event.altKey && event.code === 'ShiftLeft')) {
            this.isEng = !this.isEng;
            localStorage.setItem('isEng', this.isEng);
            this.addKeysOnKeyboard();
        }
        if (event.which === 20) {
            this.isCapsLock = !this.isCapsLock;
            this.addKeysOnKeyboard();
            if (this.isCapsLock)
                this.capslock.classList.add('active-shift');
            else this.capslock.classList.remove('active-shift');
        }
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            this.isShift = false;
            this.addKeysOnKeyboard();
        }
    }
    deleteSymbol(item_data) {
        let startText = this.textarea.selectionStart,
            endText = this.textarea.selectionEnd;
        if (!this.textarea.setRangeText) { 

            return; 

        }
        if (startText >= endText) {
            if (startText <= 0 || !this.textarea.setSelectionRange) { return; }
            if (event.key == 'Backspace' || item_data == "Backspace"){

                this.textarea.setSelectionRange(startText - 1, startText);
            } else {

                this.textarea.setSelectionRange(startText, startText + 1)
            
            };
        }
        this.textarea.setRangeText("");
        this.textarea.focus();
    }

    setSelectionRange(text) {

        this.textarea.focus();
        this.textarea.setRangeText(text, this.textarea.selectionStart, this.textarea.selectionEnd, 'end');

    }

    keyDownHandler(event) {

        let elm = document.querySelector('textarea');

        event.preventDefault();
        if (!document.querySelector('span.key[datacode="' + event.code + '"]'))
            return;
        else document.querySelector('span.key[datacode="' + event.code + '"]').classList.add('active');

        let text = '';
        let index = this.keyWhich.indexOf(event.which);
        text = this.changeCaseLayout(text, index, this.isEng, this.isCapsLock, this.isShift);

        if (event.key !== "Control" && event.key !== 'Alt' && event.key !== 'Shift' && event.code !== 'MetaLeft' &&
            event.code !== 'Tab' && event.key !== "CapsLock" && event.key !== 'Backspace' &&
            event.key !== 'Delete' && event.key !== 'Enter' && event.code !== 'Space' &&
            event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'ArrowUp' &&
            event.code !== 'ArrowDown') {

            this.textarea.setRangeText(text);

            elm.focus();

        } else {
            if (event.key === 'Enter'){

                this.textarea.setRangeText('\n');
            }
                
            if (event.key === 'Backspace'){

                this.deleteSymbol();
            } 
            if (event.code === 'Space') {

                this.textarea.innerHTML += ' ';
            } 
            if (event.key === 'Delete') {

                this.deleteSymbol();

            }


            if (event.key === 'Tab'){

                this.textarea.innerHTML += '    ';
            } 
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {

                this.isShift = true;
                this.addKeysOnKeyboard();

            }
            if (
                event.code == 'ArrowRight') {

                elm.selectionStart += 1;
                elm.focus();

            }
            if (event.code == 'ArrowLeft') {

                let elm = document.querySelector('textarea');
                elm.selectionEnd -= 1;
                elm.focus();

            }

            if (event.code == 'ArrowDown') {

                let pos = elm.selectionEnd,
                    prevLine = elm.value.lastIndexOf('\n', pos),
                    nextLine = elm.value.indexOf('\n', pos + 1);

                if (nextLine === -1){

                     return ;
                    }

                pos = pos - prevLine;
                elm.selectionStart = elm.selectionEnd = nextLine + pos;

            }
            if (event.code == 'ArrowUp') {

                let pos = elm.selectionEnd,
                    prevLine = elm.value.lastIndexOf('\n', pos),
                    TwoBLine = elm.value.lastIndexOf('\n', prevLine - 1);

                if (prevLine === -1){
                    return;
                }

                pos = pos - prevLine;
                elm.selectionStart = elm.selectionEnd = TwoBLine + pos;
            }
        }
    }


  addListenersOnKeys() {

        document.addEventListener('keydown', (event) => this.keyDownHandler(event));
        document.addEventListener('keyup', (event) => this.keyUpHandler(event));


        document.addEventListener('mousedown', (e) => {
            if (e.target.tagName !== "SPAN" || !e.target.classList.contains('key')) {
                return;
            } else {
                this.textarea.focus();
                let item = e.toElement;
                item.classList.add('active');

                let item_data = item.getAttribute('datacode');
                if (item_data !== "ControlRight" && item_data !== "ControlLeft" && item_data !== 'AltRight' &&
                 item_data !== 'AltLeft' && item_data !== 'ShiftLeft' && item_data !== 'ShiftRight' &&
                  item_data !== 'MetaLeft' && item_data !== 'Tab' && item_data !== "CapsLock" &&
                   item_data !== 'Backspace' && item_data !== 'Delete' && item_data !== 'Enter' &&
                    item_data !== 'Space' && item_data !== 'ArrowRight' && item_data !== 'ArrowLeft' &&
                     item_data !== 'ArrowUp' && item_data !== 'ArrowDown')

                    this.setSelectionRange(item.innerText);

                else {
                    if (item_data === 'Enter') {

                        this.setSelectionRange('\n');

                    } 
                    if (item_data === 'Backspace'){

                        this.deleteSymbol(item_data);
                    
                    } 
                    if (item_data === 'Space'){
                        
                        this.setSelectionRange(' ');
                    
                    } 
                    if (item_data === 'Delete'){
                        
                        this.deleteSymbol(item_data);
                    
                    } 
                    if (item_data === 'Tab'){
                        
                        this.setSelectionRange('    ');
                    
                    } 
                    if (item_data == 'ShiftLeft' || item_data == 'ShiftRight') {

                        this.isShift = !this.isShift;
                        
                        this.addKeysOnKeyboard();
                    }
                    if (item_data == 'CapsLock') {

                        this.isCapsLock = !this.isCapsLock;

                        this.addKeysOnKeyboard();
                    }
                    }
            }
        })


        document.addEventListener('mouseup', () => {
            this.isShift = false;

            this.addKeysOnKeyboard();

            let CAPSLOCK = document.getElementById('67');

            if (this.isCapsLock) {

                CAPSLOCK.classList.add('active-shift');

            } else{

                 CAPSLOCK.classList.remove('active-shift');

                }
        })
    }
}


window.onload = () => {

    const keyboard = new Keyboard();

    keyboard.addListenersOnKeys();

    keyboard.init();

    keyboard.addKeysOnKeyboard();

};


document.onkeydown = function(event){
    console.log(event);
}


