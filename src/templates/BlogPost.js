import React from 'react';
import Helmet from 'react-helmet';
import './BlogPost.css'

export default function Template({data}) {
	const {markdownRemark : post} = data;

	return (
		<div className="content blog-post">
			<Helmet
        title={"netBloggen | " + post.frontmatter.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <img className="thumbnail" src="https://cdn-images-1.medium.com/fit/t/1600/480/1*QO0sTki4wLIb9eUw-lCSZg.png" alt="placeholder"/>
			<h1>{post.frontmatter.title}</h1>
			<p>{post.frontmatter.description}</p>
			<p>Published {post.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{__html: post.html}} />
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
			}
		}
	}
`