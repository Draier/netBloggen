import React from 'react';
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import icon from './icon.png';
import {IoLogoTwitter, IoLogoGithub, IoMdDesktop} from 'react-icons/io'

const Footer = () => (
<div
    className="footer"
    style={{
      background: '#172945',
    }}
  >
  <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop : '0.8rem',
        padding: '0.7rem 0 1rem 0',
      }}
    >
    <nav className="search">
        <ul className="social-container">
          <li><a className="io-cont" href="https://twitter.com/draier_wdv"><IoLogoTwitter/></a></li>
          <li><a className="io-cont" href="https://github.com/Draier/"><IoLogoGithub/></a></li>
          <li><a className="io-cont" href="https://draier.me"><IoMdDesktop/></a></li>
        </ul>
    </nav> 
   <h1 className="brand" style={{ 
        margin: 0 }}>
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
        script={[
          {
            src: 'https://unpkg.com/ionicons@4.3.0/dist/ionicons.js'
          }]}
      />
</div>

)

export default Footer;