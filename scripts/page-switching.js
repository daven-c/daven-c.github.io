var btn_home = document.querySelector('#home-button');
var btn_two = document.querySelector('#two-button');
var btn_three = document.querySelector('#three-button');
var btn_four = document.querySelector('#four-button');
var btn_five = document.querySelector('#five-button');
var text_field = document.querySelector('p');

btn_home.addEventListener('click', () => {
    text_field.innerText = 'New Text';
});
 