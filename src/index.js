import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './vis-components/search_bar';
// import './index.css';
//import App from './App';

const App = () =>{
    return (
        <div>
            <SearchBar />
            </div>
    )
}

const API_KEY = 'AIzaSyCJ8xgweYPJfYuCzP0kdg34rn1LKB3w3Tk';
ReactDOM.render(<App />, document.getElementById('root'));