import React, {Component} from 'react'

class AddHabit extends Component {
    
    handleAddHabits = () => {
        this.props.onAddHabits( document.querySelector('#habit').value )
    }

    render () {
        
        return (<>
            <form className="add-form">
                <input type="text" className="add-input" placeholder="Habit" />
                <button className="add-button" />
            </form>
            <input type="text"  id="habit"/>
            <input type="button" value="Add" onClick={this.handleAddHabits}/>
        </>)
    }
}

export default AddHabit