import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import routes from './config/routes'
import HashHistory from 'react-router/lib/hashHistory'

ReactDOM.render (
	<Router history={HashHistory}>{routes}</Router>,
	document.getElementById('app')
)