(() => {
  let a, b;
  try {
    throw new Error();
  } catch (a) {
    (a = 1), (b = 2);
    console.log(a);
  }
  console.log(a, b);
})()