// pages/trainList/trainList.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    /**
     * trainList变量用来绑定火车票列表信息
     * winHeight变量动态计算列表信息
     */
    trainList:[],
    winHeight:600,
    /**
     * 定义currentTab动态渲染样式
     */
    currentTab:'1',
  },

  /**
   * 生命周期函数--监听页面加载，接收上一个界面传递过来的参数，并通过wx.setNavigationBarTitle来设置导航标题
   */
  onLoad: function (e) {
    var startStation=e.startStation;//始发站
    var endStation=e.endStation;//终点站
    var date=e.date;//日期
    console.log("startStation="+startStation+"---endStation="+endStation+"---date="+date);
    wx.setNavigationBarTitle({
      title: startStation+'→'+endStation
    });

    /**
     * 定义一个date日期变量，把传递过来的日期赋值给date变量
     */
    this.setData({date:date});
    
    this.loadTrainsList(startStation,endStation);
  },
  loadTrainsList:function(startStation,endStation){
    var page=this;
    wx.request({
      url: 'https://apis.juhe.cn/train/s2swithprice',
      data:{
        start:startStation,//始发站
        end:endStation,//终点站
        date:'',//日期，若不填，默认查询明天的火车票信息
        dtype:'',//火车类型
        key:'5a54c3ff25d0b336ff7dad3d4e889c65'
      },
      method:'GET',
      success:function(res){
        console.log(res);
        var trainList=res.data.result.list;
        var trainList=wx.getStorageSync('trainList');
        var size=trainList.length;
        var winHeight=size*100+30;
        page.setData({trainList:trainList});
        page.setData({winHeight:winHeight});
      }
    });
  },
  /**
   * switchNav菜单来切换事件,动态设置页签导航选中效果
   */
  switchNav:function(e){
    var id=e.currentTarget.id;
    console.log(id);
    this.setData({currentTab:id});
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