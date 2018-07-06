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
			dataArray : this.props.data.allMarkdownRemark.edges,
			postsArray : [],
			actualPagePosts : [],
			page : 1
		}
	}

	divideDataArray = () => {
		//Divide the data in arrays of 10 posts and push them in an array of arrays
		//for easier pagination
		let dataArray = this.state.dataArray;
		let arrayOfArrays = [];
		let tempArray = [];

		for(let x = 0; x < dataArray.length; x++){
			tempArray.push(dataArray[x]);

			if(tempArray.length >= 10){
				arrayOfArrays.push(tempArray);
				tempArray = [];
			}
		}
		//In case the cycle didn't match the length we push one last time
		arrayOfArrays.push(tempArray);
		this.setState({
			postsArray:arrayOfArrays,
		});
	}

	setPostsOfTheCurrentPage = () => {
		this.setState({
			actualPagePosts : this.state.postsArray[this.state.page - 1] 
		});
	}

	handleClick = (direction) => {
		let newPage = direction == "next" ? this.state.page + 1 : this.state.page - 1;
		this.setState({
			page:newPage, 
		},() => this.setPostsOfTheCurrentPage() );
		
	}

	componentWillMount() {
		this.divideDataArray();
	}

	componentDidMount() {
		this.setPostsOfTheCurrentPage();
	}

	render(){
		return(
			<div className="content">
				<div>
					<button disabled={ this.state.page <= 1} onClick={() => this.handleClick('back')}>&larr;</button>
					<span>Page {this.state.page} of {Math.ceil(this.state.dataArray.length / 10)}</span>
					<button onClick={() => this.handleClick('next')} disabled={ this.state.page >= Math.ceil(this.state.dataArray.length / 10)}>&rarr;</button>
				</div>
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
					<span>Page {this.state.page} of {Math.ceil(this.state.dataArray.length / 10)}</span>
					<button onClick={() => this.handleClick('next')} disabled={ this.state.page >= Math.ceil(this.state.dataArray.length / 10)}>&rarr;</button>
				</div>
			</div>
		);
}
};