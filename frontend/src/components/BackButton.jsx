import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({location}) => {
  return (
    <Link  className='btn btn-dark my-3' to={location}>
     Back
   </Link>
  )
}

export default BackButton
