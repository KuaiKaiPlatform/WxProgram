//app.js
App({
  onLaunch: function (options) {
    console.log("App.onLaunch");
  },

  globalData: {
    userInfo: null,
    clubs: [{
      id: 5,
      name: "娱乐无十三幺",
      head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
      total: 35,
      payMode: 1,
      ipLimit: true,
      showActionDetails: false,
      currentAction: 0,
      owner: "other",
      rules: [{
        id: 61001,
        name: "亮六飞一",
        setting: {
          totalSet: 8,
          totalPlayer: 4,
          shiSanYao: true,
          shiSanBuKao: false,
          baseRate: 1
        },
        ranking: {
          cumulative: {
            total: 34890,
            mine: {
              rank: 32,
              score: -42
            },
            list: [{
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 1,
              score: 43
            }, {
              uid: 11093,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 2,
              score: 41
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 3,
              score: 39
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 4,
              score: 38
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 5,
              score: 34
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 6,
              score: 30
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 7,
              score: 28
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 8,
              score: 23
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 9,
              score: 20
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 10,
              score: 18
            }]
          }
        }
      }, {
        id: 99006,
        name: "捉老麻子",
        setting: {
          totalSet: 10,
          siDaiEr: false,
          forbidDuiNext: true,
          kongBomb: true,
          bombScore: 10,
          tianBombScore: 10
        }
      }]
    }, {
      id: 8,
      name: "大众亮六飞一",
      head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
      total: 1132,
      currentAction: 0,
      owner: "pub",
      rules: [{
        id: 61001,
        name: "亮六飞一",
        setting: {
          totalSet: 8,
          totalPlayer: 4,
          shiSanYao: true,
          shiSanBuKao: true,
          baseRate: 1
        },
        ranking: {
          cumulative: {
            total: 34890,
            mine: {
              rank: 32,
              score: -42
            },
            list: [{
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 1,
              score: 43
            }, {
              uid: 11093,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 2,
              score: 41
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 3,
              score: 39
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 4,
              score: 38
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 5,
              score: 34
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 6,
              score: 30
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 7,
              score: 28
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 8,
              score: 23
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 9,
              score: 20
            }, {
              uid: 10089,
              name: "飞花似雾",
              head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
              rank: 10,
              score: 18
            }]
          }
        }
      }]
    }, {
      id: 0,
      name: "我的竞技场",
      head: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIum00edRhIBvxj1MCZ4ictdiautfAsoBILvhKdd8kLeu4B0JkM1a66mEicdjOoNuEkBj20ic5FNq0ibKw/132",
      total: 1,
      owner: "mine",
      currentAction: 4,
      rules: [{
        id: 61001,
        name: "亮六飞一",
        setting: {
          totalSet: 8,
          totalPlayer: 4,
          shiSanYao: true,
          shiSanBuKao: true,
          baseRate: 1
        }
      }, {
        id: 99007,
        name: "陕西三代"
      }]
    }]
  },

  onShow: function (options) {
    this.extraData = {};
    if (options.referrerInfo && options.referrerInfo.extraData) {
      this.extraData = options.referrerInfo.extraData;
    }
    console.log("App.onShow@extraData", this.extraData);
  }

})