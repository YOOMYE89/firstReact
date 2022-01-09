import React, {PureComponent} from 'react'

class AddHabit extends PureComponent {

    formRef = React.createRef()
    inputRef = React.createRef()
    
    onSubmit = event => {
        event.preventDefault()
        // console.log('submit')
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        // this.inputRef.current.value = ''
        this.formRef.current.reset()
    }

    render () {
        console.log('addhabit.jsx')
        return (<>
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit} >
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        </>)
    }
}

export default AddHabit