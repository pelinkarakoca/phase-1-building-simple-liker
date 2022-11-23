// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likebtns = document.getElementsByClassName("like-glyph");
console.log(likebtns);

for (let i = 0; i < likebtns.length; i++) {
  likebtns[i].addEventListener('click', function(){
   return mimicServerCall()
    .then(() => {
      likebtns[i].textContent = FULL_HEART;
      likebtns[i].classList.add('activated-heart');
    })
    .catch((error) => {
        const errorDiv= document.querySelector("#modal");
        errorDiv.classList.remove("hidden");
        const errorMessage = document.querySelector("#modal-message")
        console.log(error.message);
        errorMessage.textContent = error.message;
        setTimeout(() => errorDiv.classList.add("hidden"), 3000)
      })
    })
}









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
