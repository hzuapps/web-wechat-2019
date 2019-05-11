// pages/input/input.js
Page({
  data: {
    // text:"这是一个页面"
    userName: "",
    birthday:""
  },

  formBindsubmit: function (e) {
    var random = Math.floor(Math.random() * 10);

    var name = e.detail.value.userName;
    var day = e.detail.value.birthday;
      
        if (name ==""&&day!="") {
          wx: wx.showToast({
            title: '请输入姓名'
          })
          return false
        } 
        else if(day==""&&name!="")
        {
          wx: wx.showToast({
            title: '请输入生日'
          })
          return false
        }

        else if (day ==""&&name=="") {
          wx: wx.showToast({
            title: '您还未输入信息'
          })
          return false
        }
else if(day!=""&&name!="") {
     if(random==0||random==1)
     { wx.redirectTo({
        url: '../HAOYUN/HAOYUN'
    })}
    else if(random==2||random==3||random==4||random==5||random==6||random==7)
        {wx.redirectTo({
          url: '../ZHENGCHANG/ZHENGCHANG'
        })}
    else if(random==8||random==9)
        {wx.redirectTo({
          url: '../HUAIYUN/HUAIYUN'
        })}

  }},
  formReset: function () {
    this.setData({
      userName: '清空',
      psw: '清空'
    })
  }
}


)
