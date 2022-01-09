import React, {Component} from 'react'

class AddHabit extends Component {
    
    handleAddHabits = () => {
        this.props.onAddHabits( document.querySelector('#habit').value )
    }

    onSubmit = (event) => {
        console.log(event)
    }

    render () {
        
        return (<>
            <form className="add-form" onSubmit={this.onSubmit} >
                <input type="text" className="add-input" placeholder="Habit"/>
                <input type="button" value="Add" onClick={this.handleAddHabits}/>
            </form>
            <input type="text"  id="habit"/>
            
        </>)
    }
}

export default AddHabit