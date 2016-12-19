import React from 'react'
import Router from 'react-router'
import Repos from './github/Repos'
import UserProfile from './github/UserProfile'
import Notes from './notes/Notes'
import FBApp from '../components/Firebase'
import ReactFireMixin from 'reactfire'
import helpers from './utils/helpers'


var Profile = React.createClass ({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return {
			notes: ["2","3"],
			bio: {
				name: "Hong Ding"
			},
			repos: ['a','b','c']
		}
	},
	componentDidMount: function () {
  		this.init(this.props.params.username);
	},
	componentWillUnmount: function() {
		this.unbind('notes');
	},
	componentWillReceiveProps: function (nextProps) {
		this.unbind('notes');
		this.init(nextProps.params.username);
	},
	init: function(username) {
		this.Ref = FBApp.database().ref(username); 
		this.bindAsArray(this.Ref, 'notes');

		helpers.getGithubInfo(username)
			.then(function(data){

				this.setState({
					bio: data.bio,
					repos: data.repos
				})
				console.log(data);
			}.bind(this))
	},
	handleAddNote: function(newNote) {
		//update firebase, with new notes
		this.Ref.child(this.state.notes.length).set(newNote);
	},
	render: function() {
		console.log(this.state.notes);
		return (
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio}/>
				</div>
				<div className="col-md-4">
					<Repos username={this.props.params.username} repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
					<Notes 
						username={this.props.params.username} notes={this.state.notes} addNote={this.handleAddNote}/>
				</div>
			</div>
		)
	}
})

export default Profile;
