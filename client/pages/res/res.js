// 引入雷达图
import { radar } from '../../component/radar/radar'

//index.js
//获取应用实例
var app = getApp()
Page({
  radar,
  data: {
    scoreN:3,
    scoreE: 3,
    scoreA: 3,
    scoreO: 3,
    scoreC: 3,
    userInfo: {}
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var scoreN = getApp().globalData.scoreN;
    var scoreE = getApp().globalData.scoreE;
    var scoreO = getApp().globalData.scoreO;
    var scoreA = getApp().globalData.scoreA;
    var scoreC = getApp().globalData.scoreC;
    var that = this
    //调用应用实例的方法获取全局数据
    
    that.setData({
      dataArr:[scoreN, scoreE, scoreO, scoreA, scoreC],
    });
    this.radar.draw('data = 11');
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '哇 奇妙的人格', // 分享标题
      desc: '大五人格，权威了解自己', // 分享描述
      path: '/page/user?id=123' // 分享路径
    }
  },
})
