// component/movieItem/movieItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toMovieDetails: function(){
      wx.setStorage({
        key: 'movie',
        data: this.data.movie
      })
      wx.navigateTo({
        url: '/pages/movieDetails/movieDetails'
      })
    }
  }
})