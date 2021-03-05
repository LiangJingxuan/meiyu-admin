import axios from 'axios'
export default {
  methods: {
    $get(url, params) {
      return axios.get(`http://simbajs.com:89${url}`, {
        params
      })
    },
    $post(url, params) {
      return axios.post(`http://simbajs.com:89${url}`, params)
    }
  }
}