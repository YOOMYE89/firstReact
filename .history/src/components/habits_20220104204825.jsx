import React, { Component } from 'react';

class Habits extends Component {
    state = {
        habits: [
            {
                name: 'Reading',
                count: 0
            }, {
                name: '',
                count: 0
            }, {
                name: '',
                count: 0
            }

        ]
    }
    render() {
        return (<div></div>);
    }
}

export default Habits;