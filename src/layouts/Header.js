import React from 'react';
import Link from 'gatsby-link';
import Search from './search.js';

const Header = ({data}) => (
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
    <Search data={data}/>
  </div>
)

export const query = graphql`query
SearchIndexQuery {
    siteSearchIndex {
      index
    }
}`;


export default Header;