function sendAjax(url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.response);
        else reject('请求出错了');

      }
    };
    //url需要拼接成urlencoded【也叫？传参】
    let str = '';
    for (let key in data) {
      str += `${key}=${data[key]}&`;
    }
    str = str.slice(0, -1);
    xhr.open('GET', url + '?' + str);
    xhr.responseType = 'json'
    xhr.send();
  });
}

sendAjax('https://api.apiopen.top/api/getHaoKanVideo?', {
    page: 2,
    size: 10
  })
  .then(
    value => {
      console.log('第1次请求成功的结果：', value);
      return sendAjax('https://api.apiopen.top/api/getHaoKanVideo?', {
        page: 2,
        size: 10
      })
    },
    reason => {
      console.log(reason);
    }
  )
  .then(
    value => {
      console.log('第2次请求成功的结果：', value);
      return sendAjax('https://api.apiopen.top/api/getHaoKanVideo?', {
        page: 2,
        size: 10
      })
    },
    reason => {
      console.log(reason);
    }
  )
  .then(
    value => {
      console.log('第3次请求成功的结果：', value);
      return sendAjax('https://api.apiopen.top/api/getHaoKanVideo?', {
        page: 2,
        size: 10
      })
    },
    reason => {
      console.log(reason);
    }

  )