import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			editMode: false,
			name: this.props.name
		}

	}

	onNameChange = e =>
	{
		this.setState({name: e.target.value});
	}

	handleChangeEditMode = () =>
	{
		this.setState({editMode: !this.state.editMode});
	}

	handleSubmit = () =>
	{
		this.handleChangeEditMode()
		this.props.modifyAction({
			id: this.props.index,
			name: this.state.name,
		})
	}

	handleKeyPress = e =>
	{
		if (e.key === 'Enter') {
			this.handleSubmit()
		}
	}

	refreshValue = ()=>{
		this.setState({name: this.props.name});
	}

	render()
	{
		const {editMode} = this.state;

		return (
			<div className="Category-card">
				<h2>Name: {editMode ? (
						<input
							autoFocus
							type="string"
							value={this.state.name}
							onFocus={this.refreshValue}
							onChange={this.onNameChange}
							onBlur={this.handleSubmit}
							onKeyPress={this.handleKeyPress}
						/>
					) : (
						<span onClick={this.handleChangeEditMode}>{this.props.name}</span>
					)}
					<button onMouseDown={()=>this.props.deleteAction(this.props.index)}>DELETE</button>
				</h2>
			</div>
		)
	}
}
;

CategoryCard.propTypes = {
	name: PropTypes.string.isRequired
};

export default CategoryCard;