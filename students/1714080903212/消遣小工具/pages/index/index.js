//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls_1: [
      'http://i0.hdslb.com/bfs/archive/eb8bdc22defd70466d3ae0977fa40887951d5885.jpg',
      'http://i1.hdslb.com/bfs/archive/7649d17c62ebc9666a4768da8c28e0ad040b2888.jpg',
      'http://i0.hdslb.com/bfs/archive/4e97ea58bb5ce03cd372b66137900cacb3c2b08f.jpg',
      'http://i0.hdslb.com/bfs/archive/29f079929a322fd8b1529244fee030e1d97a5771.jpg',
    ],
    imgUrls_2: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557474652304&di=dd92bc3e96523283e1ea661a141da108&imgtype=0&src=http%3A%2F%2Fapp.3987.com%2Fuploadfile%2F2017%2F0906%2F20170906012933823.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557474211660&di=3e282aa13dd54c68f196740bf021bf76&imgtype=0&src=http%3A%2F%2Fimgnews.mumayi.com%2Ffile%2F2017%2F09%2F20%2Fcce8aeca00b1be7aba1e3ea3457203ba.png', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=202670073,2201019629&fm=26&gp=0.jpg'
    ],
    // 是否显示面板指示点
    indicatorDots: true,
    // 是否自动切换
    autoplay: true,
    // 自动切换时间间隔
    interval: 5000,
    // 滑动动画时长
    duration: 1000,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
})