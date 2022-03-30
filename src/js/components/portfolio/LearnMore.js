import React from 'react';
import ReactDOM from 'react-dom';
 
class LearnMore extends React.Component {
  constructor() {
    super();
 
    this.state = {
      openModal: null,
    };
 
    this.openModal = this.openModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: 0});
  }
 
  render() {
    return (
        <div>
            <h4 className="project_header">Curious Monkey</h4>
            <div onClick={this.openModal} className="project_button">LEARN MORE</div>
        </div>
    );
  }
}

if (document.getElementsByClassName('project_hover')[0]) {
  ReactDOM.render(<LearnMore />, document.getElementsByClassName('project_hover')[0]);
}

if (document.getElementsByClassName('project_hover')[1]) {
  ReactDOM.render(<LearnMore />, document.getElementsByClassName('project_hover')[1]);
}