#  CSS



> 常用浏览器
>
> - Chrome  ---------Webkit内核（V8引擎）
> - firfox  ---------Gecko内核
> - IE      ---------Trident内核
> - opera   --------- Presto内核
> - safari等其他浏览器  





## 1 HTML 基础及其实战





### 1.1 HTML标签和标签属性

### 1.2 元素和元素分类

#### 1.2.1 元素

#### 1.2.2 元素分类

`行内元素`

1. 自左向右水平排列，如果一行中不足以容纳所有的元素则切换到下一行继续自作向右水平排列（和我们书写习惯一样）
2. 默认高度和宽度都被内容撑开   

`块级元素`

1. 自上向下进行排列（独占一行）
2.  默认宽度和元素一样
3.  默认高度被内容撑开



#### 1.2.3 元素之间的转换





### 1.3 标签语义化

> logo标签使用h1标签（h1的权重最大）



#### 1.3.1 标签语义化的好处

1. 利于SEO 优化 
2. 样式丢失时，还可以较好的呈现结构
3. 更好的支持各种终端
4. 利于团队开发和维护

#### 1.3.2  标签语义化的法则

1. 减少无意义标签的使用
2. 不使用含有css样式的标签（b,s,font）
3. 在需要强调的部分，使用strong ，em，但是尽量使用css样式来描述
4. 表格搭建时，
   使用`<thead> `,`<tbody> `,`<tfoot> `
5. 列表搭建时，使用`<ul>`,`<ol>`,`<dl>`



#### 1.3.3 标签语义化的含义

+ 合适的标签干合适的事情
+ 标签语义化为浏览器和搜索引擎服务



### 1.4 网页的基本结构

```html
<!-- html5 的  文档声明   -->
<!DOCTYPE html>
<!-- 根元素lang语言 en英语  ch中文 -->
<html lang="en">
<!-- 网页的头部 -->
<head>
    <!-- 
        mate元信息
       编码 UTF-8
        网页的关关键字 SEO优化
        网页的描述内容
        视口 viewport  meta： vb  tab(移动端手机页面开发必须加的code) 
    -->
    <meta charset="UTF-8">
    <!-- 网页的标题 -->
    <title>01-网页的基本结构</title>
    <!-- 标题前的小图标 -->
    <link rel="shortcut icon" type="text/css" href="https://avatars1.githubusercontent.com/u/31435638?s=460&v=4">
</head>
<!-- 网页的主体 -->
<body>

</body>
</html>
```



## 2 CSS 基础

**css简介**

>CSS （层叠样式表） 
>编辑层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。
>
>CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。

**基础语法**



![](https://www.w3school.com.cn/i/ct_css_selector.gif)

**命名规范**

> 1. 必须使用英文开头，并且开头字幕小写
> 2. 所有命名最好都小写
> 3. 尽量不要使用缩写英文，除非可以一目了然
> 4. 如果遇到相差不大的class或者id ，主功能识别字母在前，位置识别字母在后
> 5. 驼峰命名法



### 2.1 css的引入方式

#### 2.1.1 行内式

```html
<div style="width:250px;height:250px"></div>
```

#### 2.1.2 内嵌式

```html
<style>
  p{
        width:250px;
        height:250px;
   }
</style>
```

#### 2.1.3 外链式

```html
<link rel="stylesheet" type="text/css" href="../css/index.css" />
```



#### 2.1.4 导入式

+ `@import url()` 命令来导入一个独立的css文件

```html
<style>
	@import url("global.css");
	@import url(global.css);
	@import "global.css";
</style>
```



#### 2.1.5 `link`和`import`的区别

本质上：这两种方式都是为了加载外部CSS文件

1. `link` 属于`HTML`标签，`@import`属于`CSS`的命令
2. `link`引入的css样式会同时加载
   `@import`会等待页面加载完毕后再去加载引入的css样式
3. `@import`兼容差（IE5)以上
4. 使用`js`控制`DOM`的时候，只能控制`link`引入的css样式
5. `@import`会对网站服务器产生过多的HTTP请求



### 2.2 css选择器



#### 2.2.1 基本选择器

- `标签选择器`
- `class（类名）选择器`
- `id选择器`
- `"*"通配符选择器`



#### 2.2.2 并集选择器 “，”

> 样式相同的标签可以并列写在一起 例如（h1,p,div）

```css
h1,p,div{
  color:green;
  font-size:28px;
}
```



#### 2.2.3 交集选择器 “p.c1”

> 两种属性同属于一个元素的时候

```css
p.c1{
  /*注意：标签名和类名之间没有空格隔开*/
  color:green;
  font-size:28px;
}
```



#### 2.2.4 后代选择器 ” 空格”

```css
li strong {
  /*li下的所以子子孙孙strong标签*/
  font-style:italic;
  font-weight:normal;
}
```

#### 2.2.5 子代选择器“>” 

```css
/*子代选择器只作用于子代元素，孙子以及孙子后边的元素不受影响*/
h1>p{
  /*只作用于h1标签的p标签（儿子级别的p）*/
  color:yellow;
}
```





#### 2.2.6相邻兄弟选择器 “+”以及所有兄弟选择器 “~”



#### 2.2.7 属性选择器[属性名]

```css
[tittle]{
  /*给所有拥有title属性的元素设置样式*/
  font-size:250px;
}

[type="password"]{
  /*给所有拥有type属性并且属性值为 password的元素设置样式*/
  background-color:red;
}
```

+ E[attr=val]
+ E[attr|=val] 等于val 或者以val-开头
+ E[attr*=val] 包含val
+ E[attr~=val] 属性值有多个，其中有一个是val
+ E[attr^=val] 以val开头
+ E[attr$=val]  以val结尾

#### 2.2.8 `a`元素的伪类选择器

权重：10<伪类<11

+ a:link
+ a:visited
+ a:hover
+ a:active
+ a:focus
+ a:first-child   向元素的第一个子元素添加样式
+ a:lang            向带有指定`lang`属性的元素添加样式



`css3`目标伪类选择器

+ :target 用来匹配url指向的目标元素

  存在url指向该元素匹配元素时，样式才能生效

  ```html
  <div id="div1"></div>
  <p style="height:1000px"></p>
  <a href="#div1">点击定位到的目标元素div1</a>
  
  
  <style>
    /*点击a标签的时候，更改目标元素div1的样式为*/
    :target{
      background:yellow;
      
    }
  </style>
  ```

#### 2.2.9 常见的伪类选择器

##### 2.2.9.1 `:first-child` 、`:last-child`

#####  2.2.9.2 `:first-of-type`、`las-of-type`

#####  2.2.9.3 `:nth-child(n)`、`nth-of-type(n)`、`nth-last-of-type(n)`

#####  2.2.9.4 `:only-child`、`:only-of-type`

#####  2.2.9.5 `:not()`

#####  2.2.9.6 `:empty`

#####  2.2.9.7 `:hover`

#####  2.2.9.8 `:checked `



被选中 主要用在input的表单元素

#####  2.2.9.9 `:hover`,`:link`,`:visited`,`:avtive`

 a元素相关的伪类

#### 2.2.10 伪元素

+ :first-letter        向文本的第一个字母添加特殊样式
+ :first-line          向文本的首行添加特殊样式
+ :before             在元素之间添加内容
+ :after                在元素之后添加内容
+ :selection         选中的内容

```css
li:after{
  display:block;/*设置宽度*/
  content:"";/*不加这个伪类不生效*/
  
  width:20px;
  height:20px;  
}
```

### 2.3 css权重、尺寸大小、颜色



#### 2.3.1 css权重

权重的计算公式

			内联样式 1000(1,0,0,0)
	     id选择器 100 (0,1,0,0)
	     类和伪类  10 (0,0,1,0)
	     元素      1 (0,0,0,1)
	     通配选择器 0 (0,0,0,0)
	     继承来的样式，没有优先级	
权重规则： 

+ 权重不同，权重高的生效
+ 权重相同，覆盖原则
+ 对于复合选择器来说，需要将所有的选择器的优先级相加然后在比较
+ 【特别的】设定高权重 **！important 1000;**



#### 2.3.2 尺寸大小

【像素px】

css 不是 物理像素



【百分比】

相对于父级（父级包含块）尺寸设定百分比



【em】

参考当前元素自己的字体大小

```css
.box{
  font-size:100px;
*/lem= 1 font-size*/
}

```



【rem】

参考根元素html的字体大小

```css
html{
  font-size:100px;
	*/lem= 1 font-size*/
}

```



#### 2.3.3 颜色

【常用颜色单词】

```css
color:red;
color:yellow;
color:blue;
color:pink;
color:greay;
...
```



【RGB值,RGBA】

范围0-255

rgb（Red， Green ，Blue）

```	css
background-color:rgb(0,0,0);
background-color:rgb(1%,100%,0);

rgba(0,0,0,0.2);//最后为透明度 范围0~1
```





【#xxxxxx】

十六进制的rgb值  ,范围00-ff

```css
background-color:#666666;
```



【hsl(),hsla()】

​		h 表示色相 0 - 360
​                s 表示饱和度 0% - 100% （值越大色越正，值越小色越灰）
​                l 表示亮度 0% - 100% 
​				a 表示透明度



```css
background-color:hsl(0,10%,10%);
```




### 2.4 css的属性继承

#### 2.4.1 不可继承的属性

+ display

+ 文本属性

  + vertucal-align ：垂直文本对齐
  + text-decoration : 
  + text-shadow ： 文本阴影
  + white-space： 空白符的处理
  + unicode-bidi: 设置文本方向

+ 盒子相关的属性

+ 背景属性

+ 定位属性

+ 浮动类

+  生成内容属性

+ 轮廓样式属性

+ 页面样式属性

+ 声音样式属性

  + pause-befor  : 

  + pause-after 

  + ...

    

    

#### 2.4.2 可以继承的属性



+ 字体系列样式

  + font
  + font-family
  + font-weight
  + font-size
  + font-style
  + font-variant :设置小型大写字母的字体显示文本（相对的）
  + font-stretch ：对当前的font-family 进行伸缩变形
  + font-size-adjust : 为某个元素规定一个 aspect值，这样就可以保持首选字体的 x-height

+ 文本系列属性

  + text-indent  : 文本缩进

  + text-align : 文本水平对齐

  + line-height : 行高

  + word-spacing ： 增加或者减少字符间的空白（字间隔）

  + letter-spacing ：字符间距

  + text-transform ： 控制文本大小写

  + direction ： 规定文本的书写方向

  + color

    

+ 元素的可见性 visibility

+ 表格布局属性

+ 列表布局属性

  + list-style-type
  + list-style-image
  + list-style-position

+ 生成内容属性

  + quotes

+ 光标属性

  + cursor

+ 页面样式属性

  + page
  + page-break-inside
  + windows
  + orphans

+ 声音样式属性

  + speak
  + speak-punctuation
  + speak-numeral
  + speal-header
  + ...



### 2.5 css的盒子模型

width  height
		padding
		border
		margin

#### 2.5.1 传统css盒子模型





##### 2.5.1.1`padding`

内边距会影响盒子的大小





##### 2.5.1.2`boder`

边框会影响盒子的大小

+ 边框设置时  `border-style`必须设置，boder-color，border-width浏览器会给出默认值（建议还是设置，浏览器给出的值出人意料）

```css
.box{
      width: 300px;
      height: 300px;
      color:yellow;
      background-color: aqua;
      margin: 50px;
      padding: 10px;
      border:  solid ; /*不指定宽度，边框也会有一个默认宽度 一般3px*/
      /*不指定颜色，不指定border会默认使用字体颜色*/
    }
```







##### 2.5.1.3 `margin`

不影响盒子大小（影响盒子的占位大小和位置）



当前盒子和其他盒子之间的距离称为外边距

1.  外边距不会影响盒子的可见框的大小，
   但是会影响盒子实际占地的大小，影响盒子的位置
2. 由于在浏览器中默认情况下，元素是靠左靠上排列的，
     所以我们设置上左外边距时，会移动元素自身
     而设置下和右外边距时，会移动其他元素
3. 外边距可以使负值，如果是负值则元素会向相反方向移动











- margin重叠规则：取较大的margin的值（不会相加）

  ```html
  <div class="box1"></div>
  <div class="box2"></div>
  
  
  <style>
  	 /*1. margin重叠规则 */
      .box1{
        background-color: aqua;
        margin-bottom: 20px;
      }
  
      .box2{
        background-color:sandybrown;
        margin-top: 50px;
      }
  </style>
  ```

  

  

- margin的兼容处理

  ```html
  <div class="outer">
      <div class="inner"></div>
   </div>
  
  <style>
  	 /*2. margin-top的传递问题*/
      /*大盒子里边嵌套小盒子，给小盒子设置margin，
        效果没实现，
      结果整体盒子下移动
      */
  
  /*解决方案一：overflow:hidden*/
      .outer{
        width: 200px;
        height: 200px;
        background-color:greenyellow;
        /*父级盒子加上overflow:hidden,解决子盒子 margin-top传递的问题，实现父子分离*/
        /*注意：此处并不表示溢出隐藏，表示的是解决margin传递*/
        overflow: hidden;
      }
  
    /*解决方案二：给父级元素设置padding-top值*/
    .outer{
        width: 200px;
        height: 199px;
        background-color:greenyellow;
       	 padding-top:1px;
      }
    
    /*解决方案三：给父级元素设置	 border-top的值*/
    .outer{
        width: 200px;
        height: 199px;
        background-color:greenyellow;
       	 border-top:1px solid transform;/*透明最优，也可设置为跟父元素一样的颜色*/
      }
    
    
    .inner{
        background-color:red;
        margin-top: 10px;
     }
    
    /*解决方案四：给父级元素设置	padding值，撑开，子元素不需要设置margin的值*/
    .outer{
        width: 200px;
        height: 190px;/*缺点*/
        background-color:greenyellow;
       	padding-top:10px;/*缺点*/
      }
  
  
      .inner{
        background-color:red;
        /* margin-top: 10px; */
      }
  </style>
  ```

  

`margin取负值实现特殊需求`





##### 2.5.1.4 css盒子模型的计算

元素实际宽度 = width+padding+border
		元素实际高度 = height+padding+border

> 注意：border生效 需要三个条件，单一设置不生效

#### 2.5.2 css3新增的盒子模型

box-sizing:border-box

> width = 内容宽  + padding + border
>
> height = 内容高 + padding + border







#### 2.5.3   怪异盒子模型

IE 盒子模型其实就是 box-sizing:border-box





####  2.5.4 flex布局



####  2.5.5 行内元素的盒模型

1. 内联元素不支持设置宽度和高度

   ```HTML
   <span class="span1">XXXX</span>
   <style>
       .span1 {
         width: 200px;
         height: 50px;
         /*设置了宽高，实际宽高由内容宽高决定*/
         background-color: aqua;
       }
   </style>
   ```

   

2. 内联元素可以设置padding, 但是垂直方向的padding不会影响页面的布局(会影响视觉效果)

```html
<span class="span2">XXXX</span>
<style>
    .span2 {
      background-color: yellowgreen;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 500px;
      padding-bottom: 200px;
    }
</style>
```



3.内联元素可以设置border，但是垂直方向的border不会影响页面的布局

```html
<span class="span3">XXXX</span>
<div class="box"><span>100*100px</span></div>
<style>
  .box{
   		width: 100px;
      height: 100px;
      background-color: pink;
  }
	.span3 {
      background-color: slategrey;
      border: 30px red solid;
    }
</style>
```



4.内联元素支持水平方向的外边距，不支持垂直方向的

​    水平方向 外边距实际大小相加

​    垂直方向没有实际效果

```html
<span class="span4">XXX</span>
<span class="span5">YYYY</span>  
<div class="box"></div>
<style>
  .box{
   		width: 100px;
      height: 100px;
      background-color: pink;
  }
	.span4{
      background-color: navajowhite;
      margin: 50px;
    }
  .span5{
      background-color: blue;
      margin: 50px;
    }
</style>
```



#### 2.5.6 盒模型相关属性

+ overflow
  设置元素如何处理溢出内容

  可选值

  - visible 默认值
  - hidden
  - scroll
  - auto

+ display
  设置元素的框模型
  可选值

  + block
  + inline-block
  + inline
  + none  元素不会在页面中显示（坑都没了）
  + table
  + flex
  + inline-flex

+ visibility
  设置元素的显示状态

  + visible  默认值
  + hidden  内容隐藏（坑还在）
  
+ border-radius

+ box-shadow

+ outline

+ text-shadow



### 2.6 background

#### 2.6.1 background-color

> 1. 可简写为 background
> 2. background-color不可继承
> 3. 默认值 transform
> 4. background-color：inherit指定背景颜色（从父元素继承）



#### 2.6.2 background-image

> 1. background-image:url()
> 2. 缩写 background:url()
> 3. 默认值none
> 4. inherit 指定背景图像应该从父元素继承
> 5. background-image属性不能继承
> 6. 可以放多字背景图，从左上角重复



技巧

```html
<h1><a>文字文字，关键字</a></h1>

  <style>
    logo a{
  			display:block;
  			background-image:url(...);
  			text-indent:-9999px;/*让文字内容消失在视野中（文字还存在在html文档中）				*/
			}
  </style>
    

```



#### 2.6.3  background-repeat

> 背景平铺
>
> 1. 默认 repeat-x ,repeat-y
> 2. background-repeat：no-repeat
> 3. background-repeat：repeat-x    | repeat-y
> 4. 符合简写  background：url(...) no-repeat



#### 2.6.4 background-position

> 设置背景图像的起始位置
>
> 1. 左上角为0 0
> 2. background-position:x y
> 3. left top right bottom center(只出现一个位置，效果是center)
> 4. x%,y% （如果值设定了一个值，其他值将是50%，默认是 0% 0%）
> 5. inherit 指定background-position设置应该从父元素继承
> 6. 可以缩写background





#### 2.6.5 background-attachment

> 背景关联
>
> 1. 【默认值】scroll 背景随着页面的滚动而滚动
> 2. fixed 背景固定，不会随着页面的滚动而滚动





#### 2.6.6 background-size

> 设置背景图片的尺寸大小
>
> 1. length （不允许负数）
>
> 2. percentage  百分比（不允许负数值）
>
> 3. auto  背景图片的真实大小
>
> 4. cover 将背景图片等比缩放（撑满盒子大小，背景图可能显示不全）
>
> 5. contain 将背景图 等比缩放到宽度或高度与容器的宽度和高度相等，背景图始终被包含在容器内（背景图始终完全显示）





#### 2.6.7 background-clip

设置背景显示的区域【ie8不兼容】

>  背景图片的裁剪
>
> 1. context-box;从内容区域之外开始裁剪（从内容区域之外裁剪，裁剪掉的是内边距和边框线）
> 2. padding-box;从内边距之外开始裁剪（不包括内边距，裁剪掉的是边框区域）
> 3. border-box      从边框线之外开始裁剪，不包括边框线



#### 2.6.8 background-origin

> 背景图的起始位置（原点）
>
> 1. context-box   从内容区域开始
> 2. border-box    从边框区域开始
> 3. padding-box   从内边距区域开始



#### 2.6.9 背景图的复合属性 background

> background : background-color background-img background-repeat background-posotion background-attachment



CSS3新增的属性

> background-size  不能简写
>
> background-clip  不能简写
>
> background-origin  不能简写



#### 2.6.10 雪碧图（css sprite）

**现象**：

按钮使用图片做背景，当按钮在link——>hover——>active三个状态时，图片会出现闪烁的情况

```css
btn:link{
  backrgound:url('xxx.jpg');
}
btn:hover{
  backrgound:url('yyy.jpg');
}
btn:active{
  backrgound:url('zzz.jpg');
}
```



**产生原因**：

浏览器加载资源的方式：懒加载！

浏览器先加载当前页面，后加载页面中引入的外部资源（css、js等），没有使用到的资源不加载（只有当使用到某个资源的时候才会去加载[请求+响应]）

所以，在请求和响应的过程中会有时间差，从而导致闪烁的出现。

所以说，从link到hover状态时，浏览器会再次向服务器发送请求，然后再响应给浏览器页面…



**解决方案**：

使用CSS Sprite(css精灵/雪碧图)的方式，让浏览器一上来就加载尽可能使用到的图片资源

然后使用背景定位的方式更改对应状态的图片。

```css
btn:link{
  backrgound:url('雪碧图.jpg');
}
btn:hover{
	background-position:-100px 0;
}
btn:active{
  background-position:-200px -300px;
}
```



CSS Sprite的优点：

1. 减少请求次数
2. 总占内存小于所有小图片的和



**雪碧图的制作**

​	腾讯前端团队： http://alloyteam.github.io/

​	

### 2.7 BFC



BFC(block fromat context)块级格式化环境[上下文]

定义： BFC 是元素的一个隐藏属性，一旦元素开启BFC，这个元素将拥有一个 **独立的布局区域**

特点： 

1. 开启BFC的元素的子元素的垂直外边距不会传递给它
2. 开启BFC的元素不会被浮动的元素覆盖
3. 开启BFC的元素可以包含浮动的元素



如何开启：

+ 设置元素浮动 float
+ 将元素设置为行内块  display:inline-block
+ 将元素的overflow的默认值修改为其他值（一般overflow:hidden）



一般使用 overflow:hidden 来开启元素的BFC







#### 2.7.1 内容溢出隐藏

```css
.box{
   /*固定显示区域为 250*30*/
  width:250px;
  height:30px;
  /*超出部分隐藏*/
  overflow:hidden;
}
```



#### 2.7.2 清除浮动带来的影响

```css
.warp{
  /* width:200px;
  height:200px; */
  border: 2px solid red;/*效果不生效*/
  /*注意：
    设置了父元素的宽高，不需要加overflow:hidden
    没有设置父元素的宽高，需要加   overflow:hidden
  */
  overflow: hidden;
}

.box1{
  width:50px;
  height:50px;
  background:green;
  float:left;
}
.box2{
  width:50px;
  height:50px;
  background:yellow;
  float:left;
}
```

#### 2.7.3 解决margin-top传递问题

```css

.outerBox{
  width:200px;
  height:200px;
  background:green;
  /*目的:内外盒子之间有10px的上内边距*/
  overflow: hidden;
}

.innerBox{
  width:50px;
  height:50px;
  background:aquamarine;
  /*目的:内外盒子之间有10px的上内边距*/
  margin-top: 10px;
}
```



### 2.8 float

float的值：`left`、`right`、`none`、`inherit(继承父元素的float的值)`

#### 2.8.1 设置了float元素的特点

> 1. 浮动元素在一行显示
>
> 2. 设置属性为left时，浮动元素会依次从父级盒子的左侧向右排布，right相反
>
> 3. 浮动元素自动具有块级元素的属性
>
> 4. 浮动元素脱离文档流（所以它下边的元素会上移）
>
> 5. 浮动的元素不会超过其上没有浮动的块元素
>
> 6. 浮动元素默认位置不会超过其上浮动的元素
>
> 7. 浮动元素内的子元素，不会继承浮动属性
>
> 8. 浮动元素不会覆盖文字（文字环绕）
>
>    



#### 2.8.2 文档流和脱离文档流

+ 行元素变块元素
+ 块元素宽高由内容决定，并且不会独占一行



#### 2.8.3 float的影响

【脱离文档流不识别高度（父元素不能识别设置了浮动的子元素的高度）】

+ 给父元素设置背景颜色不起作用
+ 给父元素设置border属性不起作用
+ 给父元素设置padding属性不起作用



【影响：造成高度塌陷】

高度塌陷，块元素的高度默认情况下是被子元素撑开的，
                如果子元素浮动，将会完全脱离文档流，脱离文档流子元素无法撑起父元素高度，
                将会导致父元素高度丢失，父元素一旦丢失页面的其他元素位置也会移动，导致布局的混乱



解决方式：

+ 开启父元素的BFC(overflow:hidden)

  + 设置父元素浮动（float:left|right）
  + 设置父元素为行内块（display:inline-block）
  + 设置父元素的溢出属性为非默认值（overflow:hidden|scorll|auto）

+ 使用clearfix

  + ```css
    clearfix::after,clearfix::before{
      content:'';
      display:block;
      clear:both;
      overflow:hidden;
    }
    ```

    









清浮动产生的影响

+ 方式一：给父元素设置高度`height`【不推荐】

+ 方式二：父元素设置 `overflow:hidden`

+ 方式三：浮动元素的父元素结束标签之前加一个具有块级元素特点的空标签，并给这个空标签元素设置样式属性 `clear:both`

  ```html
  <div class="warp">
  	<div class="leftBox"></div>
    <div class="rightBox"></div>
    <!--这个位置-->
    <div style="clear:both"></div>
  </div>
  ```

  

+ 方式四：clearfix 伪元素清除浮动

  ```html
  <div class="warp">
  	<div class="leftBox"></div>
    <div class="rightBox"></div>
    <!--这个位置会生成一个占位的 ：after的标签-->
    
  </div>
  
  <style>
    .warp:after{
      display:block;/*确保是块级元素*/display:table;
      clear:both;
      content:"";/*必须写：设置伪元素:befor和:after 天生自带的属性*/  
      
       /*比较齐全的写法*/
    		height:0;/*防止低版本浏览器中height:1px默认效果*/
    		font-size:0;
    		overflow:hidden;
    		visibility:hidden;/*让所有可见性的元素隐藏*/
    } 
  </style>
  ```

  固定代码

  ```css
  clearfix：after{
    display:block;
  	clear:both;
  	content:"";
  	height:0;
  	font-size:0;
  	overflow:hidden;
  	visibility:hidden;
  }
  /*兼容IE低版本hack写法*/
  clearfix{
    *zoom:1;/*css hack*/
  }
  ```

  哪里需要清浮动就往哪里的父元素增加这个样式类即可

  兼容IE低版本hack写法

  ```css
  clearfix{
    *zoom:1;/*css hack*/
  }
  ```







#### 2.8.4 `clear`的特点



clear原理：浏览器给设置了clear的元素加上了一个上外边框（margin-top=浮动元素的高度）

可选值

+ none[默认值]
+ left
+ right
+ both



设置了clear的元素所具备的特点

+ 元素是块级元素
+ 元素不能带有浮动属性
+ 元素必须放在最后一个浮动元素的后面
+ 用户是看不到这个元素的





### 2.9 定位`position`

取值：static[默认值]、relative、absolute、fixed



#### 2.9.1 `position:absolute`



`position : absolute`绝对定位的特点

+ 开启绝对定位的元素，会脱离文档流
+ 开启绝对定位的元素，会改变元素的性质（脱离文档流）
+ 开启绝对定位的元素，如果不设置偏移量，元素不发生变化
+ 开启绝对定位的元素，相对于离它最近的定位父级包含块元素定位
+ html是初始包含块
+ 开启绝对定位的元素，会提升元素的层级



**tips**

  >包含块：对于绝对定位的元素来说，包含块就是离他最近的开启了定位的元素

 

浏览器处理布局的等式

水平方向布局等式

> margin-left + border-left + padding-left + width +  padding-right  +  border-right + margin-right  =包含块的宽度

垂直方向布局等式

> left+… + width+…+right =包含块的宽度

绝对定位元素的水平方向布局等式

> margin-top+ border-top+ padding-top+ width + padding-bottom+ border-bottom+ margin-bottom =包含块的高度

绝对定位元素的垂直方向布局等式

> left+… + width+…+right =包含块的高度



其中可以设置为 auto的值： left  margin-left  width  margin-right  right

利用浏览器处理auto值的机制（浏览器自动调节左右外边距的机制）

可以实现水平 、垂直方向的居中效果

```css
/*常用代码片段*/
position:absolute;
left:0;
right:0;
top:0;
bottom:0;
margin:auto;/*默认为auto*/
```





#### 2.9.2 `position:relative`

`position:relative`相对定位的特点

+ 开启相对定位，元素不会发生任何变化
+ 开启相对定位，元素不会脱离文档流
+ 开启相对定位，元素是相对于元素本身在文档流中的位置定位的，可以设置四个方向的位移,元素原来的位置不会被占用（没有脱离文档流）
+ 开启相对定位，会使元素提升一个层级（z-index，遮盖其他元素）
+ 开启相对定位，不会改变元素的性质（行、块级不变）
+ 任何元素都可以设置相对定位属性





#### 2.9.3 `position:fixed`

 `position:fixed`固定定位的特点

> 1. 脱离文档流
> 2. 可以设置上下左右四个方位值
> 3. 参照物：整个浏览器窗口
> 4. 通过`z-index`改变层级





#### 2.9.4  `z-index`层级

 `z-index`属性的特点

**z-index属性有作用必须跟定位一起使用**

> 1. 默认是书写顺序在后的定位元素覆盖在顺序前的定位元素
>2. 可以使用z-index属性修改定位元素的层级关系
> 3. 所有定位元素的z-index默认值都是一样的
>4. z-index值支持负数，没有单位，默认值为0
> 5. 一般都是同级元素进行层级比较（ 父元素的层级再高，也不会盖住子元素）
>6. z-index属性不会继承







### 2.10 rgba和opacity

```css
/*设置当前元素box1的背景颜色透明度*/
.box1{
  /*...样式*/
  rgba（255,255,255,0.1）;
}

/*设置的是box2这个元素整体的透明度*/
.box2{
  /*...样式*/
  opacity:0.1;
}

```



### 2.11 display

display

指定元素所生产的框的类型

常用值

+ inline 行内元素

+ block 块元素

+ inline-block 行内块元素
  (既有行内元素的特点，不独占一行又有块元素的特点，可以设置宽高)

+ none 元素不在页面中显示

   







### 2.12 文档流

> 文档流是文档中可显示对象在排列时所占用的位置。

#### 2.12.1 块元素在文档流中的特点 

1. 自上向下进行排列（独占一行）
2. 默认宽度是父元素的宽度
3. 默认高度被内容撑开





#### 2.12.2 行内元素在文档流中的特点 

1. 自左向右水平排列，如果一行中不足以容纳所有的元素则切换到下一行继续自作向右水平排列（和我们书写习惯一样）
2. 默认高度和宽度都被内容撑开   



行元素的盒模型

+ 行内元素不支持设置宽度和高度  
+ 行内元素支持水平方向的内边距、边框、外边距。  
  + 可以设置垂直方向的内边距、边框、外边距，但是不会影响布局  



#### 2.12.3 脱离文档流

不具备标准文档流的特点

1. 默认宽高由内容决定
2. 块元素不会独占一行
3. 元素不会再在文档流中占据位置
4. 行内元素也可以脱离文档流，脱离文档流后和块级元素特点一样。











###  2.13 字体相关属性



+ 衬线字体（serif）

  + ```css
    font-family:serif;
    ```

+ 无衬线字体（sans-serif）

  + ```css
    font-family:sans-serif;
    ```

+ 等宽字体（monospace）

  + ```css
    font-family:monospace;
    ```

  + 

+ 草书字体（cursive）

  + ```css
    font-family:cursive;
    ```

  + 

+ 装饰字体（fantasy）

  + ```css
    font-family:fantasy;
    ```



一般使用

```css
/*可以同时指定多个字体*/
font-family:微软雅黑,楷体 ;
```





font-face的使用(外部字体的使用)

```html

<style>
  /*使用本地字体*/
  @font-face{
    /*font-family:'我使用的字体的别名（xxxooo.ttf）';*/
    font-family:'xxxooo'
      src:url('./font/xxxooo.ttf')
  }
  
  .box{
    /*...*/
    font-family:xxxooo;
  }
</style>
```





图标字体

来历：字体是矢量图，放大不会失真。

然后就…



font awesome-国外的

iconfont——–国内阿里



+ 行高：line-height

基线（base-line），文本显示默认在行高中居中

行高可以设置为像素，也可以设置为 字体 大小 的倍数 （默认行高是字体大小的 1.33倍）

```css
font-size:20px;
line-height:1.33;/*默认是 20*1.33px*/

/*行高像素设置*/
line-height:20px;
```

【tip】

> 行内元素的背景颜色始终为 行高的1，33倍。
>
> ```css
> /*通过修改行高，背景颜色依旧占据1.33倍的行高*/
> span{
>   font-size:50px;
>   background-color:red;
> 	line-height:1;
> }
> 
> 
> ```
>
> 



```css
/*font-weight:100-900;*/
/*
	font-weight:
默认值：normal-----相当于400
			bold------相当于700
*/
font-weight:bold;
```



```css
/*font-style*/
font-style:italic;
font-style:normal;
```



```css
/*font-variant  字体变形*/
font-variant :small-caps;/*小型大写字母*/

```



字体样式简写

```css
/*font:font-weight font-style font-variant font-size  font-family */
/*font:[加粗 斜体 变形] 大小/行高 字体族;*/

font :  bold 10px italic small-caps "楷体",;
```



### 2.14  文本属性



`text-aline`水平对齐对齐方式

取值

+ left-默认值
+ right
+ center
+ justify–两端对齐



`vertical-aline` 垂直对齐方式

+ baseline  默认值，和基线对齐（下基线之上写）
+ top  和父元素顶部对齐（上基线）
+ bottom 和父元素的底部对齐（下基线之下）
+ super
+ suber
+ middle  居中对齐
+ 10px|10%

使用场景

```html
<div>
  </img>
</div>
<style>
	/*图片默认按照字体的基线对齐*/
  div{
     font-size:0;/*消除基线*/
    /*弊端：写的字没了*/
  }
  
  /*常用*/
  img{
		/*设置图片的对齐方式*/
    vertical-aline:bottom;
  }
</style>

```





`text-decoration`

值

+ underline 默认值
+ none
+ overline
+ green wavy underline  绿色波浪线



`text-indent` 首行缩进

取值

+ 10px



`white-space` 如何处理空格

+ normal  默认值
+ nowrap  不换行
+ pre   保留文本格式



文本溢出处理方式

```css
white-space:nowrap;/*不换行*/
overflow:hidden;/*溢出隐藏*/
text-overflow:ellipsis;/*溢出部分显示为...*/

```

`letter-spacing` 两个字符之间的距离

+ letter-spacing ：10px;

`word-spacing` 两个单词之间的距离

+ word-spacing:2em;



## 3 实战

### 3.1 布局

子元素在父元素的位置是父元素的内容区
		子元素在父元素中的水平方向的布局，必须满足如下等式
        margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 父元素的width





在水平方向，有三个值可以设置auto
            分别是 margin-left width margin-right
            设置为auto以后，浏览器会自动计算该属性的值

+ 如果七个值的和相加不等于父元素的宽度，则属于过度约束，
          则浏览器会自动调整右外边距的值
+ 如果将margin-left 或 margin-right 的一侧设置为auto，
      则侧会设置尽量大的值
+ 如果left和right都设置auto，则会将两侧外边距设置相等的值，
          从而导致子元素在父元素中水平居中







#### 3.1.1 行布局(水平布局)



子元素在父元素的位置是父元素的内容区
        子元素在父元素中的水平方向的布局，必须满足如下等式
        margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 父元素的width

+ 在水平方向，有三个值可以设置auto
              分别是 margin-left width margin-right
              设置为auto以后，浏览器会自动计算该属性的值
+ 单一设置margin-right的值（不设置margin-left的值），margin-right不生效

具体规则

1. 如果七个值的和相加不等于父元素的宽度，则属于过度约束，
           则浏览器会自动调整右外边距的值     
2.   如果将margin-left 或 margin-right 的一侧设置为auto，
           则浏览器会设置尽量大的值     
3. 如果left和right都设置auto，则会将两侧外边距设置相等的值，
       从而导致子元素在父元素中水平居中



 



1. 水平居中布局效果

```html
<div class="container">内容内容</div>
<style>
	.container{
      margin: 0 auto;/*水平居中*/
      width: 1200px;
      height: 2500px;
      background: cyan;
    }
</style>
```



2. 水平居中并且自适应

```html
<div class="container">内容内容</div>
<style>
	.container{
      margin: 0 auto;
      width: 90%;/*自适应水平居中*/
      max-width: 1000px;
    
      height: 2500px;
      background: cyan;
    }
</style>
```



3. 水平垂直居中

```HTML
<div class="container">内容内容</div>
<style>
	 .container{
      width:1000px;
      height: 200px;
      background: cyan;

      /*使用绝对定位*/
      position: absolute;
      left: 50%;
      top: 50%;
      /*移动container盒子的，使其在居中的位置*/
      margin-top:-100px;
      margin-left: -500px;
    }
</style>
```



4. 行布局之固定宽度

```html
<header>头部</header>
<nav>导航</nav>
<section>内容</section>
<footer>脚部</footer>

 <style>
   body {
      margin: 0;
      padding: 0;
    }

    header {
      margin: 0 auto;
      width: 1000px;/*固定宽度*/
      height: 50px;
      background: darkblue;
    }

    nav {
      margin: 0 auto;
      width: 1000px;/* 固定宽度 */     
      height: 250px;
      background: greenyellow;
    }

    section {
      margin: 0 auto;
      width: 1000px;/*固定宽度*/
      height: 500px;
      background: sandybrown;
    }

    footer {
      margin: 0 auto;
      width: 1000px;/*固定宽度*/
      height: 150px;
      background: green;
    }
  </style>
```

5. 行布局之某部分自适应

```html
<header>头部</header>
<nav>导航</nav>
<section>内容</section>
<footer>脚部</footer>

 <style>
   ...
    nav {
      margin: 0 auto;
      /* width: 1000px;固定宽度 */
      /*固定宽度改为自适应宽度*/
      width: 100%;
      
      height: 250px;
      background: greenyellow;
    }

   ...
  </style>
```

6. 行布局之随屏幕滚动

```html
<header>头部</header>
<nav>导航</nav>
<section>内容</section>
<footer>脚部</footer>

 <style>
   header {
      margin: 0 auto;
      width: 1000px;/*固定宽度*/
      height: 50px;
      background: darkblue;
      
      position:fixed;  
   }
    
   ...
  </style>
```



####  3.1.2 列布局（垂直布局）



垂直方向参考公式（不强制满足）
           margin-top + border-top + padding-top + height + padding-bottom +border-bottom  + margin-bottom  = 父元素的高度

+ 如果不为父元素设定高度，父元素高度自适应子元素的高度

+ 如果指定父元素高度，指定多少就是多少，此时如果子元素内容超出父元素的高度，内容会溢出父元素（但溢出不会影响页面布局）

  + 对溢出的处理overflow

    取值：visiable(默认值),hidden， scroll,auto



1. 列布局之**定宽**两列布局

```html
<div class="container">
    <div class="leftBox">左侧</div>
    <div class="rightBox">右侧</div>
 </div>
<style>
 	 ...
    .leftBox{
      width: 600px;
      height: 666px;
      background: #666666;
      float: left;
    }
    .rightBox{
      width: 800px;
      height: 999px;
      background: greenyellow;
      float:right;
    }
  </style>
```



2. 列布局之**自适应**两列布局

```html
<div class="container">
    <div class="leftBox">左侧</div>
    <div class="rightBox">右侧</div>
 </div>
<style>
  	...
    .leftBox{
      /* width: 600px; */
      width: 40%;
      height: 666px;
      background: #666666;
      float: left;
    }
    .rightBox{
     width: 60%;;
      height: 999px;
      background: greenyellow;
      float:right;
    }
```





3. 列布局之三列**定宽**布局

```html
<div class="container">
    <div class="leftBox">左侧</div>
    <div class="centerBox">中</div>
    <div class="rightBox">右侧</div>
 </div>
 <style>
   ...

    .leftBox{
      /* width: 600px; */
      width: 400px;
      height: 666px;
      background: #666666;
      float: left;
    }

    .centerBox{
      width: 400px;
      height: 666px;
      background: #335555;
      float: left;
    }

    .rightBox{
      width: 400px;
      height: 999px;
      background: greenyellow;
      float:right;
    }
  </style>
```



4. 列布局之三列**自适应**布局

```html
<div class="container">
    <div class="leftBox">左侧</div>
    <div class="centerBox">中</div>
    <div class="rightBox">右侧</div>
 </div>
<style>
    ...

    .leftBox{
      /* width: 600px; */
      width: 30%;
      height: 666px;
      background: #666666;
      float: left;
    }

    .centerBox{
      width: 50%;
      height: 666px;
      background: #335555;
      float: left;
    }

    .rightBox{
      width: 20%;
      height: 999px;
      background: greenyellow;
      float:right;
    }
  </style>
```



### 3.2 箭头和小三角效果

```css
.box{
  width:10px;
  height:10px;
  
  /*设定边框*/
  border-left:2px solid #ddd;
  border-top:2px solid #ddd;
  
  /*旋转即可*/
  transform:rotate(45deg);
  
}


.triangle{
    width: 0;
    height: 0;
    border-width: 100px;
    border-style: solid;
    border-color: red green yellow paleturquoise;

    /*去掉不需要的边框*/
    border-color: red  transparent transparent transparent; 
  }
```



### 3.3 实现多个元素在一行显示

```css
/*
      面试题：如何让多个元素在一行显示

      1.用display:inline,将元素设置为行内元素，【但是设置宽高不起作用】
      2. 用display:inline-block可以让元素在一行显示，【但是会受空格和换行的影响，产生默认间距】（IE6以下不兼容  需要给设置display:inline-block 同时设置 *display:inline;*zoom:1;）
      3. 使用 浮动  

      解决之道
      1> 去掉空格和换行符，让标签都在一行 【但是代码书写好恶心】
      2> 给display:inline-block的 父元素 增加一个属性 font-size:0;【但是，这个属性有传递性，其子元素的字体需要重新设置】


    */
    .warp {
      font-size: 0;
    }

    .innerBox1 {
      width: 200px;
      height: 200px;
      background: #666;

      display: inline;
      font-size: 20px;

      /*IE低版本的兼容写法*/
      *display: inline;
      /* css hack *IE 浏览器可识别*/
      *zoom: 1;
      /* 触发css hack的layout*/
    }

    .innerBox2 {
      width: 200px;
      height: 200px;
      background: #336963;

      display: inline;
      font-size: 15px;

      /*IE低版本的兼容写法*/
      *display: inline;
      /* css hack *IE 浏览器可识别*/
      *zoom: 1;
      /* 触发css hack的layout*/ 
    }
```





###  3.4 文本出现省略号

#### 3.4.1 单行文本出现省略号...

```css
/*四个必要*/
h2{
  height:30px;
  
  width:200px;
  overflow:hidden;
  white-space:nowrap;/*强制不折行*/
  text-overflow:ellipsis;/*文本隐藏方式*/
}

```



#### 3.4.2 多行文本出现省略号...

```css
/**/
p{
  height:30px;
  width:200px;
  /*多行文本出现...的方式*/
  /*主要应用于手机移动端*/
  display: -webkit-box;/*弹性盒子模型*/
  -webkit-box-orient:vertical;/*规定元素的排列方式：垂直排列*/ /*去掉效果也生效*/
  -webkit-line-clamp:2;/* 文字的行数*/
  overflow: hidden;
}
```







### 3.5 如何让元素消失在视野中



#### 3.5.1 `transfrom:translate`位移

#### 3.5.2 `opacity:0`

[0~1]

#### 3.5.3 `display:none` 





#### 3.5.4 ` height:0`和`overflow:hidden`



#### 3.5.5 `line-height:0`和`overflow:hidden(前提是height:0)`



#### 3.5.6 `visibility:hidden`



#### 3.5.7 `margin或padding`距设置足够大









## 4 CSS语法





### 4.1 at-rule 规则

> at-rule由一个 @ 关键字和后续的一个区块组成，如果没有区块，则以分号结束

+ @charset 

  > charset用于提示CSS文件使用的字符编码方式，它如果被使用，必须出现在最前面
  >
  > 这个规则只在给出语 法解析阶段前使用，并不影响页面上的展示效果。
  >
  > ```css
  > @charset "utf-8";
  > ```
  >
  > 

+ @import 

  ```css
  @import "reset.css";
  @import url("base.css");
  ```

  

+ @media

  ```css
  @media print {
    body{ font-size:10px;}
  }
  ```

  

+ @page
  page用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它 周围的盒。

  ```css
  @page { 
    size: 8.5in 11in; margin: 10%;
  	@top-left { content: "Hamlet";} 
    @top-right { content: "Page " counter(page);} 
  }
  ```

  

+ counter-style
  counter-style产生一种数据，用于定义列表项的表现。

  ```css
  @counter-style triangle { 
    system: cyclic; 
    symbols: ‣; 
    suffix: " ";
  }
  ```

  

+ keyframes
  keyframes产生一种数据，用于定义动画关键帧。

  ```css
  @keyframes diagonal-slide {
  	from { 
      left: 0; 
      top: 0;
  	}
  	to { 
      left: 100px; 
      top: 100px;
  	} 
  }
  
  ```

  

+ fontface

  ```css
  @font-face { 
    font-family: Gentium; 		   		      src:url(http://example.com/fonts/Gentium.woff);
  }
  ```

  

+ supports

  support检查环境的特性，它与media比较类似

  

+ namespace

  用于跟XML命名空间配合的一个规则，表示内部的CSS选择器全都带上特定命名空间。

  

+ @viewport
  用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被html的meta代替。

+ 



### 4.2 qualified rule 规则

#### 4.2.1 选择器

#### 4.2.2 声明列表





