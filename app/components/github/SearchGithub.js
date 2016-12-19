import React from 'react'
import Router from 'react-router'
import HashHistory from 'react-router/lib/hashHistory'

class SearchGithub extends React.Component{
	getRef(ref) {
		this.usernameRef = ref;
		console.log("this.usernameRef" + this.usernameRef);
	}
	handleSubmit(){
		const username = this.usernameRef.value;
		this.usernameRef.value = "";
		HashHistory.push("/profile/" + username);
	}
	render() {
		return (
			<div className="col-sm-12">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref={this.getRef.bind(this)} />
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary"> Search Github
					</button>
					</div>
				</form>
			</div>		
		)
	}
};

export default SearchGithub;