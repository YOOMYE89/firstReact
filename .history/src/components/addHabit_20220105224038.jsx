import React, {Component} from 'react'

class AddHabit extends Component {

    inputRef = React.createRef()
    
    onSubmit = event => {
        event.preventDefault()
        console.log('submit')
    }

    render () {
        
        return (<>
            <form className="add-form" onSubmit={this.onSubmit} >
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
            <input type="text"  id="habit"/>
            
        </>)
    }
}

export default AddHabit