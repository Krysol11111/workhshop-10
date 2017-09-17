import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function TransactionCard({transaction,index,action})
{
	return (<div className="TransactionCardBody">
		<li>
			PropCard of prop "{transaction}" <button onClick={()=>{action(index)}}>DELETE</button>
		</li>
	</div>);
}

TransactionCard.propTypes ={
	transaction: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired
}
