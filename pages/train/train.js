// pages/train/train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 海报轮播初始数据
     */
    indicatorDots:false,
    autoplay:"true",
    interval:"5000",
    duration:"1000",
    imgUrls:[
      '/images/haibao/1.jpg',
      '/images/haibao/2.jpg',
      '/images/haibao/3.jpg'
    ],
    /**
     * currentTab默认值为0
     */
    currentTab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 页面初始化 options为页面跳转所带来的参数
     */
  },

/**
 * switchNav进行页签的切换，动态改变变量currentTab的值
 */
  switchNav:function(e){
    var id = e.currentTarget.id;
    this.setData({currentTab: id});
  },
/**
 * 表单提交formSubmit事件，将始发站，终点站，日期，星期带到trainList火车票列表界面
 ，在这个火车票查询界面中输入始发站和终点站，单击“查询”按钮，就会根据输入的内容进行火车票列表的查询*/
  formSubmit:function(e) {
    console.log(e);
    var startStation = e.detail.value.startStation;  //始发站
    var endStation = e.detail.value.endStation;  //终点站
    var date = e.detail.value.date;   //日期2月2日
    var week = e.detail.value.week;   //星期：周四
    wx.navigateTo({
      url: '../trainList/trainList?startStation='+startStation +"&endStation="+endStation+"&date="+date+"&week"+week
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