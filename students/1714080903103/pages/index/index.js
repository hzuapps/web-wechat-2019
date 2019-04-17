
Page({
  data: {
    list: [
      {
        id: 'Monday',
        name: '周一',
        open: false,
        pages: ['AddMemorandum', 'AddMemorandum']
      },
      {
        id: 'Tuesday',
        name: '周二',
        open: false,
        pages: ['AddMemorandum', 'AddMemorandum']
      },
      {
        id: 'Wednesday',
        name: '周三',
        open: false,
        pages: ['AddMemorandum', 'AddMemorandum']
      },
      {
        id: 'Thursday',
        name: '周四',
        open: false,
        pages: ['AddMemorandum', 'AddMemorandum']
      },
      {
        id: 'Friday',
        name: '周五',
        open: false,
        pages: ['AddMemorandum', 'AddMemorandum']
      },
      {
        id: 'Sarturday',
        name: '周六',
        open: false,
        pages: ['AddMemorandum', 'AddMemorandum']
      },
      {
        id: 'Sunday',
        name: '周日',
        open: false,
        pages: ['AddMemorandum', 'AddMemorandum']
      }
    ]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});
