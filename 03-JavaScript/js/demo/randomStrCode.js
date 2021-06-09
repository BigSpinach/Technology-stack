/*
  参数：n，str
  n表示需要生成的随机字符串的长度
  str表示模板字符串
*/
function randomStrCode(n,str){
  //初始化n和str
  n=n||4;
  str=str||'0123456789qwertyuiopasdfghjklzxcvbnmQAZXSWEDCVFRTGBNHYUJMKIOLP';
  targetStr='';

  //循环，获取一个随机索引值，与目标字符串拼接  n为字符串长度条件
  for(let i=0;i<n;i++){
    let randomIndex = Math.floor((Math.random()*(str.length-1+0))-0);
    targetStr+=str[randomIndex];
  }
  return targetStr;
}

randomStrCode(2);

