const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const closeBtn = $('.close-btn')
const modal = $('.modal')
const submitBtn = $('#submitBtn')
const editBtn = $('.edit')
const createBtn = $('.createBtn')

//show/hide modal input
createBtn.onclick = function(){
    modal.style.display = "block";
    submitBtn.innerHTML = "Thêm mới";

}

closeBtn.onclick = function(){
    for(var i = 0; i<document.querySelectorAll('.row-content').length; i++){
        document.querySelectorAll('.row-content')[i].classList.remove('clicked')
    }
    modal.style.display = 'none'
}




//api country
fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(function(items){
    var htmls = items.map(function(item){
        return `<option>${item.name}</option>`
    })
    var html = htmls.join('')
    document.getElementById('country').innerHTML = html
    })
;

