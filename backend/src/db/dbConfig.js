/*Biblioteca de POO que cria uma conexão entre o MongoDB
e o ambiente de tempo de execução Node.js*/
const mongoose = require("mongoose");

/*Declaração de variável com a string de conexão com Mongo
e criando a collection "/cardsaleatorios" caso não exista*/
const databaseUrl =
  "mongodb+srv://admin:YzOCE9cR7TOWpyCV@cluster0.nxhs41w.mongodb.net/cardsaleatorios";

//Função flecha para realizar a conaxão
const conectandoDB = () => {
  return mongoose
    .connect(databaseUrl)
    .then(() => console.log("Mongo conectado com sucesso!"))
    .catch((error) => console.log("Erro de conexão com o banco.\n", error));
};

//Usando o mongoose para validar um objectId recebendo um id como parâmetro
const objetoValido = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

//Exportando para toda API
module.exports = {
  conectandoDB,
  objetoValido,
};
