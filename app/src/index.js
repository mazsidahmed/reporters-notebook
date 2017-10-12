import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from './components/AppBar';


class ReportersNotebook extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AppBar />
			</div>
		)
	}
}

ReactDOM.render(
  <ReportersNotebook />,
  document.getElementById('reporters-notebook')
);
