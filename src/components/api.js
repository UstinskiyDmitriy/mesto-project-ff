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
/* Получение всех карточек */
const getCards = () => {
  return fetch(`${config.baseUrl}/${apiRoutes.cards}`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

/* Добавление новой карточки */
const postCard = (name, link) => {
  return fetch(`${config.baseUrl}/${apiRoutes.cards}`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
          name,
          link,
        })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

/* Удаление карточки по идентификатору */
const deleteCardApi = (id) => {
  return fetch(`${config.baseUrl}/${apiRoutes.cards}/${id}`, {
    method: "DELETE",
    headers: config.headers,
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

/*Получение информации о пользователе */
const getUser = () => {
  return fetch(`${config.baseUrl}/${apiRoutes.user}`, {
    headers: config.headers,
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

/*Обновление информации о пользователе */
const patchUser = (name, about) => {
  return fetch(`${config.baseUrl}/${apiRoutes.user}`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
          name,
          about,
        })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

/* Добавление лайка карточке */
const addLikeCard = (id)  => {
  return fetch(`${config.baseUrl}/${apiRoutes.cards}/${apiRoutes.likes}/${id}`,{
    method: "PUT",
    headers: config.headers,
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

/* Удаление лайка с карточки */
const deleteLikeCard = (id) => {
  return fetch(`${config.baseUrl}/${apiRoutes.cards}/${apiRoutes.likes}/${id}`, {
    method: "DELETE",
    headers: config.headers,
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

/* Обновление аватара пользователя */
const patchAvatar = (avatar) => {
  return fetch(`${config.baseUrl}/${apiRoutes.user}/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar:avatar}),
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${data.status}`);
  });
  
}
export {
  getCards,
  postCard,
  deleteCardApi,
  getUser,
  patchUser,
  addLikeCard,
  deleteLikeCard,
  patchAvatar
};