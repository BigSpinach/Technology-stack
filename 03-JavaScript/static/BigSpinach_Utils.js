window.BigSpinach_Utils = (function () {

  /**
   * likeAryToArray
   * @desc 将类数组转换成数组
   * @param {likeAry} 类数组对象 
   */
  function likeAryToArray(likeAry) {
    try {
      return [].slice.call(likeAry, 0)
    } catch (error) {
      let newArr = []
      for (let i = 0; i < likeAry.length; i++) {
        newArr[i] = likeAry[i]
      }
      return newArr
    }
  }


  /**
   * JSONStringToJSONObject
   * @desc JSON字符串转json对象
   * @param {jsonStr} json字符串 
   */
  function JSONStringToJSONObject(jsonStr) {
    return "JSON" in window ? JSON.parse(jsonStr) : eval(`(${jsonStr})`);
  }


  /**
   * getCss
   * @desc 获取元素的样式
   * @param {curEle,attr} 要获取的目标元素，和属性
   */
  let getCss = function (curEle, attr) {
    if (typeof window.getComputedStyle === 'undefined') {
      return;
    }
    let val = window.getComputedStyle(curEle, null)[attr],
      reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/i;
    reg.test(val) ? val = parseFloat(val) : null;
    return val;
  };

  /**
   * setCss
   * @desc 设置目标元素的样式
   * @param {curEle, attr, value} 要设置的目标元素，和属性 及值
   */
  let setCss = function (curEle, attr, value) {
    if (attr === 'opacity') {
      curEle.style.opacity = value;
      curEle.style.filter = `alpha(opacity=${value * 100})`;
      return;
    }
    if (!isNaN(value)) {
      let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
      reg.test(attr) ? value += 'px' : null;
    }
    curEle['style'][attr] = value;
  };

  /**
   * setGroupCss
   * @desc 批量设置目标元素的样式
   * @param {curEle, option} 要设置的目标元素，和{属性=值,...}
   */
  let setGroupCss = function (curEle, options = {}) {
    for (let attr in options) {
      if (!options.hasOwnProperty(attr)) break;
      setCss(curEle, attr, options[attr]);
    }
  };


  /**
   * css
   * @desc 设置或者获取元素的属性
   * @param {...arg} 根据传的值的不同，调用不同的方法（获取？设置？批量设置？）
   */
  let css = function (...arg) {
    let len = arg.length,
      fn = getCss;
    len >= 3 ? fn = setCss : null;
    len === 2 && (arg[1] instanceof Object) ? fn = setGroupCss : null;
    return fn(...arg);
  };

  /**
   * offset
   * @desc 获取当前元素距离BODY的偏移(左偏移和上偏移)
   * @param {curEle} 要获取偏移量的元素
   */
  let offset = function (curEle) {
    //1.先获取当前元素本身的左/上偏移
    let curLeft = curEle.offsetLeft,
      curTop = curEle.offsetTop,
      p = curEle.offsetParent;

    //2.累加父参照物的边框和偏移(一直向上找,找到BODY为止)
    while (p.tagName !== 'BODY') {
      //3.把找到的父参照物的边框和偏移值累加起来
      curLeft += p.clientLeft;
      curLeft += p.offsetLeft;
      curTop += p.clientTop;
      curTop += p.offsetTop;
      p = p.offsetParent; //=>基于当前找到的父参照物继续向上查找
    }

    return {
      top: curTop,
      left: curLeft
    };
  };


  /**
   * setScroll
   * @desc 设置scrollLeft或者scrollTop
   * @param {attr, value} 要设置的属性=值
   */
  //=>操作浏览器盒子模型属性的
  let winHandler = function (attr, value) {
    if (typeof value !== 'undefined') {
      //=>设置盒子模型属性值:SCROLL-TOP/LEFT
      document.documentElement[attr] = value;
      document.body[attr] = value;
      return;
    }
    return document.documentElement[attr] || document.body[attr];
  };


  /**
   * checkoutType
   * @desc 检测目标对象的数据类型，基于Object.prototype.toString 方法
   * @param {target}
   */
  function checkoutType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
  }

  /**
   * clone
   * @desc 深克隆一个对象或数组
   * @param {target}
   */
  function clone(target) {
    let result; //返回的最终的结果（对象或数组）
    //类型检测，初始化result 的数据类型
    let checkType = checkoutType(target);
    if (checkType === 'Object') {
      result = {};
    } else if (checkType === 'Array') {
      result = [];
    } else {
      //return result=target;
      return target;
    }

    //基于 for...in 进行拷贝
    for (let item in target) {
      //target[item] 是当前对象或数组对应的key的value
      if (checkoutType(target[item]) === 'Object' || 'Array') {
        result[item] = clone(target[item])
      } else {
        result[item] = target[item];
      }
    }
    return result;
  }



  return {
    likeAryTo: likeAryToArray,
    jsonTo: JSONStringToJSONObject,
    css,
    offset,
    winHandler,
    checkoutType,
    clone

  }
})();