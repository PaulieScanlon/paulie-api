import React from 'react'
import { Link } from 'gatsby'

import Logo from './logo'
import Icon from './icon'

const Header = () => {
  return (
    <header>
      <Logo />

      <Link to="/about" className="nav">
        About
      </Link>
      <Link
        href="https://github.com/PaulieScanlon/paulie-api"
        target="_blank"
        rel="noopener"
        sx={{
          color: 'text',
        }}
      >
        <Icon path="github" sx={{ width: '24px', height: '24px' }} />
      </Link>
    </header>
  )
}

export default Header
