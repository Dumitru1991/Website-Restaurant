//event list

eventListener();
function eventListener(){
    const ui = new UI()

    window.addEventListener('load',function(){
    ui.hidePreloader();     
    })
    //nav btn
    document.querySelector('.navBtn').addEventListener('click', function ()
    {
        ui.showNav();
    })
    //control the video
    document.querySelector('.video_switch').addEventListener('click', function(){
        ui.videoControls()
    })
    //submit the form
    document.querySelector('.discount-form').addEventListener('submit', function (event){
        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastname = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;

        let value = ui.checkEmpty(name, lastname, email)

        if(value){
        let customer = new Customer(name, lastname, email)
        console.log(customer);
            ui.addCustomer(customer)
        ui.showfeedback('customer added to the list', 'success')
            ui.clearFields()

        }
        else{
        ui.showfeedback('some form values are empty', 'error')
        }

    })
//DISPLAY MODAL
    const links = document.querySelectorAll('.food-item_icon');
    links.forEach(function (item) {
    item.addEventListener('click',function (event){
    ui.showModal(event)
    })
})
//CLOSE HIDE MODAL
document.querySelector('.food-modal_close').addEventListener('click',
function(){
    ui.closeModal()
})
}

function UI(){
}

UI.prototype.hidePreloader = function(){
    document.querySelector('.preloader').style.display="none";
}
UI.prototype.showNav = function(){
    document.querySelector('.nav').classList.toggle('nav--show');
}
UI.prototype.videoControls = function(){
    let btn = document.querySelector('.video_switch-btn');
    if(!btn.classList.contains('btnSlide')){
    btn.classList.add('btnSlide')
    document.querySelector('.video_item').pause();
}
    else{
        btn.classList.remove('btnSlide')
        document.querySelector('.video_item').play();
    }

}

//check for empty values

UI.prototype.checkEmpty = function (name, lastname, email) {
    let result;
    if (name === '' || lastname === '' || email === ''){
    result = false;
    }
    else{
    result = true;
    }
    return result;
}

UI.prototype.showfeedback = function (text, type){
    const feedback = document.querySelector('.discount-form_feedback');
    if (type === 'success'){

       
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
    }
    else if (type === 'error') {

feedback.classList.add('error');
feedback.innerText = text;
this.removeAlert('error');
    }
}
//remove alert
UI.prototype.removeAlert = function(type){

setTimeout(function () {
    document.querySelector('.discount-form_feedback').classList.remove(type)
}, 3000)

}

//add customer




UI.prototype.addCustomer = function(customer){
  const images = [1, 2, 3, 4, 5];
  let random = Math.floor(Math.random()*images.length);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<img src="img/person-${random}.jpeg" alt="person" 
    class = "person_thumbail">
    <h4 class="person_name">${customer.name}</h4>
    <h4 class="person_last-name">${customer.lastname}</h4>`
    document.querySelector('.discount-card_list').appendChild(div)
}


//clear fields
UI.prototype.clearFields = function(){
    document.querySelector('.input-name').value ="";
    document.querySelector('.input-lastname').value ="";
    document.querySelector('.input-email').value = ""; 
}

//show modal

UI.prototype.showModal = function (event) {
    event.preventDefault();
    if (event.target.parentElement.classList.contains('food-item_icon')){
    let id = event.target.parentElement.dataset.id
    
    const modal = document.querySelector('.food-modal');
    const modalItem = document.querySelector('.food-modal_item');

    modal.classList.add('food-modal-show');
    modalItem.style.backgroundImage = `url(img/food-${id}.jpg)`
    }
}
//hide modal
UI.prototype.closeModal = function(){
    document.querySelector('.food-modal').classList.remove('food-modal-show')
}


//customer

function Customer(name, lastname, email){
    this.name = name,
    this.lastname = lastname,
    this.email = email;
}

//display modal


