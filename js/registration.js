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
