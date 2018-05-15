import React from 'react'
import { connect } from 'react-redux'

import { add, reduce, asyncAdd } from '../actions/countActions'

@connect((state) => {
  const { count } = state;
  return {
    count
  }
}, (dispatch) => {
  return {
    add: (count) => dispatch(add(count)),
    reduce: (count) => dispatch(reduce(count)),
    asyncAdd: (count) => dispatch(asyncAdd(count)),
  }
})
export default class Count extends React.PureComponent {
  add = (count) => {
    this.props.add(count)
  }
  reduce = (count) => {
    this.props.reduce(count)
  }
  asyncAdd = (count) => {
    this.props.asyncAdd(count)
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        { count }
        <button onClick={() => this.add(count)}>ADD</button>
        <button onClick={() => this.reduce(count)}>REDUCE</button>
        <button onClick={() => this.asyncAdd(count)}>asyncADD</button>
      </div>
    )
  }
}
