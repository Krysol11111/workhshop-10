import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloStateful from './components/HelloStateful.js'
import HelloStateless from './components/HelloStateless.js'
import TransactionList from './components/TransactionList.js'
import TransactionForm from './components/TransactionForm.js'
import CategoryCard from './components/CategoryCard.js'
import CategoryList from './components/CategoryList.js'
import CategoryForm from "./CategoryForm";

class App extends Component
{
	constructor(props)
	{
		super(props);
		console.log(JSON.stringify(props));
		this.state = {
			counter: 0,
			transactions: ["abc","efg","xyz"],
			categories: ["Kajaki","Rower","Rolki",],
			currentView: 'transactions',
		}
	}

	deleteAction = (index)=>{
		this.setState({
			counter: this.state.counter,
			transactions: this.state.transactions
				.filter((item,number)=>{return (!(index==number));}),
				//.map((item)=> {return item}),
			categories: this.state.categories,
			currentView: this.state.currentView,
		});
	}

	handleChangeCategory = ({ id, name }) => {
		if (/^ *$/.test(name)) return;
		const { categories } = this.state;
		categories[id] = name;
		this.setState({ categories });
	}

	deleteCategory = (index)=>{
		this.setState({
			counter: this.state.counter,
			categories: this.state.categories
				.filter((item,number)=>{return (!(index==number));}),
			//.map((item)=> {return item}),
			transactions: this.state.transactions,
			currentView: this.state.currentView,
		});
	}

	handleAddCategory = (addedItem)=>{
		if (/^ *$/.test(addedItem)) return;
		this.setState({
			counter: this.state.counter,
			categories: this.state.categories.concat(addedItem),
			transactions: this.state.transactions,
			currentView: this.state.currentView,
		})
	}

	handleAddTransaction = (addedItem)=>{
		console.log(addedItem);
		if (/^ *$/.test(addedItem)) return;
		this.setState({
			counter: this.state.counter,
			transactions: this.state.transactions.concat(addedItem),
			categories: this.state.categories,
			currentView: this.state.currentView,
		})
		//console.log(JSON.stringify(this.state.transactions))
	}

	swapView = ()=>{
		if (this.state.currentView ==="transactions")
		{
			this.setState({
				counter: this.state.counter,
				transactions: this.state.transactions,
				categories: this.state.categories,
				currentView: "categories",
			})
		}
		else
		{
			this.setState({
				counter: this.state.counter,
				transactions: this.state.transactions,
				categories: this.state.categories,
				currentView: "transactions",
			})
		}
	}

	render()
	{
		return (
			<div className="App">
				<HelloStateless name="Krysol"/>
				<HelloStateful name="Krysol w/ state"/>
				{
					this.state.currentView==='transactions'
					?
						(<div>
							<TransactionForm addAction={this.handleAddTransaction}/>
							<TransactionList list={this.state.transactions} action={this.deleteAction}/>
						</div>)
					:
						(<div>
							<CategoryForm addAction={this.handleAddCategory}/>
							<CategoryList list={this.state.categories}  modifyAction={this.handleChangeCategory} deleteAction={this.deleteCategory}/>
						</div>)
				}
				<button onClick={this.swapView}>{this.state.currentView}</button>
			</div>
		);
	}
}

export default App;
