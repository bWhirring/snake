export function add(num) {
  return  {
    type: 'ADD',
    data: num,
  }
}

export function reduce(num) {
  return  {
    type: 'REDUCE',
    data: num,
  }
}

export function asyncAdd(num) {
  return (dispatch) => {
    timeout(num)
    .then(num => {
      dispatch(add(num))
    })
  }
}


function timeout(num) {
  return new Promise((resolve, reject) => {
    resolve(num);
  })
}
