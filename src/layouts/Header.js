import React from 'react';
import Link from 'gatsby-link';
import Search from '../pages/search.js';

const Header = () => (
  <div
    className="header"
    style={{
      background: '#172945',
    }}
  >
    <div
      style={{
        marginBottom: '0',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 0',
      }}
    >
      <h1 className="brand" style={{ margin: 0 }}>
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
      
        
      <div>
        <Link className="search" to="/search/">Search</Link>
      </div>
    </div>
  </div>
)

export default Header;