import React, { Component } from 'react';

export default class App2 extends Component {
	constructor(props)
	{
		super(props)
	}
	render() {
		return (
			<button onClick={this.props.click}>Kappa</button>
		);
	}
}

