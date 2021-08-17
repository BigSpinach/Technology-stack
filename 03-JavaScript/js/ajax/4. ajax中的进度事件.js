//4.1 load 事 件
/*
只 要 浏 览 器 接 收 到 服 务 器 的 响 应， 不 管 其 状 态 如 何， 都 会 触 发 load 事 件。 而 这 意 味 着 你 必 须 要 检 查 status 属 性， 才 能 确 定 数 据 是 否 真 的 已 经 可 用 了。
 */
var xhr = createXHR();
xhr.onload = function () {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText);
  } else {
    alert(" Request was unsuccessful: " + xhr.status);
  }
};

xhr.open(" get", "altevents.php", true);
xhr.send(null);


//4.2 progress事件
/*
 **progress事件**会 在 浏 览 器 接 收 新 数 据 期 间 `周 期 性` 地 触 发。 而 onprogress 事 件 处 理 程 序 会 接 收 到 一 个 event 对 象， 其 target 属 性 是 XHR 对 象， 但 包 含 着 三 个 额 外 的 属 性： `lengthComputable ``、position` 和 `totalSize `。其 中，`lengthComputable` 是 一 个 表 示 进 度 信 息 是 否 可 用 的 布 尔 值， `position` 表 示 已 经 接 收 的 字 节 数， `totalSize `表 示 根 据 Content-Length 响 应 头 部 确 定 的 预 期 字 节 数。 有 了 这 些 信 息， 我 们 就 可 以 为 用 户 创 建 一 个 进 度 指 示 器 了。
 */
var xhr = new XMLHttpRequest();
xhr.onload = function (event) {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText);
  } else {
    alert(
      " Request was unsuccessful: " + xhr.status);
  }
};
xhr.onprogress = function (event) {
  var divStatus = document.getElementById(" status");
  if (event.lengthComputable) {
    divStatus.innerHTML = "Received " + event.position + " of " + event.totalSize + " 		 bytes";
  }
};
xhr.open(" get", "altevents.php", true);
xhr.send(null);

