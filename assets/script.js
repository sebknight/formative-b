


//card DOM queries
var myForm = document.getElementById('myForm');
var card = document.getElementById('card');
var image = document.getElementById('card-image');
var border = document.getElementById('card-border');
var font = document.getElementById('card-message');
var message = document.querySelector("h1");

function createCard(){
  //get form data
  var backgroundValue = document.getElementById('background').value;
  var fontValue = document.getElementById('font').value;
  var imageValue = document.getElementById('image').value;
  var borderValue = document.getElementById('border').value;
  var messageValue = document.getElementById('message').value;
  //assign attributes from form data to card div elements
  card.setAttribute("class","card "+backgroundValue+"Background");
  image.setAttribute("src","assets/"+imageValue+".jpg");
  border.setAttribute("class",borderValue+"Border");
  font.setAttribute("class",fontValue);
  message.innerHTML = messageValue;
}

// event listener preventing form submission and creating card
myForm.addEventListener("submit", function(event){
    event.preventDefault();
    createCard();
});
