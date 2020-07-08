import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <div 
        className='hover navbar-item'
        onClick={ this.props.onClick }
       >
        <div 
          className={`navbar-circle ${this.props.isCurrent ? 'navbar-circle-selected' : ''}`}
        >
        </div>
        <li 
          className={`${this.props.isCurrent ? 'navbar-in-view' : 'navbar-not-in-view'}`}
        >
          {this.props.name}
        </li>
      </div>
    );
  }
}


