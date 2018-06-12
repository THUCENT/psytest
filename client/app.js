//app.js
App({
  onLaunch: function (openid) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  openid:function(openid){
    var count = 3000;
    var originalArray = new Array;//原数组 
    //给原数组originalArray赋值 
    for (var i = 0; i < count; i++) {
      originalArray[i] = i + 1;
    }
    originalArray.sort(function () { return 0.5 - Math.random(); });
    for (var i = 0; i < count; i++) {
      openid = originalArray[i];
    };
    return openid
  },

  onShareAppMessage: function () {
    return {
      title: "和我一起“知我一下”，看看你更匹配谁~",
      path: '/page/user?id=123'
    }
  },

  globalData: {
    userInfo: null,
    openid:0,
    uuid:'',
    sessionid:0,
    time:[],
    end_time:'',
    ChoiceAnswerNow: [],
    choseQuestionBank: '',
    scoreN: 1,
    scoreE: 4,
    scoreO: 2,
    scoreA: 1,
    scoreC: 2,
    answerResult:[],
    score:[]

  }
})