import React from 'react'
import { NavLink } from 'react-router-dom'
import IconFont from '@comps/IconFont'

interface AsideMenuProps {
  theme?: 'dark' | 'light';
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

const items: MenuItem[] = [
  { id: 'explore', label: '探索', icon: 'icon-tansuo1' },
  { id: 'overview', label: '概览', icon: 'icon-gailan1' },
  { id: 'predict', label: '应用开发', icon: 'icon-yingyongkaifa1' },
  { id: 'algo', label: '机器学习', icon: 'icon-jiqixuexi1' }
]

const AsideNav: React.FC<AsideMenuProps> = ({}) => {
  return <nav className='sp-aside-nav'>
    {
      items.map(({id, label, icon }) => <NavLink
        className={
          ({ isActive }) => ['sp-aside-nav-item', isActive ? 'active' : null].filter(Boolean).join(' ')
        }
        to={id}
        key={id}
      >
        <IconFont type={icon} /><span className='sp-aside-nav-label'>{label}</span>
      </NavLink>)
    }
  </nav>
}

export default AsideNav 
