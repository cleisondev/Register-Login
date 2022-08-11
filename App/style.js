
function registerForm(){
    document.getElementsByClassName('btnregister')[0].innerHTML = "Login";
    document.getElementsByClassName('name')[0].innerHTML = "Register to Cool App";
    document.getElementsByClassName('inputmail')[0].placeholder = "Enter your email";
    document.getElementsByClassName('inputpassword')[0].placeholder = "Enter your password";
     document.getElementsByClassName('btnenter')[0].innerHTML  = "Register";
     };

     function login(){
 
        Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Welcome to the Cool App',
        showConfirmButton: false,
        timer: 1500
      })
        }