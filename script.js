// Event handling
document.getElementById('clickMe').addEventListener('click', ()=>{
	alert('Button Clicked!')
})

document.getElementById('hoverBox').addEventListener('mouseenter', ()=> {
	document.getElementById('hoverBox').style.backgroundColor= 'lightgreen'
})

document.getElementById('hoverBox').addEventListener('mouseleave', ()=> {
	document.getElementById('hoverBox').style.backgroundColor= 'lightblue'
})

document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log(`You pressed: ${e.key}`);
});

document.getElementById('changeBtn').addEventListener('click', function () {
  this.style.backgroundColor = this.style.backgroundColor === 'orange' ? 'lightblue' : 'orange';
});


// 3. Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const feedback = document.getElementById('feedBack');

  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.innerText = "Invalid email format.";
    feedback.style.color = "red";
    return;
  }

  if (pass.length < 8) {
    feedback.innerText = "Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.innerText = "Form submitted.";
  feedback.style.color = "green";
});
