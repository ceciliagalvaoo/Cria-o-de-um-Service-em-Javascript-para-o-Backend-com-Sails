module.exports = {


  friendlyName: 'Usernameformating',


  description: 'Usernameformating something.',

  // Inputs é um objeto que contém as entradas possíveis da função
  inputs: {
    username:{
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

  // Função que formata o username para lowercase
  fn: async function (inputs) {
    return inputs.username.toLowerCase().trim();
  }


};

