# HTML

## 1. 简介

### 1.1 由来

> HTML的英文全称是 Hyper Text Markup Language，即超文本标记语言。
>
> `1990`由Web的发明者 Tim Berners-Lee和同事 Daniel W. Connolly创立
>
> 万维网--超文本标记语言（英文缩写：HTML）是为“[网页](https://baike.baidu.com/item/网页)创建和其它可在[网页浏览器](https://baike.baidu.com/item/网页浏览器)中看到的信息”设计的一种[标记语言](https://baike.baidu.com/item/标记语言)。

### 1.2.定义

> 超文本标记语言是[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言)下的一个应用，也是一种规范，一种[标准](https://baike.baidu.com/item/标准)，它通过标记符号来标记要显示的网页中的各个部分。



## 2. HTML版本

HTML历史上有如下版本： [5] 

​	①HTML 1.0：在1993年6月作为互联网工程工作小组(IETF)工作草案发布。 [5] 

​	②HTML 2.0：1995年1 1月作为RFC 1866发布，于2000年6月发布之后被宣布已经过时。 [5] 

​	③HTML 3.2：1997年1月14日，W3C推荐标准。 [5] 

​	④HTML 4.0：1997年12月18日，W3C推荐标准。 [5] 

​	⑤HTML 4.01（微小改进）：1999年12月24日，W3C推荐标准。 [5] 

​	⑥[HTML 5](https://baike.baidu.com/item/HTML 5/8762673)：HTML5是公认的下一代Web语言，极大地提升了Web在富媒体、富内容和富应用等方面的能力，被喻为终将改变移动互联网的重要推手。Internet Explorer 8及以前的版本不支持。 [6] 







## 3.特点

1. 简易（版本向后兼容）
2. 可扩展（）
3. 平台无关（系统无关）
4. 通用（任意设备都可编辑查看）





## 4.编辑方式

### 4.1 编辑

> HTML其实是文本，它需要浏览器的解释，它的`编辑器`大体可以分为以下几种：

1. 基本编辑器（文本编辑器、写字板、world）,
   手动修改后缀名`.html`
2. Vscode、Sublime、WebStorm...
   
3. 所见即所得 `Dreamweaver`等软件...



### 4.2 字符集

常见字符以及特殊字符（字符实体）

```txt
//字符代码以“&”符开始，以分号";"结束，其间是字符名，如&reg;。
&gt;
&lt;
&nbsp;
...
```



### 4.3 数据类型

> 超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括[ID](https://baike.baidu.com/item/ID)、名称、[URI](https://baike.baidu.com/item/URI)、[数字](https://baike.baidu.com/item/数字)、长度单位、[语言](https://baike.baidu.com/item/语言)、媒体描述符、[颜色](https://baike.baidu.com/item/颜色)、字符编码、[日期](https://baike.baidu.com/item/日期)和时间等。所有这些数据类型都是专业的字符数据。



## 4.4 基础语法



#### 4.4.1 标签（元素）

​		

成对出现（有例外）
		标签名忽略大小写
		必须使用半角字符

#### 4.4.2 属性

一个标签可以拥有多个属性，属性与属性之间顺序不限，空格隔开 
属性要写在开始标签中

```html
<h1 color="red">红色字体属性</h1>
```



#### 4.4.3 常用标签

+ h1~h6
+ p
+ br
+ hr
+ ...

#### 4.4.4 HTML实体

```
语法 &实体名称;
```









## 5.整体结构

> 标准的超文本标记语言文件都具有一个基本的整体结构，标记一般都是成对出现（部分标记除外例如：<br/><img/>），即超文本标记语言文件的开头与结尾标志和超文本标记语言的头部与实体两大部分。有三个双标记符用于页面整体结构的确认。
>
> 标记符<html>，说明该文件是用超文本标记语言来描述的，它是文件的开头;而</html>，则表示该文件的结尾，它们是超文本标记语言文件的开始标记和结尾标记。



### 5.1 头部

<head></head>

HTML中head元素

```
<head>
	<!--定义了文档的信息-->
	<title>文档的标题</title>
	<base>页面链接标签的默认链接地址</base>
	<link rel="" href="" type="">
	<meta>
	<script></scrpit>
	<style></style>
</head>
	
```





## 6.相关要求

约定（默认要求）

1.  `.html（或者.htm）`
2. 超文本标记语言源程序为文本文件，其列宽可不受限制
   空格或回车浏览器一般会忽略，如需使用需要使用`HTML实体`
   文件路径名 使用 `/` 或 `""` 或`()`
3. 标记符中的标记元素用尖括号括起来，带斜杠的元素表示该标记说明结束
   标记元素忽略大小写，即其作用相同
   `HTML实体`区分大小写，必须使用小写（例如`&nbsp;`）
   标记元素具有属性说明(属性次序不限，空格隔开)
   一个标记元素的内容可以写成多行
4. HTML语法使用半角符号（一个字符）
5. 注释`<!--"号开始，由符号”-->`,可以出现在HTML文档任意位置





## 7. 标签

### 7.1 `mate`

作用：服务于浏览器，用户不可见

常用属性

+ name
+ content
+ http-equiv
+ charset
+ ...

 ### 7.2 `img`

+ src
+ alt
+ width
+ height
  宽度和高度如果只修改一个，则另一个会等比例缩放

### 7.3 `iframe`

> 内联框架 iframe，用来引入一个外部的网页(开发中不推荐使用)

### 7.4 video & audio  & embed

```html
<audio control>
  <!--下边文字仅在媒体文件不能识别的时候显示在页面中-->
  对不起，你的浏览器不支持该标签！
  <source src="../haha.mp3">
   <source src="../haha.ogg">
   <!--兼容IE8等老版本浏览器-->
  <embed src="" type="audio/mp3"></embed>
</audio>
```





+ src
+ controls(没有属性值)
+ autoplay
+ loop
+ preload



```
<embed src="" type="audio/mp3"></embed>
<embed src="src/video.mp4" type="video/mp4" 
```





### 7.5 `a`

```html
<a href="www.baidu.com" target="_blank">去百度</a>

<a href='#top1' >跳转到id=top1的位置</a>

 
```

