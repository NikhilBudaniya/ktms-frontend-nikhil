import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
    {user.type==="student"&&<div>
      Hii {user.name}
      Total Calories Consumption: 50kCal
    </div>}
    
    {user.type==="vendor"&&<div>
      Hii {user.name}
    </div>}
    
    </div>
  )
}

export default Home