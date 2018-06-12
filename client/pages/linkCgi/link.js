//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    number: 0,
    userInfo: {},
    //nickName:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    answerResult:[],
    time:[],
    openid:''

  },
  onLoad: function () {
    this.getFightingSort(),
    this.matchTimeRun()

  },


  link: function (e,userInfo,answerResult,openid,time)
  {
    var that = this
    app.globalData.userInfo = e.detail.userInfo;
    userInfo = app.globalData.userInfo;
    var hasUserInfo= true;
    answerResult = app.globalData.answerResult;
    answerResult = answerResult.slice(1,60);
    time = app.globalData.time;
    time = time.slice(1, 60);
    //暂定3000人的openid
    var count = 3000;
    var originalArray = new Array;//原数组 
    //给原数组originalArray赋值 
    for (var i = 0; i < count; i++) {
      originalArray[i] = i + 1;
    }
    originalArray.sort(function () { return 0.5 - Math.random(); });
    for (var i = 0; i < count; i++) {
        open = originalArray[i];
    };
    if (userInfo){
      openid = open
    }
    //openid session传输不过去 可以通过“username"的异同判断，可以不需要

    //sessionid
    var sessionid = 0;
    if (time.length == 60){
      sessionid = 1
    }else{
      sessionid = 0
    };
    //sessionid
    console.log("session:",sessionid);
    console.log("open:",openid);
    console.log("answerresult:",answerResult);
    console.log("time:",time);
    //wx.getStorage({
      //key: 'answerResult',
     // success: function (res) {

        //answerResult=res.data.slice(1, 60);
        //console.log(answerResult);
       // console.log("共查询到 " + answerResult.length + " 条记录");
       // that.setData({
       //   answerResult: answerResult,
       // });
     // }    
  //  }),
    qcloud.request({
      url: `${config.service.host}/weapp/link/upload`,
      method: 'GET',
      data: {
        userInfo: e.detail.userInfo,
        nickName:userInfo.nickName,
        gender:userInfo.gender,
        language:userInfo.language,
        province:userInfo.province,
        city:userInfo.city,
        answerResult:answerResult,
        time : time,
        openid:openid,
        sessionid:sessionid
      },
      header:{
        'Accept': 'application/json; charset=utf8mb4_bin'
      },
      
      //login: false,
      success:function(res) {
        //that.setData({
          //requestResult: JSON.stringify(result.data)
        //});
        console.log("success",res.data)
      },
      fail(error) {
        console.log('request fail', error);
      }
    })

  },

  getFightingSort: function () {
    //util.showBusy('正在请求');
    var that = this;
    var quesdata = new Array();

    qcloud.request({
      login: false,
      url: `${config.service.host}/weapp/link/get_entries`,
      success: function (res) {
        that.setData({

          quesdata: res.data.split(' '),
        })
      },
      fail(error) {
        console.log('request fail', error);
      },

    });
  },
  matchTimeRun() {
    let number = 1,
      time = setInterval(() => {
        this.setData({
          number
        })
        number++;
        if (number == 10) {
          wx.redirectTo({
            url: '../result/result'
          })
        }
      }, 1000)


  },
  onShareAppMessage: function () {
    return {
      title: "和我一起“知我一下”，看看你更匹配谁~",
      path: '/page/user?id=123'
    }
  }

})