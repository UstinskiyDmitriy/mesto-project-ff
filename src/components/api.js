const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-16',
  headers: {
    authorization: 'e4954371-ca52-48e0-a198-aa3fe92a1835',
    'Content-Type': 'application/json'
  }
}

const apiRoutes = {
  user: "users/me",
  cards: "cards",
  likes: "likes"
}

/*Получение информации пользователя*/

export const getUser = () => {
  return fetch(`${config.baseUrl}/${apiRoutes.user}`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
  }

export const getCards = () => {
  return fetch(`${config.baseUrl}/${apiRoutes.cards}`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
  }



/* Получение всех карточек*/
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/${apiRoutes.cards}`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
  
  }
  /* Обновление информации о пользователе */
  export const patchProfile = (name, about) => {
    return fetch(`${config.baseUrl}/${apiRoutes.user}`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name,
        about
      })
    }).then((res) => res.json());
  };
  

  /* Добавление новой карточки */

  export const postCard = (name, link) => {
    return fetch(`${config.baseUrl}/${apiRoutes.cards}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => res.json());
  };

  /* Удаление карточки */
  export const deleteCardByApi = (id) => {
    return fetch(`${config.baseUrl}/${apiRoutes.cards}/${id}`, {
      method: "DELETE",
      headers: config.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        
      });
};
    

   




