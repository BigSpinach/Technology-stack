let obj = {
  a: {
    a: 1
  }
};

function observer(obj) {
  //监控obj中的key
  if (typeof obj !== 'object' || obj == null) return;
  for (let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}

function defineReactive(obj, key, value) {
  observer(value); //递归处理value如果也是一个对象
  Object.defineProperty(obj, key, {
    get() {
      return value
    },
    set(val) {
      console.log('update');
      value = val;
    }
  });
}

//使用
observer(obj);
obj.a.a = 250; //触发 set方法
console.log(obj.a.a);