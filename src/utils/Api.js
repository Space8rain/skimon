class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers
  }

// Проверка промиса
  _checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
  return Promise.reject(`Ошибка: ${res.status} ${res.error.message}`)
  }

// Запрос регионов
  getClusters() {
    return fetch (`${this._url}clusters`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

// Запрос курортов
  getResorts(id) {
    return fetch (`${this._url}resorts/${id}`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }
}

const api = new Api({
  url: 'https://ski.enot.dev/api/1/'
})

export default api

// fetch ('https://enot.dev/skimon/api/1/resorts/1')