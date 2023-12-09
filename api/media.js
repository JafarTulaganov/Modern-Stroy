/* eslint-disable */

export default {
  async getMedia(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/media', {
          //   headers: {
          //     Language: params,
          //   },
        })
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },

  async getGallery(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/gallery', {
          //   headers: {
          //     Language: params,
          //   },
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
