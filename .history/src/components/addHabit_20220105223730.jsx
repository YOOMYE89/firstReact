import React, {Component} from 'react'

class AddHabit extends Component {
    
    // handleAddHabits = () => {
    //     this.props.onAddHabits( document.querySelector('#habit').value )
    // }

    onSubmit = event => {
        event.preventDefault()
        console.log('submit')
    }

    render () {
        
        return (<>
            <form className="add-form" onSubmit={this.onSubmit} >
                <input type="text" className="add-input" placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
            <input type="text"  id="habit"/>
            
        </>)
    }
}

export default AddHabit