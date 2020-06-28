import React from 'react';

export default class Element extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div>{this.state.text}</div>
        )
    }

}