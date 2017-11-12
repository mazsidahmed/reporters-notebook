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
				<ContactList />
			</div>
		)
	}
}

class ContactCard extends React. Component {
      render() {
      return(
        <div className="contact-card">
        <div> {this.props.name} </div>
        <div> {this.props.information} </div>
        </div>
      )
      }

}

class ContactList extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: "Connor Jennings",
          information: "123-456-789"
        },
        {
          name: "Mazin Sidahmed",
          information: "XXX-XXX-XXX"
        }
      ]

    }
  }
  render() {
    let contactCards = [];
    for(let i=0; i<this.state.contacts.length; i++) {
      let contactCard = (
        <ContactCard
          key={this.state.contacts[i].name}
          name={this.state.contacts[i].name}
          information={this.state.contacts[i].information}
          >
        </ContactCard>
      )
      contactCards.push(contactCard)
    }

    return(
    <div className="contact-list">
      {contactCards}
    </div>
  )
  }
}

ReactDOM.render(
  <ReportersNotebook />,
  document.getElementById('reporters-notebook')
);
