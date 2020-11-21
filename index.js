$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault()
  }).validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required:true,
        minlength:8
      },
      confirm_password: {
        required: true,
        minlength:8,
        equalTo: "#password"
      }
    },
    messages : {
      email: {
        required : "Campo obrigatório!",
        email: "Digite um e-mail válido!"
      },
      password: {
        required : "Campo obrigatório!",
        minlength: "Campo deve ter pelo menos 8 caracteres."
      },
      confirm_password: {
        required : "Campo obrigatório!",
        minlength: "Campo deve ter pelo menos 8 caracteres.",
        equalTo: "As senhas devem ser iguais!"
      }
    },
    submitHandler: function(form) {
     form.submit()
    }
  })
})