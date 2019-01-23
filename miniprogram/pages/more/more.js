// miniprogram/pages/more/more.js
const {
  getHotMovies,
  getComingMovies,
  getMovieCloud
} = require("../../services/movies.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: {}
  },
  getMore: async function() {
    wx.showLoading({
      title: '加载中',
    })
    // let fn = getHotMovies;
    // if (this.data.movies.state === "coming") {
    //   fn = getComingMovies;
    // };
    // const data = await fn({
    //   start: this.data.movies.start,
    //   count: this.data.movies.count
    // });
    const {
      start,
      count,
      state,
      rows
    } = this.data.movies;
    const {
      result
    } = await getMovieCloud({
      start,
      count,
      state
    });
    this.setData({
      movies: Object.assign({}, this.data.movies, {
        rows: [...rows, ...result.rows],
        start: start + count
      })
    });
    wx.hideLoading()
  },
  getNew: async function() {   
    // let fn = getHotMovies;
    // if (this.data.movies.state === "coming") {
    //   fn = getComingMovies;
    // };
    // const data = await fn();
    this.setData({
      movies: Object.assign({}, this.data.movies, {
        start: 0
      })
    });
    const {
      start,
      count,
      state,
      rows
    } = this.data.movies;
    const {
      result
    } = await getMovieCloud({
      start,
      count,
      state
    });
    this.setData({
      movies: Object.assign({}, this.data.movies, result)
    })
    wx.stopPullDownRefresh();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.title
    });
    wx.getStorage({
      key: 'movie_more',
      success: (res) => {
        this.setData({
          movies: res.data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getNew();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.movies.rows.length < this.data.movies.total) {
      this.getMore();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})