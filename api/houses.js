/* eslint-disable */

export default {
  async getHouses(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/apartments', {
          //   headers: {
          //     Language: params,
          //   },
          params: params,
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
