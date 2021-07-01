//观察者模式

class Observer { //被观察者
  constructor() {
    this.status = 'OK';
    this.arr = []; //用于存储 观察者（订阅者们）
  }
  //添加观察者对象
  attach(o) {
    this.arr.push(o);
    let index = this.arr.indexOf(o);
    if (index !== -1) {//说明o已经存在
      // this.arr.push(o);
      this.arr=this.arr;
      console.log(this.arr);
    }
  }
  //更新被观察者的状态
  setStatus(newStatus) {
    this.status = newStatus;
    //希望观察者们也知道了更改了状态，并且做出响应
    this.arr.forEach(item => {
      //item 每一个观察者
      console.log(item);
      item.upDate(newStatus);
    })
  }

}

class Subscriber { //订阅者（观察者）
  constructor(name) {
    this.name = name;
  }
  upDate(newS) {
    console.log(newS);
  }
}

let o1 = new Observer();
let s1 = new Subscriber('S1');
let s2 = new Subscriber('S2');
let s3 = new Subscriber('S3');
//被观察者与观察者产生关联
o1.attach(s1);
o1.attach(s2);
o1.attach(s3);
////更新被观察者的状态,希望观察者们也知道更改了状态
o1.setStatus('FUCK');