import React from 'react'
import { Link } from 'react-router-dom'

const LinkComponent = ({ title, href }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link mx-2" to={href} title={title}>{title}</Link>
    </li>
  )
}

export default LinkComponent