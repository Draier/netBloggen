import React from 'react';
import Helmet from 'react-helmet';
import {format} from 'date-fns';
import './BlogPost.css';

export default function Template({data}) {
	const {markdownRemark : post} = data;
	return (
		<div className="content">
			<Helmet
		        title={post.frontmatter.title + " | netBloggen"}
		        meta={[
		          { name: 'description', content: 'Sample' },
		          { name: 'keywords', content: 'sample, blog, blogpost' },
		        ]}
		      />
		  <div className="thumb-container">
		  	{post.frontmatter.thumbnail ? (<img 
		  		className="thumbnail-in-post" 
		  		src={post.frontmatter.thumbnail} 
		  		alt="placeholder"/>) : (<div></div>)}
		  </div>
			<div className="blog-post">
				<h1 id="blog-title">{post.frontmatter.title}</h1>
				<p id="subtitle">{format(post.frontmatter.date, "MMM 	D[,] YYYY")}</p>
				<div className="Blog-Body" dangerouslySetInnerHTML={{__html: post.html}} />
				<div>{post.frontmatter.tags.join(', ')}</div>
			</div>
		</div>
		)
}

export const postQuery = graphql`
	query BlogPostByPath($path : String!) {
		markdownRemark(fields : {slug : { eq : $path }}) {
			html
			frontmatter {
				title
				description
				date
				tags
				thumbnail
			}
		}
	}
`