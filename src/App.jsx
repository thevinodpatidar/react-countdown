import React,{ Component } from 'react';
import './App.css'
import Clock from './Clock';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline:'April 26, 2019',
            name:'Avenger Endgame',
            newDeadLine: ''
        }
    }

    changeDeadline(){
        this.setState(
            {
                deadline:this.state.newDeadLine,
                name:this.state.movieName
            })
    }
    render(){
        return(
            <div>
                <div className="countdown-display-section">
                <img src="http://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster-405x600.jpg" alt=""/>
                    <div className="movie-title">{this.state.name}</div>
                    <Clock 
                    deadLine ={this.state.deadline}
                    />
                 </div>
                <div className="search-section">
                <div>
                    <label for="movie-name">Enter Movie Name</label>
                <input  className="input-field" id="movie-name"
                    placeholder="Movie name"
                    onChange={event => this.setState({movieName: event.target.value})}
                    />
                    <input  className="input-field"
                    placeholder="Movie date"
                    onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <a className="btn" onClick={() => this.changeDeadline()}>Submit</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;