//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    number: 0

  },
  onLoad: function () {
    this.getFightingSort()
    this.matchTimeRun()
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
        number++
      }, 1000)
  }

})
