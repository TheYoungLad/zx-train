// pages/mycenter/mycenter.js

/**
 * 动态获取昵称，使用App.getUserInfo接口来获取个人信息
 */
var App=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that=this
    // //以调用应用实例的方法获取全局时间
    // App.getUserInfo(function(userInfo){
    //   console.log(userInfo);
    //   //更新数据
    //   this.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  /**
   * 通过列表导航进入二级界面，实现方式和进入抢票界面一样
   * 绑定跳转事件，配置相应的跳转路径
   */
  grabTicket:function(){
    wx.navigateTo({
      url:'../grabticket/grabticket'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})