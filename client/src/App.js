import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class Fetcher extends Component {
	constructor() {
		super()
		this.state = {data: null}
	}
	async componentDidMount() {
		const data =
			'Data from backend: ' +
			JSON.stringify(await fetch('/api').then(r => r.json()))
		this.setState({data})
	}
	render() {
		return this.state.data || <i>Loading...</i>
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<p>
					<Fetcher />
				</p>
			</div>
		)
	}
}

export default App
