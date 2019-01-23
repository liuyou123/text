// component/movieList/movieList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   movies:{
     type:Object,
     value:{},
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
    toMore:function(){
      this.setData({
        movies: Object.assign({},this.data.movies,{start:this.data.movies.count})
      })
      wx.setStorage({
        key: 'movie_more',
        data: this.data.movies,
        success:()=>{
          wx.navigateTo({
            url: `/pages/more/more?title=${this.data.movies.title}`
          });
        }
      })
    }
  }
})
