import React,{ Component } from 'react';
import './App.css';
import axios from 'axios';
import Clock from './Clock';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            image:'',
            deadline:'',
            movieName:'',
            title:'',
            newDeadLine: '',
        }
    }
//     componentDidMount(){
//         axios.get("http://www.omdbapi.com/?apikey=bb1cc3e1&t="+this.state.name)
//         .then((result) =>{
//             this.setState =({
//                 news: result.data.Released
//             })
//         })
// }
    changeDeadline(){
        const BASE_URL = "http://www.omdbapi.com/?apikey=bb1cc3e1&";
        const FETCH_URL = `${BASE_URL}t=${this.state.movieName}`;
        console.log(FETCH_URL);
        fetch(FETCH_URL)
        .then(response => response.json())
        .then((result) =>{
              const deadline = result.Released;
              const image = result.Poster
              const title = result.Title
              console.log(result);
               this.setState({
                   deadline:deadline,
                   image: image,
                   title: title
               })
        });

    }
    render(){
        return(

            <div>
                <div className="countdown-display-section">
                <img src={this.state.image} alt=""/>
                    <div className="movie-title">{this.state.movieName}</div>
                    <Clock 
                    deadLine ={this.state.deadline}
                    />
                 </div>
                <div className="search-section">
                <div>
                <label for="movie-name">Enter Exact Movie Name</label>
                <input  className="input-field" id="movie-name"
                    placeholder="Movie name"
                    onChange={event => this.setState({movieName: event.target.value})}
                />
                    {/* <input  className="input-field"
                    placeholder="Movie date"
                    onChange={event => this.setState({newDeadLine: event.target.value})}
                    /> */}
                    <a className="btn" onClick={() => this.changeDeadline()}>Submit</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;