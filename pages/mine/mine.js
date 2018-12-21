// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publicRules: [{
        name: "亮六飞一",
        value: "61001",
        checked: true
      }, {
        name: "打锅子",
        value: "61007",
        checked: true
      }, {
        name: "陕西麻将",
        value: "61002",
        checked: false
      }, {
        name: "划水麻将",
        value: "61003",
        checked: false
      }, {
        name: "渭南麻将",
        value: "61004",
        checked: false
      }, {
        name: "159麻将",
        value: "61006",
        checked: false
      }, {
        name: "汉中麻将",
        value: "61008",
        checked: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  changePublicRule: function (e) {
    console.log("mine.changePublicRule", e);
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.publicRules, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      publicRules: checkboxItems
    });
  }
})