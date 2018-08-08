import React, {Component} from 'react';
import Link from "gatsby-link"
import Helmet from 'react-helmet';
import {Index} from 'elasticlunr';
import './search.css'


export const pageQuery  = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
}`;


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ``,
            results: [],
        };
    }

    render() {
        console.log(this.props)
        return (   
            <div className="content">
                <Helmet
                    title={"netBloggen | Search"}
                    meta={[
                      { name: 'description', content: 'Search Page' },
                      { name: 'keywords', content: 'search, blog' },
                    ]}
                />
                <div className="search-bar">
                    <input placeholder="Enter your search term here" type="text" value={this.state.query} onChange={this.search}/>
                </div>
                <ul>
                    {this.state.results.map(post=>(
                    <div key={post.link} className="Post">  
                        {post.thumbnail ? (<img 
                            className="thumbnail" 
                            src={post.thumbnail} 
                            alt="placeholder"
                        />) : (<div></div>)}
                        <Link to={post.link}>
                            <h1 className="has-text-left Post-title">{post.title}</h1>
                        </Link>
                            <p className="Post-desc">
                            {post.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum sunt magni illo dignissimos magnam delectus itaque earum sit dolorum hic, error ex? Sunt, dicta. Perspiciatis sunt provident voluptates, blanditiis.</p>
                            <Link to={post.link}>
                                <p className="readmore">Read More...</p>
                            </Link>
                    </div>
                    ))}
                </ul>
            </div>
        );
    }

    getOrCreateIndex = () => this.index
        ? this.index
        // Create an elastic lunr index and hydrate with graphql query results
        : Index.load(this.props.data.siteSearchIndex.index);

    search = (evt) => {
        const query = evt.target.value;
        this.index = this.getOrCreateIndex();
        this.setState({
            query,
            // Query the index with search string to get an [] of IDs
            results: this.index.search(query)
                // Map over each ID and return the full document
                .map(({
                ref,
                }) => this.index.documentStore.getDoc(ref)),
        });
    }
}