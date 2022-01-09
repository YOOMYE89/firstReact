import React, {Component} from 'react'

class AddHabit extends Component {
    
    handleAddHabits () {
        this.props.onAddHabits( document.querySelector('#habit').value )
    }

    render () {
        
        return (<>
            <input hint="Habit" id="habit"/>
            <button text="Add" onClick={this.handleAddHabits}>
                <i />
            </button>
        </>)
    }
}

export default AddHabit