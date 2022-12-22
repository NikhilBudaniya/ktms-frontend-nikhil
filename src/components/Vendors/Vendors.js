import React from 'react'
import { useSelector } from 'react-redux'

const Vendors = () => {
  const { vendor } = useSelector((state) => state.user);
  return (
    <div>Vendors</div>
  )
}

export default Vendors