setTimeout(() => {
  console.log('timeout1')
  Promise.resolve(5).then(
    value => console.log('成功了5')
  )
})
setTimeout(() => {
  console.log('timeout2')
})

Promise.resolve(3).then(
  value => console.log('成功了3')
)
Promise.resolve(4).then(
  value => console.log('失败了4')
)