

import React from 'react';


// 함수 내 에서는 this가 필요가 없음. 지역변수 접근으로
const AddHabit = memo

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