import React, {Component} from 'react'

class AddHabit extends Component {
    
    handleAddHabits () {
        this.props.onAddHabits( document.querySelector('#habit').value )
    }

    render () {
        
        return (<>
            <input type="text" placeholder="Habit" id="habit"/>
            <button onClick={this.handleAddHabits}>
                <i />
            </button>
        </>)
    }
}

export default AddHabit