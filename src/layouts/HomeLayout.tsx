import * as React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {css} from '@emotion/core'

import 'modern-normalize'
import '../styles/normalize'

import {LayoutRoot} from '../components'

interface QueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const root = css`
  background: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  align-items: center;
  justify-content: center;
`

const center = css`
  width: auto;
  max-width: 800px;
`

const HomeLayout: React.FC = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: QueryProps) => (
      <LayoutRoot css={root}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'description', content: data.site.siteMetadata.description},
            {name: 'keywords', content: data.site.siteMetadata.keywords},
          ]}
        />
        <div css={center}>{children}</div>
      </LayoutRoot>
    )}
  />
)

export {HomeLayout}
