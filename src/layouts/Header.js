import React from 'react';
import Link from 'gatsby-link';
import Search from '../pages/search.js';

const Header = () => (
  <div
    className="header"
    style={{
      background: '#024153',
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

export default Header;