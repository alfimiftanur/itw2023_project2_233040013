// DISABLE SCROLL HERO/HOME
const root_element = document.querySelector(":root");
function disable_scroll(){
  scroll_top = (window.pageYOffset) || document.documentElement.scroll_top;
  scroll_left = (window.pageXOffset) || document.documentElement.scroll_left;

    window.onscroll = function(){
        window.scrollTo(scroll_top, scroll_left);
    }

    root_element.style.scrollBehavior ="auto";
}

function enable_scroll(){
  window.onscroll = function(){ }
  root_element.style.scrollBehavior ="smooth";
  localStorage.setItem('opened', 'true');
}

if(!localStorage.getItem('opened')){
  disable_scroll()
}

// LOADING AFTER SEND 
function submitForm(event) {
    event.preventDefault();
  
    // Disable true mencegah untuk mengirim berkali-kali
    document.getElementById('submit-button').disabled = true;
  
    // Change the content of the submit button to include the loading animation
    document.getElementById('submit-button').innerHTML = '<div id="loading-spinner"></div>';
  
    setTimeout(function() {
      // Re-enable the submit button
      document.getElementById('submit-button').disabled = false;
      document.getElementById('submit-button').innerHTML = 'Send';
      document.getElementById('success-popup').style.display = 'flex';
    }, 2899);
  }
  
  function closePopup() {
    document.getElementById('success-popup').style.display = 'none';
  }
  
// INPUT TO SPREADSHEET
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_hZLFhEFZ4Clna_YVhXrs2rY9EmLYZlK9JVJEoR5L24PuQSYTmpQUKjDg-hVP925M/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        form.reset()
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})