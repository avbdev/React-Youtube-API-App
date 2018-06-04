import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './vis-components/search_bar';
import API_KEY from './vis-components/API'
// import './index.css';
//import App from './App';

const App = () =>{
    return (
        <div>
            <SearchBar />
            </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));