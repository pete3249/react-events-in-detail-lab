import React from 'react';

export default class DelayedButton extends React.Component {
    
    handleClick = event => {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay);
    }

    render(props) {
        return <button onClick={this.handleClick}>DelayedButton</button>
    }
}


