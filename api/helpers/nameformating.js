module.exports = {


  friendlyName: 'Nameformating',


  description: 'Nameformating something.',

  // Inputs é um objeto que contém as entradas possíveis da função
  inputs: {
    nome: {
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

  // Função que formata o nome para lowercase e valida se é um nome válido
  fn: async function (inputs) {
    validRegex = /^[a-zA-Z ]+$/;
    if (validRegex.test(inputs.nome)) {
      return inputs.nome;
    } else {
      throw new Error('Nome com caracteres inválidos!');
    }
  }


};

