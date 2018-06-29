import React from "react"
import Link from "gatsby-link"

const IndexPage = ({data}) => {
	console.log(data);
	return (
			<div className = "content">
				<h2>Welcome to netBloggen</h2>
				<strong>Recent Posts</strong>


				{data.allMarkdownRemark.edges.map(post => (
					<Link to={post.node.fields.slug}>
						<div>
							<h2>{post.node.frontmatter.title}</h2>
							<p>{post.node.frontmatter.description}</p>
						</div>
					</Link>
					))}
			</div>
	)
}

export const PaginatorQuery = graphql`
	query IndexQuery {
	  allMarkdownRemark(limit: 10){
	    edges{
	      node {
	        fields {
	          slug
	        }
	        frontmatter{
	          title
	          description
	        }
	      }
	    }
	  }
	}
`

export default IndexPage;