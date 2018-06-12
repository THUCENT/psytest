// pages/result/result.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    choseQuestionBank: '',
    QuestionList: [],
    loading: true,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    answerResult:[],
    time:[],
    //nickName:'',
    openid: '',
    score:[]
  },



  onLoad: function (options,answeResult,time,score) {
    var that = this;
    var getQuestionList = getApp().globalData.ChoiceAnswerNow;
    console.log(getQuestionList);
    var scoreN = getApp().globalData.scoreN;
    var scoreE = getApp().globalData.scoreE;
    var scoreO = getApp().globalData.scoreO;
    var scoreA = getApp().globalData.scoreA;
    var scoreC = getApp().globalData.scoreC;
    var answerResult = getApp().globalData.answerResult;
    var score = getApp().globalData.score;
    var time = getApp().globalData.time;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    };
    for (var i = 1; i < 45; i++) {
      answerResult[i] = getQuestionList[i -1].answerResult;
      time[i] = getQuestionList[i - 1].start_time;
    };
    console.log(time);
    console.log(answerResult);
    //wx.setStorageSync('answerResult',answerResult);
    //scoreN = (24 - answerResult[1] + answerResult[6] + answerResult[11] - answerResult[16] + answerResult[21] + answerResult[26] - answerResult[31] + answerResult[36] + answerResult[41] - answerResult[46] + answerResult[51] + answerResult[56]) / 12;
    //scoreE = (24 + answerResult[2] + answerResult[7] + answerResult[12] + answerResult[17] + answerResult[22] - answerResult[27] + answerResult[32] + answerResult[37] - answerResult[42] + answerResult[47] + answerResult[52] - answerResult[57]) / 12;
    //scoreO = (30 - answerResult[3] + answerResult[8] + answerResult[13] - answerResult[18] - answerResult[23] + answerResult[28] - answerResult[33] + answerResult[38] - answerResult[43] + answerResult[48] - answerResult[53] + answerResult[58]) / 12;
    //scoreA = (72 + answerResult[4] - answerResult[9] - answerResult[14] + answerResult[19] - answerResult[24] + answerResult[29] - answerResult[34] + answerResult[39] - answerResult[44] + answerResult[49] - answerResult[54] + answerResult[59]) / 12;
    //scoreC = (24 + answerResult[5] + answerResult[10] - answerResult[15] + answerResult[20] + answerResult[25] + answerResult[30] + answerResult[35] - answerResult[40] - answerResult[45] + answerResult[50] - answerResult[55] + answerResult[60]) / 12;
    scoreE = (18 + answerResult[1] - answerResult[6] + answerResult[11] + answerResult[16] - answerResult[21] + answerResult[26] - answerResult[31] + answerResult[36])/8;
    scoreA = (24 - answerResult[2] + answerResult[7] - answerResult[12] + answerResult[17] + answerResult[22] - answerResult[27] + answerResult[32] - answerResult[37] + answerResult[42])/9;
    scoreC = (24 + answerResult[3] - answerResult[8] + answerResult[13] - answerResult[18] - answerResult[23] + answerResult[28] + answerResult[33] + answerResult[38] - answerResult[43])/9;
    scoreO = (10 + answerResult[5] + answerResult[10] + answerResult[15] + answerResult[20] + answerResult[25] + answerResult[30] - answerResult[35] + answerResult[40] - answerResult[41] + answerResult[44]) / 10;
    scoreN = (18 + answerResult[4] - answerResult[9] + answerResult[14] + answerResult[19] - answerResult[24] + answerResult[29] - answerResult[34] + answerResult[39])/8;



    scoreN=scoreN.toFixed(2);
    scoreE=scoreE.toFixed(2);
    scoreO=scoreO.toFixed(2);
    scoreA=scoreA.toFixed(2);
    scoreC=scoreC.toFixed(2);
    var score = new Array(5);
    score[0] = scoreN;
    score[1]= scoreE;
    score[2]= scoreO;
    score[3] = scoreA;
    score[4] = scoreC;
    console.log('scoreO:',scoreO);


    that.setData({
      QuestionList: getQuestionList,
      answerResult: answerResult,
      time : time,
      score : score,
      scoreN: scoreN,
      scoreE: scoreE,
      scoreO: scoreO,
      scoreA: scoreA,
      scoreC: scoreC

    });
    console.log("score:", score);
    return score,answerResult, time;
      
  },



  returnMainPage: function (userInfo, answerResult, score, openid, time) {
   
    var that = this
    userInfo = app.globalData.userInfo;
    console.log(userInfo);
    var hasUserInfo = true;
    answerResult = app.globalData.answerResult;
    answerResult = answerResult.slice(0, 45);
    score = app.globalData.score;
    console.log("score:",score);
    time = app.globalData.time;
    time = time.slice(0, 45);
    var sessionid = 0;
    var res = {};
    time.forEach(function (e) {
      res[e] = res[e] >= 1 ? res[e] + 1 : 1
    });
    if (!res[0] ) {
      sessionid = 1
    };
    //console.log("res:", res); res 中为time里每个元素的个数
    
    //暂定3000人的openid
    //openid session传输不过去 可以通过“username"的异同判断，可以不需要

    //sessionid
    //sessionid
    console.log("session:", sessionid);
    console.log("answerresult:", answerResult);
    console.log("time:", time);
    console.log("score:", score);
    qcloud.request({
      url: `${config.service.host}/weapp/link/upload`,
      method: 'GET',
      data: {
        userInfo: userInfo,
        nickName: userInfo.nickName,
        gender: userInfo.gender,
        language: userInfo.language,
        province: userInfo.province,
        city: userInfo.city,
        answerResult: answerResult,
        time: time,
        sessionid: sessionid
      },
      header: {
        'Accept': 'application/json; charset=utf8mb4_bin'
      },
      success: function (res) {
        console.log("success", res.data)
      },
      fail(error) {
        console.log('request fail', error);
      }
    });
    wx.switchTab({
      url: '../index/index'
    })
  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    return userInfo
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "原来我更像这位大佬，你也快来试试吧~",
      path: '/page/user?id=123'
    }
    
  },


})