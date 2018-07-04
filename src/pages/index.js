import React from "react"
import Link from "gatsby-link"
import {format} from 'date-fns'
import './index.css'

export const PaginatorQuery = graphql`
	query IndexQuery {
	  allMarkdownRemark(
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
	          thumbnail
	        }
	      }
	    }
	  }
	}
`

export default class IndexPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			postsArray : this.props.data.allMarkdownRemark.edges,
			actualPagePosts : [],
			page : 1
		}
	}

	limitPostArray = () => {
		let tempArray = [];
		let arrayToBeLimited = this.state.postsArray;
		for(let x = 0; x < this.state.page * 10; x++){
			if(arrayToBeLimited[x])
				tempArray.push(arrayToBeLimited[x]);
		}
		this.setState({
			actualPagePosts : tempArray 
		});
	}

	handleClick = (direction) => {
		let newPage = direction == "next" ? this.state.page + 1 : this.state.page - 1;
		this.setState({
			page:newPage, 
		});
	}

	render(){
		this.limitPostArray();
		return(
			<div className="content">
				{this.state.actualPagePosts.map(post=>(
					<div key={post.node.fields.slug} className="Post">	
						<img 
							className="thumbnail" 
							src={post.node.frontmatter.thumbnail ?  post.node.frontmatter.thumbnail : "https://cdn-images-1.medium.com/fit/t/1600/480/1*QO0sTki4wLIb9eUw-lCSZg.png"} 
							alt="placeholder"
						/>
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
				<div>
					<button disabled={ this.state.page <= 1} onClick={() => this.handleClick('back')}>&larr;</button>
					<span>Page {this.state.page} of {Math.ceil(this.state.postsArray.length / 10)}</span>
					<button onClick={() => this.handleClick('next')} disabled={ this.state.page >= Math.ceil(this.state.postsArray.length / 10)}>&rarr;</button>
				</div>
			</div>
		)
}
};