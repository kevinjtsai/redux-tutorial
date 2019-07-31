import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeClassName="selectedLink"
  >
    {children}
  </NavLink>
)

export default FilterLink