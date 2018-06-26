import React from "react"
import Link from "gatsby-link"

const IndexPage = ({data}) => {
	console.log(data);
	return (
		<div>
			<h1>Welcome to this blog</h1>
			<div>
				{data.allMarkdownRemark.edges.map(post => (
					<Link to={post.node.fields.slug}>
						<div>
							<h2>{post.node.frontmatter.title}</h2>
							<p>{post.node.frontmatter.description}</p>
						</div>
					</Link>
					))}
			</div>
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