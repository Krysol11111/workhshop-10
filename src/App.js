import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloStateful from './components/HelloStateful.js'
import HelloStateless from './components/HelloStateless.js'
import TransactionList from './components/TransactionList.js'
import TransactionForm from './components/TransactionForm.js'

class App extends Component
{
	constructor(props)
	{
		super(props);
		console.log(JSON.stringify(props));
		this.state = {
			counter: 0,
			transactions: ["abc","efg","xyz"],
		}
	}

	deleteAction = (index)=>{
		this.setState({
			counter: this.state.counter,
			transactions: this.state.transactions
				.filter((item,number)=>{return (!(index==number));})
				//.map((item)=> {return item}),
		});
	}

	handleAddTransaction = (addedItem)=>{
		console.log(addedItem);
		this.setState({
			counter: this.state.counter,
			transactions: this.state.transactions.concat(addedItem),
		})
		//console.log(JSON.stringify(this.state.transactions))
	}

	render()
	{
		return (
			<div className="App">
				<HelloStateless name="Krzysiek"/>
				<HelloStateful name="Kasia"/>
				<TransactionForm addAction={this.handleAddTransaction}/>
				<TransactionList list={this.state.transactions} action={this.deleteAction}/>
			</div>
		);
	}
}

export default App;
