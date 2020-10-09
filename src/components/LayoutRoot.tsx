import * as React from 'react'
import {Global, css} from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'
import Helmet from 'react-helmet'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({children, className}) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export {LayoutRoot}
