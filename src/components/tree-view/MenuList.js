import React from 'react'
import MenuItem from './MenuItem';
import './style.css'

const MenuList = ({list = []}) => {
  return (
    <ul className='menu-list-container'>
        {
            list && list.length !== 0 ? 
            list.map(listItem => <MenuItem item={listItem} />)
            : null
        }
    </ul>
  )
}

export default MenuList