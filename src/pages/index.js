import React from "react"
import Link from "gatsby-link"
import './index.css'

const IndexPage = ({data}) => {
	console.log(data);
	return (
			<div className = "content">
				{data.allMarkdownRemark.edges.map(post => (
					<div className="Post">
					<img className="thumbnail" src="https://cdn-images-1.medium.com/fit/t/1600/480/1*QO0sTki4wLIb9eUw-lCSZg.png" alt="placeholder"/>
						<Link to={post.node.fields.slug}>
							<h1 className="has-text-left Post-title">{post.node.frontmatter.title}</h1>
						</Link>
							<p className="Post-desc">
							{post.node.frontmatter.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum sunt magni illo dignissimos magnam delectus itaque earum sit dolorum hic, error ex? Sunt, dicta. Perspiciatis sunt provident voluptates, blanditiis.</p>
							<Link to={post.node.fields.slug}>
								<p className="readmore">Read More...</p>
							</Link>
					</div>
					))}
			</div>
	)
}

export const PaginatorQuery = graphql`
	query IndexQuery {
	  allMarkdownRemark(
	  	limit: 10
			sort: { fields: [frontmatter___date], order: DESC}
	  	){
	    edges{
	      node {
	        fields {
	          slug
	        }
	        frontmatter{
	          title
	          description
	          date
	        }
	      }
	    }
	  }
	}
`

export default IndexPage;