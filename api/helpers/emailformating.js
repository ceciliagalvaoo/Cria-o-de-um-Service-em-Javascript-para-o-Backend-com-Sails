module.exports = {


  friendlyName: 'Emailformating',


  description: 'Emailformating something.',

  // Inputs é um objeto que contém as entradas possíveis da função
  inputs: {
    email:{
      type: 'string',
      required: true
    }
  },

  // Exits é um objeto que contém as saídas possíveis da função
  exits: {

    success: {
      description: 'All done.',
    },

  },

  // Função que formata o email para lowercase e valida se é um email válido
  fn: async function (inputs) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(validRegex.test(inputs.email)){
      return inputs.email.toLowerCase();
    }else{
      throw new Error('Email inválido!');
    }
  }


};

