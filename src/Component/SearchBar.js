import React, { Component } from 'react'

import { Paper , TextField, Typography} from '@material-ui/core'

export default class SearchBar extends Component {

    state = {
        searchterm : ""
    }


    handleChange = (e) =>{
        this.setState({
            searchterm : e.target.value        
        })
        
    }
    handleSubmit = (e) =>{
        const { searchterm } = this.state;
        const { onFormSubmit } =  this.props;
        onFormSubmit(searchterm);
        e.preventDefault(); 
    }

    render() {
        return (
           
            <Paper elevation={6} style={ {padding : '25px', overflow :"hidden"} } >
                <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label="search..." onChange={this.handleChange} ></TextField>
                </form>
            </Paper>


        )   
    }
}
