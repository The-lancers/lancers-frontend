//  JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  (function() {
    ("form[name='login']").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
        }
      },
      messages: {
        email: "please enter a valid email address",

        password: {
          required: "please enter password",
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

  (function() {
    ("form[name='registration']").validate({
      rules: {
        fullName: "required",
        username: {
          username: "required"
        },
        email: {
          required: "true",
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },      
        
      },

      messages: {
        fullName: "please enter your full_name",
        username: "please enter your username",
        password: {
          required: "please provide a password",
        minlength: "your password must be atleast 5 characters long"
        },
        email: " please enter a valid email address",
      },

      submitHandler: function(form) {
        form.submit();
      }
    });
  });

  var connection = mymongoDB.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodelogin'
  });

  //select the form
const registrationForm = document.querySelector('.registration-form');
const formControl = document.querySelector('.form-control');
let fullName, username, email, password;
let registration = [];
//let registrationStore = localStorage()
console.log(registrationForm);


//process registration form submit
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //extract data from the form
    fullName = registrationForm.full_name.value;
    username = registrationForm.username.value;
    email = registrationForm.email.value;
    password = registrationForm.email.value;

    
    console.log('****', fullName, username, email, password);
//minor validation
//    if(fullName && username && gender && email && country && cityDistrict) {

//    } else {
//        alert('provide all the necessary data.')
//    }
}); 
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsById("#regForm");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsById("#regForm");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("#regForm").submit();
    // ADD { alert("Customer successfuly registerd!");}

    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsById("#regForm");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsById("step")[currentTab].id += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsById("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
} 

