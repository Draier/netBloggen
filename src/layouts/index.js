import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header.js'
import Footer from './Footer.js'
import './index.css';

const TemplateWrapper = ({children}) => (
    <div className="container">
      <Header />
        {children()}
      <Footer/>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper