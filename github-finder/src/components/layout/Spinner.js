import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () =>
    <Fragment>
      <img src={spinner} style={spinnerStyle} alt="loading..."/>
    </Fragment>

export default Spinner;

const spinnerStyle={
  width: '200px',
  margin:'auto',
  display:'block'
}