var getin = document.getElementById('getin');
var BTN = document.getElementById('BTN');
var uncompleted = document.getElementsByClassName('uncompletedTaskList');
var completed = document.getElementsByClassName('completeTaskList');


function addlist(event) {

    var newli = document.createElement('li');
    var doneBTN = document.createElement('button');
    var delBTN = document.createElement('button');

    doneBTN.innerHTML = '<i class="fa fa-check"></i>';
    delBTN.innerHTML =  '<i class="fa fa-trash"></i>';

    if(getin.value !== '') {
        newli.innerText = getin.value;
    }
}