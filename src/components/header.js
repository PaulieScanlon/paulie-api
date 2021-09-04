import React from 'react'
import { Container, Flex, Link } from 'theme-ui'

import Logo from './logo'
import Icon from './icon'

const Header = () => {
  return (
    <Container>
      <Flex as="header" variant="styles.header">
        <Logo />
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
      </Flex>
    </Container>
  )
}

export default Header
