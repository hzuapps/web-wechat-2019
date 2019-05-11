/**
 * 引入MD5生成文件
 * @type {[type]}
 */
var md5 = require('../../utils/md5.js')
/**
 * 引入API接口地址文件
 * @type {[type]}
 */
var api = require('../../utils/api.js')
Page({
  data:{
    text:"这是一个页面",
    textarea_placeholder:"请输入要翻译的内容",
    btn_text:"翻译",
    btn_text_null:"清空",
    textarea_text:"",
    result_text:"nothing...",
    result:"结果",
    fanyi_lishi:[],
    fanyi_src:"../../images/fanyi.png"
  },
  btn_click_null (){
    this.setData({
      textarea_text:"",
      result_text:"nothing..."
    })
  },
  textarea_bindinput(res){
    this.setData({
      textarea_text:res.detail.value
    })
  },
  bindTextAreaFocus (){
    this.setData({
      fanyi_src:"../../images/fanyi_selected.png"
    })
  },
  btn_click (){
    let text = this.data.textarea_text
    if(text == '' || text == null){
      wx.showToast({
        title: '请输入要翻译的内容', 
        icon: 'success', 
        duration: 2000, 
      })
      return;
    }
    const that = this
    var salt = (new Date).getTime();
    var appid = api.BAIDU_FANYI_APPID
    var str = appid + text + salt + api.BAIDU_FANYI_APPSCREET;
    var sign = md5.MD5(str)
    wx.request({
      url: api.BAIDU_FANYI_URL,
        data:{
          "q":text,
          "appid":appid,
          "from":"auto",
          "to":"auto",
          "salt": salt,
          "sign":sign
        },
        method:'get',
        header: {
            'Content-Type': 'jsonp'
        },
        success (res) {
          that.setData({
            result_text:res.data.trans_result[0].dst,
            result:that.data.textarea_text,
            textarea_text:""
          })
          var lishi = wx.getStorageSync('lishi') || []
          lishi.unshift(res.data.trans_result[0])
          wx.setStorage({
            key:"lishi",
            data:lishi
          })

          wx.getStorage({
            key:"lishi",
            success (res){
              if (res.data != null) {
                that.setData({
                  result_text:res.data[0].src,
                  result:res.data[0].dst,
                  fanyi_lishi:res.data
               })
              }
            }
          })
        },
        fail (res){
          wx.showModal({
            title: '请求失败',
            content: '请检查网络设置',
            showCancel: false, 
            cancelText: '取消', 
            cancelColor:'#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }else{
                 console.log('用户点击取消或其他')
              }
            },
            fail (){
              console.log('失败')
            }
          })
        }
    })
  },
  bindTextAreaBlur (res){
    this.setData({
      textarea_text:res.detail.value,
      fanyi_src:'../../images/fanyi.png'
    })
  },
  onLoad (options){
    
  },
  onReady (){
   
    var that =this
    wx.getStorage({
      key:"lishi",
      success (res){
        if (res.data != null) {
          that.setData({
            result_text:res.data[0].src,
            result:res.data[0].dst,
            fanyi_lishi:res.data
         })
        }
      }
    })
  },
  onShow (){
   
  },
  onHide (){
    
  },
  onUnload (){
    

    
    
  }
})