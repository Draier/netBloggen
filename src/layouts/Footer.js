import React from 'react';
import Link from 'gatsby-link';


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
        paddingTop : '0.7rem',
        padding: '0.7rem 0 1rem 0',
      }}
    >
    <div className="search">
        
    </div> 
   <h1 style={{ 
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
</div>

)

export default Footer;