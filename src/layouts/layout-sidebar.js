import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './Header.js'
import Footer from './Footer.js'
import Sidebar from './Sidebar.js'
import './index.css';
import icon from './icon.png'

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
        {children()}
      <Sidebar />
      <Footer/>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
