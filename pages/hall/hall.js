//竞技大厅
const app = getApp()

Page({
  
  data: {
    currentTab: 0
  },

  onLoad: function (query) {
    console.log("hall.onLoad@query", query);
    console.log("hall.onLoad@from", decodeURIComponent(query.q));
  },

  onShow: function () {
    console.log("hall.onShow");

    wx.setNavigationBarTitle({
      title: '大众亮六飞一（1125）'
    })
  },

  switchTab(e) {
    this.setData({ 
      currentTab: e.currentTarget.dataset.current
    });
  }

})
