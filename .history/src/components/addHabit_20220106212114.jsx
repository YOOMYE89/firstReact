

import React from 'react';

const AddHabit = (props) => {

    const formRef = React.createRef()
    const inputRef = React.createRef()
    
    const onSubmit = event => {
        event.preventDefault()
        // console.log('submit')
        const name = inputRef.current.value
        name && props.onAdd(name)
        // this.inputRef.current.value = ''
        formRef.current.reset()
    }

    return (<>
        <form ref={formRef} className="add-form" onSubmit={onSubmit} >
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button">Add</button>
        </form>
    </>)

};

// function AddHabit(props) {

// }

export default AddHabit;

// class AddHabit extends PureComponent {

    // formRef = React.createRef()
    // inputRef = React.createRef()
    
    // onSubmit = event => {
    //     event.preventDefault()
    //     // console.log('submit')
    //     const name = this.inputRef.current.value
    //     name && this.props.onAdd(name)
    //     // this.inputRef.current.value = ''
    //     this.formRef.current.reset()
    // }

//     render () {
//         console.log('addhabit.jsx')
        // return (<>
        //     <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit} >
        //         <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
        //         <button className="add-button">Add</button>
        //     </form>
        // </>)
//     }
// }

// export default AddHabit