# GitHub实验操作步骤

## 1. 注册GitHub帐号

- 打开 https://github.com，注册（Signup）新帐号；
- 在设定的邮箱接收激活邮件，点击激活链接，激活新帐号。

## 2. Fork 实验库

- 打开 https://github.com/hzuapps/web-wechat-2019 
- 点击右上角的 Fork 按钮，将项目复制到个人帐号下：

```  
https://github.com/你的帐号名/web-wechat-2019
```  

## 3. 安装 Git 工具

- 打开 https://git-scm.org，下载适合本机版本（32位或64位）；
- 双击 exe 文件将工具安装到本机上；
- 从开始菜单打开 Git-Shell。

## 4. 克隆代码到本地磁盘

- 用 cd 命令切换到保存代码的路径上，如切换到D盘：   
```   
$ cd D:\ 
```   
- 用 clone 命令将个人库的代码克隆到本地磁盘：  
```   
$ git clone https://github.com/你的帐号名/web-wechat-2019
```   
- 进入本地项目源代码目录：  
```   
$ cd web-wechat-2019
```   

## 5. 编写代码

- 选择下载并安装一个网页编辑工具，如：Sublime-text
- 打开资源浏览器，在项目中创建个人学号目录，如：web-wechat-2019/students/net123456/
- 或者直接在命令行里，使用 mkdir 命令创建目录：  
```   
$ mkdir students/net123456 
```   
- 编写一个网页 
