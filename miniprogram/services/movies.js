const getHotMovies = ({
  start = 0,
  count = 10
} = {}) => {
  return new Promise(reslove => {
    return wx.request({
      url: `http://localhost:3000/movies/hot?start=${start}&count=${count}`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        reslove(res.data)
      }
    })
  })
}

const getComingMovies = ({
  start = 0,
  count = 10
} = {}) => {
  return new Promise(reslove => {
    return wx.request({
      url: `http://localhost:3000/movies/coming?start=${start}&count=${count}`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        reslove(res.data)
      }
    })
  })
};
const getMovieCloud = async({
  start,
  count,
  state
} = {}) => {
  return await wx.cloud.callFunction({
    name: 'getMovies',
    data: {
      start,
      count,
      state
    }
  })
}

module.exports = {
  getHotMovies,
  getComingMovies,
  getMovieCloud
}