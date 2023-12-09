/* eslint-disable */

export default {
  async getComplexes(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/complexes', {
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

  async getComplex(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/complexes/${slug}`, {
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
}
