/*Declarando e exportando endpoints e setando o endereço
para onde será feita as requisições HTTP*/
export const Api = {
  //Url: "http://localhost:3000/",
  Url: "https://api-cards-aleatorios.onrender.com",

  //Endpoints dos cards
  cards: {
    todosCards: function () {
      return Api.Url + "/cards";
    },
    atualizar: function (id) {
      return this.todosCards() + "/" + id;
    },
    criar: function () {
      return this.todosCards() + "/";
    },
    excluir: function (id) {
      return this.todosCards() + "/" + id;
    },
  },

  //Endpoints das categorias
  categorias: {
    todasCategorias: function () {
      return Api.Url + "/categorias";
    },
    atualizar: function (id) {
      return this.todasCategorias() + "/" + id;
    },
    criar: function () {
      return this.todasCategorias() + "/";
    },
    excluir: function (id) {
      return this.todasCategorias() + "/" + id;
    },
  },

  //Montar as requisições
  // GET
  buildApiGetRequest: function (url) {
    return fetch(url, {
      method: "GET",
    });
  },

  // POST
  buildApiPostRequest: function (url, body) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    });
  },

  // PUT
  buildApiPutRequest: function (url, body) {
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    });
  },

  // DELETE
  buildApiDeleteRequest: function (url) {
    return fetch(url, {
      method: "DELETE",
    });
  },
};
