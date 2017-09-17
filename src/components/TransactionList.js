import React, {Component} from 'react';
import TransactionCard from './TransactionCard.js'


export default function TransactionList({list,action})
{
	return (<div className="TransactionListBody">
		<ul>
			{list.map((item,index)=>{return <TransactionCard key={index} transaction={item} index={index} action ={action}/>})}
		</ul>
	</div>);
}
