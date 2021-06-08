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
    ("form[fullName='registration']").validate({
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
        gender: {
          required: true,
          gender: true
        },
        country: {
          required: true,
          country: true
        },
        cityDistrict: {
          required: true,
          cityDistrict: true
        }
      },

      messages: {
        fullName: "please enter your full_name",
        username: "please enter your username",
        password: {
          required: "please provide a password",
        minlength: "your password must be atleast 5 characters long"
        },
        email: " please enter a valid email address",
        gender: "please choose your gender",
        country: "please select your country",
        cityDistrict: "please choose your city_district"
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
//const registrationForm = document.querySelector('.registration-form');
//const formControl = document.querySelector('.form-control');
//let fullName, username, gender, email, country, cityDistrict;
//let registration = [];
//let registrationStore = localStorage()
//console.log(registrationForm);


//process registration form submit
//registrationForm.addEventListener('submit', (e) => {
//    e.preventDefault();
    //extract data from the form
//    fullName = registrationForm.full_name.value;
//    username = registrationForm.username.value;
//    gender = registrationForm.gender.value;
//    email= registrationForm.email.value;
//    country = registrationForm.country.value;
//    cityDistrict = registrationForm.city_district.value;
    
//    console.log('****', fullName, username, gender, email, country, cityDistrict);
//minor validation
//    if(fullName && username && gender && email && country && cityDistrict) {

//    } else {
//        alert('provide all the necessary data.')
//    }
//}); 

