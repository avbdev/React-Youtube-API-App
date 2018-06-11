import React, {Component} from 'react';
import VisLogo from '../visioniod.png'

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term : ''};
  }

  render(){
    return(
      <nav className="navbar navbar-default">
      
         <div className="navbar-header">
            <div className="navbar-brand">
             <a href="http://localhost:3000"><img className="potrait" aria-label="Visioniod Logo" src={VisLogo} alt="Visioniod Logo" /></a>

             </div>
             
         </div>
      <ul className="nav navbar-nav">
         <div className="search-bar">
            <input
               value = {this.state.term}
               onChange = {event => this.onInputChange(event.target.value) } placeholder="Search" />
         </div>
      </ul>
   
</nav>
      
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
