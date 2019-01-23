// miniprogram/pages/movies/movies.js
const {
  getHotMovies,
  getComingMovies
} = require('../../services/movies.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot: {
      title: "正在热映",
      start: 0,
      count: 10,
      state: "hot",
      total: 0,
      rows: []
    },
    coming: {
      title: "即将上映",
      start: 0,
      count: 10,
      state: "coming",
      total: 0,
      rows: []
    }
  },
  getMovies: async function() {
    const {
      hot,
      coming
    } = this.data
    const hotData = await getHotMovies({
      start: hot.start,
      count: hot.count
    });
    const comingData = await getComingMovies({
      start: coming.start,
      count: coming.count
    });
    this.setData({
      hot:Object.assign({},hot,hotData),
      coming: Object.assign({}, coming, comingData)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMovies();
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})