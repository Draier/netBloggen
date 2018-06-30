import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css';
import icon from './icon.png'

const Header = () => (
  <div
    className="header"
    style={{
      background: '#047797',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          netBloggen
        </Link>
      </h1>
    </div>
  </div>
)

const Footer = () => (
<div
    className="footer"
    style={{
      background: '#047797',
    }}
  >
  <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
   <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          netBloggen
        </Link>
      </h1>
    </div>
</div>

)

const TemplateWrapper = ({children}) => (
    <div className="container">
      <Helmet
        title="netBloggen | Home"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[{
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: `${icon}`
        }]}
      />
      <Header />
      <div className="sidebar">
      SIDEBAR
      </div>
        {children()}
      <Footer/>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper