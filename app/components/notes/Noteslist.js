import React from 'react'

class NotesList extends React.Component {
	render() {	
		return (
			<ul className="list-group">
				{this.props.notes.map((note,index) => {
					return (
						<li className="list-group-item" key={index}>{note['.key']}, {note['.value']}</li>
					)
				})}
			</ul>
		)
	}
}

export default NotesList;