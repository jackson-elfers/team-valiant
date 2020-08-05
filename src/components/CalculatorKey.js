import React from 'react';

class CalculatorKey extends React.Component {
	render() {
	  const { onPress, className, ...props } = this.props
	  
	  return (
		<div onClick={onPress}>
		  <button className={`calculator-key ${className}`} {...props}/>
		</div>
	  )
	}
}

export default CalculatorKey;