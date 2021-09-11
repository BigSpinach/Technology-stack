function observer(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  if (Array.isArray(obj)) {
    //obj是数组
    for (let i = 0; i < obj.length; i++) {
      let item = obj[i];
      observer(item); //如果是对象会被defineReactive 
    }
  } else {
    //循环遍历obj中的每一个属性
    for (let key in obj) {
      defineReactive(obj, key, obj[key]);
    }
  }
}

function defineReactive(obj, key, value) {
  observer(value); //递归创建响应式的数据  性能不好
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newValue) { //给某个属性设置值的时候，newValue也可能是一个对象，此时需要让这个对象也变成响应式的，此时就需要将这个newValue 也监视起来
      if (value !== newValue) {
        observer(newValue);
        key = newValue;
        console.log('更新视图');
      }
    }
  })
}

let obj = {
  name: 'TiKi'
};
observer(obj);
//修改obj中的属性，会触发get方法，从而触发更新视图的代码
// obj.name='tiger';

//vue中的缺陷
//1. obj中增加不存在的属性，不能触发更新视图的效果
// vue中通过 vm.$set 来解决这个缺陷
//obj.age=19;

//2. 多层数据，vue默认会递归所有数据，增加getter和setter

//3. 给obj中的某个key设置值的时候也可能是一个 对象，此时就不会更新视图了
obj.name = {
  age: 12
}; //这里触发 一个 ’更新视图‘
obj.name.age = 9999; //这里就不会再触发 ‘更新视图’的操作了

//综上：可以得出一个vue的特点
// 使用对象的时候，必须先声明属性，这个属性才是响应式的。