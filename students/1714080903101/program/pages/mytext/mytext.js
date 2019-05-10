<view class="bg">
<view class="head">
<view class="headicon">
  
<image src="{{userInfo.avatarUr1}}"
style="width:70px;height:70px;"></image>
</view>
<view class="login">
 {{userInfo.nickName}}
</view></view>
<button class="button" open-type="getUserInfo"wx:if={{
  hasUserInfo}}" bindgetuserinfo="doAuthorization">微信登录</button>
  </view>