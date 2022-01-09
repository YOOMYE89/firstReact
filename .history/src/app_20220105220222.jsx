import React, {Component} from 'react';
import './app.css';
import AddHabit from './components/addHabit';
import Habits from './components/habits';
import NavBar from './components/navBar';

// function App() {    return React.createElement('h1', {}, 'Hello:)~~') 바벨되면
// 위처럼 보임   return <Habits /> }

class App extends Component {
    state = {
        habits: [
            {
                id: 0,
                name: 'Reading',
                count: 0
            }, {
                id: 1,
                name: 'Running',
                count: 0
            }, {
                id: 2,
                name: 'Coding',
                count: 0
            }

        ]
    }

    //this 바인딩을 피하기 위함
    handleIncrement = habit => {
        // Habit 객체  console.log(this) this.setState({ count: this.state.count + 1 })
        // console.log(`inhandle : ${habit}`)
        const habits = [...this.state.habits]
        // habits.find(v => v.name === habit.name).count++;
        const index = habits.indexOf(habit)
        habits[index].count++
        this.setState({habits})
    }

    //this 바인딩을 피하기 위함
    handleDecrement = habit => {
        // Habit 객체  console.log(this) this.setState({ count: this.state.count > 0 &&
        // this.state.count - 1 || 0 }) console.log(`dehandle : ${habit}`)
        const habits = [...this.state.habits]
        // habits.find(v => v.name === habit.name).count++;
        const index = habits.indexOf(habit)
        habits[index].count > 0 && habits[index].count--
        this.setState({habits})
    }

    handleDelete = habit => {
        // console.log(`delhandle : ${habit}`)
        const habits = this
            .state
            .habits
            .filter(item => item.name !== habit.name)
        this.setState({habits})
    }

    handleAddHabits = habit => {
      const habits = this.state.habits
      habits.push(habit)
      this.setState({habits})
    }

    render() {
        return (
            <> 
            <NavBar habits = { this.state.habits } /> 
            
            <AddHabit habits = { this.state.habits } onAddHabits= {this.handleAddHabits} />

            <Habits
                habits={this.state.habits}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}/>
        </>
        )
    }
}

export default App;
