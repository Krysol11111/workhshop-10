import React, {Component} from 'react';
import CategoryCard from './CategoryCard.js'


export default function CategoryList({list,deleteAction,modifyAction})
{
	return (<div className="TransactionListBody">
		<ul>
			{list.map((item,index)=>{return <CategoryCard key={item+index} name={item} index={index} deleteAction ={deleteAction} modifyAction={modifyAction}/>})}
		</ul>
	</div>);
}
