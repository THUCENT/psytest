var app = getApp()
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    res: '',
    canIUseClipboard: wx.canIUse('setClipboardData'),
    name: 'bob'//请求参数
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
  }
  
    


})
