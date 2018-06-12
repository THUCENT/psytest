var app = getApp()
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    res: '',
    canIUseClipboard: wx.canIUse('setClipboardData'),
  },

  onload:function(){
    var user = config.service.requestUrl;
    var that = this;
    
  },

  begin: function () {
    wx.navigateTo({
      url: '../ques/ques',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
  })
  },
  onShareAppMessage: function () {
    return {
      title: "快来和我一起决战“大五人格”!",
      path: '/page/user?id=123'
    }
  }
  

})
