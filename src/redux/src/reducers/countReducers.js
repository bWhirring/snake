const data = 1

export function count(state = data, action) {
  switch (action.type) {
    case 'ADD':
      return data + action.data
      break;
    case 'REDUCE':
      return action.data - data;
      break;
    default:
      return state;
  }
}
