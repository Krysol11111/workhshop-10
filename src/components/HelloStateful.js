import React, {Component} from 'react';

class HelloStateful extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			counter: 0,
		}
	}

	incrementCount = () =>
	{
		this.setState({counter: this.state.counter + 1});
	}
	decrementCount = () =>
	{
		this.setState({counter: this.state.counter - 1});
	}

	render()
	{
		return (
			<div className="HelloStateful">
				<p>
					Hello, {this.props.name}! counter = {this.state.counter}
				</p>
				<button onClick={this.incrementCount}>Increment</button>
				<button onClick={this.decrementCount}>Decrement</button>
			</div>
		);
	}
}

export default HelloStateful;