// pages/clubs/club/club.js
const app = getApp();

const actions = {
  pub: [
    "今日排行",
    "总排行榜",
    "赛况",
    "规则"
  ],
  mine: [
    "今日排行",
    "总排行榜",
    "赛况",
    "规则",
    "设置"
  ],
  other: [
    "今日排行",
    "总排行榜",
    "赛况",
    "规则"
  ]
};

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    club: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    actions: actions
  },

  attached: function () {
    //console.log("club.attached@club", this.properties.club);
    console.log("club.attached@club", this.data.club);
    this.setData({
      userInfo: app.globalData.userInfo
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    primaryAction: function () {
      // wx.navigateTo({
      //   url: '../hall/hall',
      // })
      wx.navigateToMiniProgram({
        appId: 'wx893260ea77b23e55',
        extraData: {},
        envVersion: 'trial',
        success(res) {
          console.log("club.enterHall@success", res);
        },
        fail(res) {
          console.log("club.enterHall@fail", res);
        }
      });
    },
    showActionSheet: function () {
      wx.showActionSheet({
        itemList: actions[this.data.club.owner],
        success: res => {
          console.log("club.showActionSheet", res);
          if (!res.cancel) {
            this.data.club.showActionDetails = true;
            this.data.club.currentAction = res.tapIndex;
            this.setData({
              club: this.data.club
            });
          }
        }
      });
    },
    showActionDetails: function () {
      this.data.club.showActionDetails = !this.data.club.showActionDetails;
      this.setData({
        club: this.data.club
      });
    }
  }
})
