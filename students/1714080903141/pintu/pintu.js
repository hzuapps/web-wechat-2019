var shuju = new Array("","","","","","","","","","","","");
var i = 0;
var temp;
var q = 0;
function jisun(a,b,yunsuanfu){
  const dh = yunsuanfu[yunsuanfu.length-1]
  var res;
  if(dh == 0){
    res = a + b;
  }else if (dh == 1){
    res = a - b;
  }else if (dh == 2){
    res = a * b;
  }else if (dh == 3){
    res = a / b;
  }
return res;
}
Page({
  data: {
    experssion: "",//表达式
    nowOperator: null,//目前运算符
    prevOperator: null, //上一运算符
    ppOperator:null,//上上一运算符
    isOperator: false,// 前一按键是否为运算符
    result: 0,//结果
    shamResult: null,//虚结果
    operatorArray: ["+", "-", "×", "÷", "=", "(", ")"],//运算符数组
    digitfinal: null,//收尾数据
    digitOne: "",
    isSame: false,//左右括号
    accumulator: 0,
    dou: false,//连续按加减乘除
    first: false,
///////////////////
    initial: 0,
    i0:0,
    i1:0,
    i2:0,
    i3:0,
    i4:0,
    i5:0,
    i6:0,
    i7:0
    

  },
  //key-subtract1  key-multiply2  key-divide3

  // 触摸运算符
  onTapOperator: function (event) {
    //inputAlone待更改
    const inputAlone = this.data.digitOne;//单独的数值
    const currentOperator = event.target.dataset.key;//当前运算符
    var lastOperator = this.data.prevOperator;//上一运算符
    const llastOperator = this.data.ppOperator;//上上一运算符
    //////////
    temp=shuju[i];
    this.setData({
      i0: shuju[0],
      i1: shuju[1],
      i2: shuju[2],
      i3: shuju[3],
      i4: shuju[4],
      i5:shuju[5]
    })
    /////////
    if (currentOperator == 'key-add0' || currentOperator == 'key-subtract1' || currentOperator == 'key-multiply2' || currentOperator == 'key-divide3') {
      if (lastOperator == 'key-add0' || lastOperator == 'key-subtract1' || lastOperator == 'key-multiply2' || lastOperator == 'key-divide3') {
        if (inputAlone == null) {//输入两个运算符，用后面的修改上一个运算符
          this.setData({//连续多次键入+-*/，用后面的更新前面的运算符
            nowOperator: currentOperator,
            prevOperator: currentOperator
          });
          return;//直接结束，prevOperator值没有改变
        }
      }
    }
    const dh = currentOperator[currentOperator.length - 1];//运算符代号
    
    //if (this.data.lastOperator == null) {//首次执行这个函数时，为假


/*       开始计算      */
    
      if (currentOperator == 'key-right6' && lastOperator == 'key-left5' && inputAlone == null) {
        this.setData({//result为空，同时出现左右括号
          experssion: this.data.experssion + ')',
          result: 0,
          accumulator: this.data.accumulator - 1,
          isSame: true,
        });
      }

      if(currentOperator == 'key-left5'){
        this.setData({
          experssion: this.data.experssion + this.data.operatorArray[op],
          accumulator: this.data.accumulator + 1
        });
      }

      if (currentOperator == 'key-right6'){
        this.setData({
          experssion:this.data.experssion + this.data.operatorArray[op],
          accumulator:this.data.accumulator - 1
        });//key-subtract1  key-multiply2  key-divide3
      }
//         0 1 2 3
//         8-6/5
//         6*8/5/  此时i=2   得到6 48 5三个数据，此时shuju[1]=48
//         6*8/5/2     i=3   得到6 48 9.6

  if (lastOperator == 'key-multiply2' || lastOperator == 'key-divide3') {
    if (llastOperator == 'key-multiply2' || llastOperator == 'key-divide3') {
      //8-6*5/2*8,
      //得到shuju[2]=240
      shuju[i - 1] = jisun(shuju[i - 2], shuju[i - 1], llastOperator);//改变2号
    }
    if (llastOperator == 'key-add0' || llastOperator == 'subtract1') {
      //得到8-30/2*8，此时shuju[1]=shuju[0]=8,shuju[2]=30
      shuju[i] = jisun(shuju[i - 1], shuju[i], lastOperator)//改变2号
      this.setData({
        experssion: this.data.experssion + this.data.operatorArray[dh],
        isOperator: true,
        
      });
      shuju[i - 1] = shuju[i - 2];
      return;//使得，lastOperator，保持原来的+或-
    }
  }
  if (lastOperator == 'key-add0' || lastOperator == 'key-subtract1') {
    if (llastOperator != null) {
      shuju[i - 1] = jisun(shuju[i - 2], shuju[i - 1], llastOperator);
    }
  }

      
      //6*8/5/2*8=
      //shuju[0]=6
      //shuju[1]=48
      //shuju[2]=9.6
      //shuju[3]=2
      //shuju[4]=8
      //此时i=4，
      if (currentOperator == 'key-equals4'){
        if(llastOperator == null){
          this.setData({
            result:jisun(shuju[i-1],shuju[i],lastOperator),
          })
        }
        else{
          shuju[i] = shuju[i] == "" ? 0 : shuju[i];
          shuju[i-1] = shuju[i-1] == "" ? 0 :shuju[i-1];
          const a = shuju[i-1];

          this.setData({
            result: jisun(shuju[i - 1], shuju[i], lastOperator),
            i0: a,
            //result:jisun(a,shuju[i],lastOperator),
            i5: shuju[i - 2],
            i6: shuju[i - 1],
            i7: llastOperator

          })
          //this.setData({
          //  result:jisun(this.data.result,shuju[i],lastOperator)
          //})
        }
        
        
        
        i=0;
      }
      this.setData({
        experssion: this.data.experssion + this.data.operatorArray[dh],
        isOperator: true,
        prevOperator:currentOperator,
        nowOperator:currentOperator,
      });
      if(q!=0){
        this.setData({
          ppOperator:lastOperator
        });
      }
      q++;
                               i++;//下标加1
      /*
      else if (currentOperator == 'key-left5') {
        if (this.data.shamResult == null) {//第一个按键就是（
          this.setData({
            experssion: this.data.operatorArray[op],
            accumulator: this.data.accumulator + 1
          });
        }
         else {
          this.setData({
            experssion: this.data.operatorArray[op] + this.data.experssion,
            accumulator: this.data.accumulator + 1
          });
        }
      } /*else {
        this.setData({               //当输入12+（9-，inpValue为12+（9。
          value: inputAlone,         //当输入12+时，value= 12，last=null，prev=+
          experssion: this.data.experssion + this.data.operatorArray[op]
        });
      }
    } else if (prevOperator == 'key-left5') {//左括号
      this.setData({
        experssion: this.data.experssion + '(',// 值为12+（
        number: this.data.value,//12
        value: "null"//截断
      });
      //此行以上为正确代码
    } else if (prevOperator == 'key-right6') {

      this.setData({
        accumulator: this.data.accumulator - 1,
      });



      if (prevOperator == 'key-right6') {
        this.setData({
          value: this.data.number,
          experssion: this.data.experssion + this.data.operatorArray[op]
        });
        const currentValue = this.data.value || 0;
        const newValue = this.calculatorOperations[lastOperator](currentValue, inputAlone);
        //lastOperator 是（）时，不可能来到这里，value为null前面截断
        this.setData({
          value: newValue,
          experssion: this.data.experssion + "=" + newValue
        });
      } else if (prevOperator == 'key-multiply2') {
        if (prevOperator == 'key-multiply2' || prevOperator == 'key-divide3') {
          const currentValue = this.data.value || 0;
          const newValue = this.calculatorOperations[lastOperator](currentValue, inputValue);
          this.setData({
            value: newValue,//乘的结果
            experssion: this.data.experssion + this.data.operatorArray[op]
          });
        } else if (prevOperator == 'key-add0' || prevOperator == 'subtract1') {

        }


        this.setData({
          value: newValue,//乘的结果
          experssion: this.data.experssion + this.data.operatorArray[op]
        });
      }



    }
    this.setData({
      waitingForOperand: true,
      operator: nextOperator,
      displayOperator: nextOperator
    });


    /*
    */


      /*
      const nextOperator = event.target.dataset.key;
      const inputValue = parseFloat(this.data.experssion);
      
      if (this.data.value == null) {
        this.setData({
          value: inputValue
        });
      } else if (this.data.operator) {
        const currentValue = this.data.value || 0;
        const newValue = this.calculatorOperations[this.data.operator](currentValue, inputValue);
  
        this.setData({
          value: newValue,
          experssion: String(newValue)
        });
      }
  
      this.setData({
        waitingForOperand: true,
        operator: nextOperator
      });
      
  
  */
      
   // }
   
    this.setData({//重置digitOne，在按下数字键中赋值digitOne
      digitOne: null,
      shamResult: null
    });
  },

  //运算
  
   
  /*
  res:function(yunsuan){

  },*/
  
  onLoad: function (options) {
    this.calculatorOperations = {
      'key-divide3':  (prevValue, nextValue) => prevValue / nextValue,
      'key-multiply2': (prevValue, nextValue) => prevValue * nextValue,
      'key-add0': (prevValue, nextValue) => prevValue + nextValue,
      'key-subtract1': (prevValue, nextValue) => prevValue - nextValue,
      'key-equals4': (prevValue, nextValue) => nextValue,
      

    }
    
  },

  /* AC操作，一下回到解放前 */
  clearAll() {
    this.setData({
      experssion: null,//表达式
      nowOperator: null,//目前运算符
      isOperator: false,// 前一按键是否为运算符
      result: 0,//结果
      shamResult: null,//虚结果
      //运算符数组
      digitfinal: null,//收尾数据
      digitOne: null,
      prevOperator: null,
      isSame: false,
      accumulator: 0,
      dou: false,
    })
  },

  /* */
  pow: function () {
    this.calculatorPow = {

    }
  },

  /*delele删除一个操作*/
  deleteOne() {
    this.setData({
      //等待
    })
  },

  /* 仅清空当前显示的输入值 */
  clearDisplay() {
    this.setData({
      experssion: '0'
    })
  },

  onTapFunction: function (event) {
    const key = event.target.dataset.key;

    switch (key) {
      case 'key-clear':
        if (this.data.experssion !== '0') {
          this.clearDisplay();
        } else {
          this.clearAll();
        }

        break;
      //正负号，parseFloat(string)将string转换为浮点数，https://blog.csdn.net/qq_35694099/article/details/81103177
      case 'key-sign':
        var newValue = parseFloat(this.data.experssion) * -1

        this.setData({
          experssion: String(newValue)
        })

        break;

      case 'key-percent':
        const fixedDigits = this.data.experssion.replace(/^-?\d*\.?/, '')
        var newValue = parseFloat(this.data.experssion) / 100

        this.setData({
          experssion: String(newValue.toFixed(fixedDigits.length + 2))
        });

        break;

      default:
        break;
    }
  },

  //数字键盘
  onTapDigit: function (event) {
    shuju[i-1]=temp;
    if (this.data.isSame == true) {//左右括号
      var a = String(this.data.experssion);
      var j = a.lastIndexOf("(");//获取(最后一次出现的位置
      var n = a.split("");
      n.length = j;//n是一个数组,从第一个字符到最后一个（字符之前
      a = n.join("");//数组连接,
      this.setData({
        isSame: false,
        experssion: a,//去掉了无效括号
      });
    }//ok的,只是expression里面没有（，才报错，找不到那个位置


    const key = event.target.dataset.key; // 根据data-key标记按键
    if (key == 'key-dot') {
      // 按下点号
      if (!(/\./).test(this.data.experssion)) {
        shuju[i] = '.';
        ////////
        this.setData({
          experssion: this.data.experssion + '.',
          digitOne: '.',
          isOperator: false,
          shamResult:"notnull"
        });
      }
    } else {
      // 按下数字键
      const digit = key[key.length - 1];//得到数字

      if (this.data.isOperator) {//前一操作（按键）是运算符
        shuju[i] = String(digit);
        /////////
        this.setData({//上一个操作是运算符，在onTapOperator函数中，expression加了运算符表示
          experssion: this.data.experssion + String(digit),
          digitOne: String(digit),
          shamResult:"notnull"
        });
      } else {
        shuju[i] = this.data.shamResult === 'null' ? digit : shuju[i] + String(digit);
        ///////////////////
        this.setData({
          experssion: this.data.shamResult === 'null' ? String(digit) : this.data.experssion + digit,
          digitOne: this.data.shamResult === 'null' ? String(digit) : this.data.digitOne + String(digit),
          shamResult:"notnull"
        });
      }
    }
  }
})
