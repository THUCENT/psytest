//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
      res: '',
      canIUseClipboard: wx.canIUse('setClipboardData'),
      name: 'bob'//请求参数
    },

    link: function () {
      util.showBusy('请求中...')
      var that = this;
      qcloud.request({
        url: `${config.service.host }/weapp/link`,//此处填写你后台请求地址   
        method: 'GET',  
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {},
        success: function (res) {
          console.log(res);
          that.setData({ item_list: res.data }) 
        },
        fail: function (res) {
          console.log('submit fail');
        },
        complete: function (res) {
          console.log('submit complete');
        } 

      })
  }
      

})