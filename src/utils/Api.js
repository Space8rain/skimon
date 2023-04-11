class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
  return Promise.reject(`Ошибка: ${res.status} ${res.error.message}`)
  }

  getRegions() {
    return fetch (`${this._url}regions`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  getResorts(id) {
    return fetch (`${this._url}resorts/${id}`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  getApiInfo() {
    return Promise.all[this.getRegions(), this.getResorts()]
  }
}


const api = new Api({
  url: 'https://enot.dev/skimon/api/1/'
})

export default api

// fetch ('https://enot.dev/skimon/api/1/resorts/1')