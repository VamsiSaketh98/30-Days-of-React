import React from 'react'

const TotalAmount = ({total}) => {
  return (
    <div className='totol'>
        <h3>
            Total Amount: ${total.toFixed(2)}
        </h3>
    </div>
  )
}

export default TotalAmount;