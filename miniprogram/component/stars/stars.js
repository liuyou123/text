// component/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    average: {
      type: String,
      value: "9"
    },
    stars: {
      type: String,
      value: "45"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    starArr: [],
  },
  lifetimes: {
    ready:function(){
      this.setData({
        starArr: this.starsArr(this.data.stars)
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    starsArr: (stars) => {
      const full = stars[0],
        half = stars[1];
      const arr = [];
      for (let i = 1; i <= full; i++) {
        arr.push(1)
      }
      if (half === "5") {
        arr.push(5)
      } else {
        arr.push(0)
      }
      for (let i = arr.length; i < 5; i++) {
        arr.push(0)
      }
      return arr;
    }
  }
})