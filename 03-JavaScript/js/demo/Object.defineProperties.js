//Object.defineProperties(object, descriptors)

var obj = {
  name: 'BigSpinach',
  age: 28,
  _sex:'男'//默认值,注意不能与访问器属性名 同名
}
Object.defineProperties(obj,{
  sex:{
    get:function(){
      //console.log('get()');
      //console.log(this);
      //return sex;
      //return this._sex;
      //_sex 第三方变量
      return this._sex
    },
    set(val){
      //console.log(val);
      //sex=val;
      //this.sex = val;//不能直接在set方法中修改属性值，会形成死循环？ this.sex=xx,一直执行set方法
      this._sex = val;
    }
  }
});
//console.log(obj.sex);//获取对象的属性的时候调用 get方法

//设置属性
obj.sex='老虎';//设置对象属性的时候，调用对应的set方法，对应设定的value值通过set(val)形参接收



//数据双向绑定 vue源码
//实现效果，源对象obj，复制对象copyObj ，修改obj 的数据会影响到copyObj，修改copyObj 会影响obj

//源对象obj
let obj={
  userName:'BigSpinach',
  age:18
}
//复制对象copyObj
let copyObj = {};
//复制操作
for(let item in obj){
  //原始复制操作
  //copyObj[item]=obj[item];//这样操作obj和copyObj不会相互影响
  Object.defineProperties(copyObj,{
    [item]:{
      get(){
        return obj[item];
      },
      set(val){
        obj[item] =val;
      }
    }
  })
}
//console.log(copyObj);//{ userName: 'BigSpinach', age: 18 }
console.log(copyObj);

