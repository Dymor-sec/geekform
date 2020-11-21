$(document).ready(function(){
  $("#aa").submit(function(event) {
    event.preventDefault()
  }).validate({
    rules: {
      inputState: {
        required: true
      },
      inputCity: {
        required:true
      },
      inputZip: {
        required: true
      },
      inputAddress : {
        required: true
      },
      inputAddress2 : {
        required: true
      },
      'lanches[]' : {
        required: true
      }
    },
    messages : {
      inputState: {
        required : "Campo obrigatório!"
      },
      inputCity: {
        required : "Campo obrigatório!"
      },
      inputZip: {
        required : "Campo obrigatório!"
      },
      inputAddress : {
        required : "Campo obrigatório!"
      },
      inputAddress2 : {
        required : "Campo obrigatório!"
      },
      'lanches[]' : {
        required : "Escolha pelo menos um lanche!"
      }
    },
    submitHandler: function(form) {
     form.submit()
    }
  })
})