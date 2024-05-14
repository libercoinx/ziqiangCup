// index.js
Page({

  /*页面的初始数据*/
  data: {
    currentTab: 0,
    images:[
      'https://636c-cloud1-0gbzo63w32e7b734-1324309291.tcb.qcloud.la/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240514181119.jpg?sign=a910afed7c875a7a512de772c9e2e8bf&t=1715681537',
      // 'https://636c-cloud1-0gbzo63w32e7b734-1324309291.tcb.qcloud.la/Revol/mlsf.jpg?sign=58433fbec9b0438be262ae2c70996edf&t=1708513583',
      // 'https://636c-cloud1-0gbzo63w32e7b734-1324309291.tcb.qcloud.la/Revol/cxch.jpg?sign=e08677dfc227ea9a68bf396059d3b3fb&t=1708513611'
    ],
    isShow: false,
    animationContact: {},
    animationSave: {},
    animationShare: {},
    animationHome: {},
    animationModal: {},
    animationContainer:{}

  },

  //处理菜单点击
  tabNav(e){
    let currentTab = e.currentTarget.dataset.index
    this.setData({
      currentTab
    })
  },

  //处理cardContainer的滑动
  handleSwiper(e){
    let {current,source} = e.detail
    if(source==='autoplay'||source==='touch'){
      const currentTab = current
      this.setData({
        currentTab
      })
    }
  },

  //点击主页地图
  gotoMap(){
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },

  //点击主页商店
  gotoShop(){
    wx.navigateTo({
      url: '/pages/shop/shop'
    })
  },

  //点击主页论坛
  gotoForum(){
    wx.navigateTo({
     url: '/pages/forum/forum'
    })
  },

  //点击信息卡片
  gotoInfo(e){
    let infoId = e.currentTarget.id
    wx.navigateTo({
      url: '/pages/information/information?infoId=' + infoId 
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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