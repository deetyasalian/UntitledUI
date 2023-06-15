function showAlert(){
    alert('Button clicked!');
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var description = document.getElementById('description').value;
    var services = Array.from(document.querySelectorAll('input[name="services[]"]:checked'))
      .map(checkbox => checkbox.value);
  
  
    var requestBody = new URLSearchParams();
    requestBody.append('name', name);
    requestBody.append('email', email);
    requestBody.append('phone', phone);
    requestBody.append('description', description);
    services.forEach(service => requestBody.append('services[]', service));
  
   
    fetch('http://formz.in/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: requestBody
    })
    .then(response => {
      if (response.status === 201) {
        alert('Form submitted successfully!');
      } else {
        alert('An error occurred while submitting the form. Please try again.');
      }
    })
    .catch(error => {
      alert('An error occurred while submitting the form. Please try again.');
      console.error(error);
    });
  });