/*悬浮球组件 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /*组件的初始数据*/
  data: {
    startX: 0, // 触摸开始的横坐标
    startY: 0, // 触摸开始的纵坐标
    lastX: 0, // 上一次触摸的横坐标
    lastY: 0, // 上一次触摸的纵坐标
    distanceX: 0, // 横向移动距离
    distanceY: 0, // 纵向移动距离
    bottom: 50, // 初始位置的底部距离
    right: 50, // 初始位置的右侧距离
    showImage:false,//控制图片显示
    showSection: false,//控制小悬浮球显示
  },

  /*组件的方法列表*/
  methods: {
    handleTap() {

    // 点击悬浮球触发的事件
    wx.showToast({
      title: '点击了悬浮球',
      icon: 'none'
      
    });

    this.setData({
      showSection: !this.data.showSection,// 点击时切换图片显示状态
      showImage: false
    });

    //弹出图片
    // wx.previewImage({
    //   current: 'https://imgur.la/images/2024/03/13/IP11.png', // 当前显示图片的链接，这里为空字符串表示不指定
    //   urls: ['https://imgur.la/images/2024/03/13/IP11.png'] // 需要预览的图片链接列表
    // });

    },    

    tapChara(){
      this.setData({
        showImage: !this.data.showImage,
        showSection: false
      });
    }

  }
});
