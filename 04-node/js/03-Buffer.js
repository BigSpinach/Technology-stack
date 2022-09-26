//Buffer
//console.dir(Buffer);
/**
[Function: Buffer] {
  poolSize: 8192,
  from: [Function: from],
  of: [Function: of],
  alloc: [Function: alloc],
  allocUnsafe: [Function: allocUnsafe],
  allocUnsafeSlow: [Function: allocUnsafeSlow],
  isBuffer: [Function: isBuffer],
  compare: [Function: compare],
  isEncoding: [Function: isEncoding],
  concat: [Function: concat],
  byteLength: [Function: byteLength],
  [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
}
 * 
 */

//buffer干啥用的？缓冲器，临时存储器，直接在内存中开辟的空间
//使得数据可以与计算机硬件直接交流
//以达到操作文件的（即将文件转为二进制数据）的目的。


//创建buffer实例的方式（4种）
//

//1. new Buffer(8);  // 在堆内存中开辟一块空闲的内存，并格式化这块堆内存区域
//2. Buffer.alloc(8); // 在堆内存中只找一块空闲的堆内存，（之前就格式化好的）
//3. Buffer.allocUnsafe(8) // 在堆内存中开辟一块空闲的堆内存（无所谓之前存的啥）
//4. Buffer.allocUnsafeSlow( size ) //分配给定大小的新缓冲区实例，但不对其进行初始化
let buffer1 = new Buffer(10);
let buffer2 =Buffer.alloc(10);
let buffer3 =  Buffer.allocUnsafe(10);
let buffer4 = Buffer.allocUnsafeSlow(10);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);
console.log(buffer4);
/*
* 1.输出的Buffer为什么不是二进制？ ----- 输出的是16进制，但是存储的是二进制吗，【输出的时候会自动转16进制】调用log方法的时候会自动转成16进制
//为啥采用16进制，因为16进制比2进制短，方便查看
//为什么不是32 或者 64进制呢？  目前最大使用数据也就到16进制（Unicode编码（十六进制）），已经可以表示所有的字符了。
    就好比 log({})会自动转成 log({}.toString()) 一样。
      log方法的机制如此
* 2.输出的Buffer不为空？ ----- 在堆里开辟空间，可能残留着别人用过的数据，所以allocUnsafe性能高（也就是创建速度叫其他的快一些）
* */


//将【数据】存储到 buffer实例中
// Buffer.from('我有4只猫！');
//由于【数据】是多种类型的，所以Buffer.form(xxx) 默认返回的都是16进制的数据
//为啥是16进制呢，底层就那么设置的，别问了。
let buffer5 = Buffer.from('我有4只猫！');
console.log(buffer5);//<Buffer e6 88 91 e6 9c 89 34 e5 8f aa e7 8c ab ef bc 81>
console.log(buffer5.toString());//我有4只猫！



//Buffer的size指的是什么？  size指的是1byte
let buf = new Buffer(10)
console.log(buf)//<Buffer 00 00 00 00 00 00 00 00 00 00>

let buf2 = new Buffer(1)
console.log(buf2)//<Buffer 00>
console.log(buf2.length);//1
console.log('𠮷'.length);//2  在浏览器环境的v8引擎环境下，'𠮷'.length=3
//给只有一个byte的buf2缓存器存放超过一个字节的字符，超出一个字节的部分会被舍弃
buf2.fill('𠮷');
console.log(buf2);//<Buffer f0>
console.log(buf2.toString())//�




let buf3=Buffer.alloc(1);
buf3.fill('𠮷');
console.log(buf3)//<Buffer f0 a0 ae>
console.dir(buf3.toString())//�


let buf_size3=Buffer.alloc(3);
buf_size3.fill('𠮷');
console.log(buf_size3)//<Buffer f0 a0 ae>
console.dir(buf_size3.toString())//

