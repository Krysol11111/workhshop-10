import React, {Component} from 'react';


export default function HelloStateless(props)
{
	return (<div className="HelloStateless">
		<p>
			Hello, {props.name}!
		</p>
	</div>);
}