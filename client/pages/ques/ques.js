var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    idx: 0,
    questionList: [],
    nowQuestion: [],
    nowQuestionNumber: '',
    choseCharacter: '',
    score: 0,
    time:[],
    answerResult: []
  },


  onLoad: function (questionList,time) {
    var that = this;
    var quesdata = new Array();
    qcloud.request({
      login: false,
      url: `${config.service.host}/weapp/link/get_entries`,
      success: function (res) {
        quesdata = res.data.split('./'),
        console.log(quesdata);
          console.log("共查询到 " + (quesdata.length-1) + " 条记录");
        for (var i = 0; i < (quesdata.length-1); i++) {
          questionList[i] = {
            ques_title: quesdata[i],
            userChose: "空",
            start_time:0,
            answerResult:0
          }
        }
        that.setData({
          nowQuestion: questionList[0],
          nowQuestionNumber: 0,
          questionList: questionList
        });
        console.log(questionList);
        console.log(questionList[0].userChose);
      },
      fail(error) {
        console.log('request fail', error);
      },
    });

  },

  onShow: function () {

  },

  choseA: function (choseCharacter) {
    var that = this;
    var questionList = that.data.questionList;
    var nowQuestionNumber = that.data.nowQuestionNumber;
    //console.log(questionList);
    //console.log(questionList[0].userChose);
    getApp().globalData.score++;
    // var score = that.data.score + 1;
    questionList[nowQuestionNumber].answerResult = 1;
    questionList[nowQuestionNumber].userChose = "非常不同意";
    questionList[nowQuestionNumber].start_time = new Date().getTime();
    that.setData({
      questionList: questionList,
      choseCharacter: "非常不同意",
      // score:score,
    });
    console.log(questionList[nowQuestionNumber].userChose);
    that.nextQuestion = setTimeout(function () {
      if (nowQuestionNumber == 43) {
        that.setData({
          nowQuestion: questionList[nowQuestionNumber],
          nowQuestionNumber: nowQuestionNumber,
        });
      }
      else if (nowQuestionNumber != 43) {
        var nextQuestionNumber = nowQuestionNumber + 1;
        that.setData({
          nowQuestion: questionList[nextQuestionNumber],
          nowQuestionNumber: nextQuestionNumber,
        });
      }
    }, 300);
    that.overSingleChoice(nowQuestionNumber);
  },

  choseB: function (choseCharacter) {
    var that = this;
    var questionList = that.data.questionList;
    var nowQuestionNumber = that.data.nowQuestionNumber;
    //console.log(questionList);
    //console.log(questionList[0].userChose);
    getApp().globalData.score = getApp().globalData.score + 2;
    // var score = that.data.score + 1;
    questionList[nowQuestionNumber].answerResult = 2;
    questionList[nowQuestionNumber].userChose = "不同意";
    questionList[nowQuestionNumber].start_time = new Date().getTime();
    that.setData({
      questionList: questionList,
      choseCharacter: "不同意",
      // score:score,
    });
    console.log(questionList[nowQuestionNumber].userChose);
    that.nextQuestion = setTimeout(function () {
      if (nowQuestionNumber == 43) {
        that.setData({
          nowQuestion: questionList[nowQuestionNumber],
          nowQuestionNumber: nowQuestionNumber,
        });
      }
      else if (nowQuestionNumber != 43) {
        var nextQuestionNumber = nowQuestionNumber + 1;
        that.setData({
          nowQuestion: questionList[nextQuestionNumber],
          nowQuestionNumber: nextQuestionNumber,
        });
      }
    }, 300);
    that.overSingleChoice(nowQuestionNumber);
  },

  choseC: function (choseCharacter) {
    var that = this;
    var questionList = that.data.questionList;
    var nowQuestionNumber = that.data.nowQuestionNumber;
    //console.log(questionList);
    //console.log(questionList[0].userChose);
    getApp().globalData.score = getApp().globalData.score + 3;
    // var score = that.data.score + 1;
    questionList[nowQuestionNumber].answerResult = 3;
    questionList[nowQuestionNumber].userChose = "没有意见";
    questionList[nowQuestionNumber].start_time = new Date().getTime();
    that.setData({
      questionList: questionList,
      choseCharacter: "没有意见",
      // score:score,
    });
    console.log(questionList[nowQuestionNumber].userChose);
    that.nextQuestion = setTimeout(function () {
      if (nowQuestionNumber == 43) {
        that.setData({
          nowQuestion: questionList[nowQuestionNumber],
          nowQuestionNumber: nowQuestionNumber,
        });
      }
      else if (nowQuestionNumber != 43) {
        var nextQuestionNumber = nowQuestionNumber + 1;
        that.setData({
          nowQuestion: questionList[nextQuestionNumber],
          nowQuestionNumber: nextQuestionNumber,
        });
      }
    }, 300);
    that.overSingleChoice(nowQuestionNumber);
  },


  choseD: function (choseCharacter) {
    var that = this;
    var questionList = that.data.questionList;
    var nowQuestionNumber = that.data.nowQuestionNumber;
    //console.log(questionList);
    //console.log(questionList[0].userChose);
    getApp().globalData.score = getApp().globalData.score + 4;
    // var score = that.data.score + 1;
    questionList[nowQuestionNumber].answerResult = 4;
    questionList[nowQuestionNumber].userChose = "同意";
    questionList[nowQuestionNumber].start_time = new Date().getTime();
    that.setData({
      questionList: questionList,
      choseCharacter: "同意",
      // score:score,
    });
    console.log(questionList[nowQuestionNumber].userChose);
    that.nextQuestion = setTimeout(function () {
      if (nowQuestionNumber == 43) {
        that.setData({
          nowQuestion: questionList[nowQuestionNumber],
          nowQuestionNumber: nowQuestionNumber,
        });
      }
      else if (nowQuestionNumber != 43) {
        var nextQuestionNumber = nowQuestionNumber + 1;
        that.setData({
          nowQuestion: questionList[nextQuestionNumber],
          nowQuestionNumber: nextQuestionNumber,
        });
      }
    }, 300);
    that.overSingleChoice(nowQuestionNumber);
  },


  choseE: function (choseCharacter) {
    var that = this;
    var questionList = that.data.questionList;
    var nowQuestionNumber = that.data.nowQuestionNumber;
    //console.log(questionList);
    //console.log(questionList[0].userChose);
    getApp().globalData.score = getApp().globalData.score + 5;
    // var score = that.data.score + 1;
    questionList[nowQuestionNumber].answerResult = 5;
    questionList[nowQuestionNumber].userChose = "非常同意";
    questionList[nowQuestionNumber].start_time = new Date().getTime();
    that.setData({
      questionList: questionList,
      choseCharacter: "非常同意",
      // score:score,
    });
    console.log(questionList[nowQuestionNumber].start_time );
    that.nextQuestion = setTimeout(function () {
      if (nowQuestionNumber == 43) {
        that.setData({
          nowQuestion: questionList[nowQuestionNumber],
          nowQuestionNumber: nowQuestionNumber,
        });
      }
      else if (nowQuestionNumber != 43) {
        var nextQuestionNumber = nowQuestionNumber + 1;
        that.setData({
          nowQuestion: questionList[nextQuestionNumber],
          nowQuestionNumber: nextQuestionNumber,
        });
      }
    }, 300);
    that.overSingleChoice(nowQuestionNumber);
  },

  submit: function () {
    var that =this;
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var questionList = that.data.questionList;
    questionList[nowQuestionNumber].userChose = that.data.choseCharacter;
    var score = getApp().globalData.score;
    that.setData({

      questionList: questionList,
      choseCharacter: []
    })
    wx.redirectTo({
      url: '../result/result'
    });
  },


  overSingleChoice: function (questionNumber) {
    var that = this;
    getApp().globalData.ChoiceAnswerNow = that.data.questionList;
    if (questionNumber == 43) {
      wx.redirectTo({
        url: '../result/result'
      });
    }
  }


})