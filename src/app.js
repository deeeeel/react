import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.js';

window.App = {
	render : () => {
		ReactDOM.render(
			<Counter />,
			document.getElementById('root')
		);
	}
};
