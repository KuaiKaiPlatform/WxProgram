//withdraw.js
//获取应用实例
const app = getApp()

Page({
  
  data: {
    disabled: false,
    withdrawButton: '提现'
  },

  onShow: function () {
    if (app.extraData.action != "withdraw") {
      console.log("Withdraw.onShow@redirect");
      wx.redirectTo({
        url: '/pages/strategy/strategy',
      });
    }
  },

  onClickWithdraw(e) {
    console.log("Withdraw.onClickWithdraw", e);
    this.setData({
      disabled: true
    });

    this.loginWx().then(() => {
      return this.getUserInfo();
    }).then(() => {
      return this.sendRequest();
    }).catch(() => {
      // 失败重试
      this.onClickWithdraw(e);
    });
  },

  loginWx: function() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          console.log("Withdraw.loginWx@wx.login success|response:", res);
          this.setData({
            code: res.code
          });
          resolve();
        },
        fail: () => {
          console.error("Withdraw.loginWx@wx.login fail.");
          reject();
        }
      })
    });
  },

  getUserInfo: function() {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        withCredentials: true,
        success: res => {
          console.log("Withdraw.getUserInfo@success:", res);
          this.setData({
            userInfo: res
          });
          resolve();
        },
        fail: () => {
          console.error("Withdraw.getUserInfo@fail.");
          reject();
        }
      });
    });
  },

  sendRequest: function(e) {
    console.log("Withdraw.sendRequest", e);
    var params = {
      loginType: 4,
      channel: -2,
      uid: app.extraData.uid,
      action: app.extraData.action,
      code: this.data.code,
      rawData: this.data.userInfo.rawData,
      signature: this.data.userInfo.signature,
      encryptedData: this.data.userInfo.encryptedData,
      iv: this.data.userInfo.iv
    };
    console.log("Withdraw.sendRequest@params", params);

    // 发送提现请求
    wx.request({
      url: 'http://test.farm.zhuozhuogame.com:25080/login',
      //url: 'https://login.farm.zhuozhuogame.com:25443/login',
      data: params,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      complete: res => {
        console.log("Withdraw.sendRequest@complete", res);
        if (res && res.data && res.data.ret) {
          console.error("Withdraw.sendRequest@fail", res.data.ret);
          this.onError();
          return;
        }
        this.onSubmit();
      }
    });

    return Promise.resolve();
  },

  onSubmit: function () {
    console.log("Withdraw.onSubmit");
    this.setData({
      disabled: true,
      withdrawButton: '已提交，即将返回游戏'
    });
    setTimeout(function() {
      wx.redirectTo({
        url: '/pages/strategy/strategy',
      });

      wx.navigateBackMiniProgram({
        success(res) {
          console.log("Withdraw.onSubmit@navigateBackMiniProgram success");
        },
        fail(res) {
          console.error("Withdraw.onSubmit@navigateBackMiniProgram fail");
        }
      });
    }, 2000);
  },

  onError: function () {
    console.log("Withdraw.onError");
    this.setData({
      disabled: false,
      withdrawButton: '提现失败，点击重试'
    })
  }

})
