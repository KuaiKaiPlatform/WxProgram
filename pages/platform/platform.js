//withdraw.js
//获取应用实例
const app = getApp()

Page({
  
  data: {
    disabled: true,
    withdrawButton: '提现'
  },

  onLoad: function (query) {
    console.log("platform.onLoad@query", query);
    console.log("platform.onLoad@from", decodeURIComponent(query.q));

    // wx.setTabBarItem({
    //   index: 0,
    //   text: '牌友圈'
    // });
  }

})
