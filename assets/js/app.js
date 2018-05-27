'use strict';

//test
let testDiv = document.getElementById('test-div');
let testDiv2 = document.getElementById('test-div-2');
let myElAtr = {id: 'myID', type: 'button', classes: ['test-1', 'two', 'four']};
let myElAtr2 = {id: 'myID2', classes: ['test-2', 'two', 'four']};
let myElement = new Element('input', myElAtr, 'push me', testDiv);
let myElement2 = new Element('div', myElAtr2, null, testDiv2).addHTML('teeeeeext');
console.log(myElement);

