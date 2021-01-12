var getin = document.getElementById('getin');
var BTN = document.getElementById('BTN');
var uncompleted = document.querySelector('.uncompletedTaskList');
var completed = document.querySelector('.completeTaskList');

BTN.addEventListener('click', addlist);
getin.addEventListener('keyup', (event)=> {
    (event.keyCode === 13 ? addlist(event) : null);
})



function addlist(event) {

    var uncompleted = document.querySelector('.uncompletedTaskList');
    var completed = document.querySelector('.completeTaskList');

    var newli = document.createElement('li');
    var doneBTN = document.createElement('button');
    var delBTN = document.createElement('button');

    doneBTN.innerHTML = '<i class="fa fa-check"></i>';
    delBTN.innerHTML =  '<i class="fa fa-trash"></i>';

    
    if(getin.value !=='') {
        newli.textContent = getin.value;
        getin.value = '';
        uncompleted.appendChild(newli);
        newli.appendChild(doneBTN);
        newli.appendChild(delBTN);
    }

    doneBTN.addEventListener('click', function() {
        var parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        doneBTN.style.display = 'none';
    });

    delBTN.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
    })
}