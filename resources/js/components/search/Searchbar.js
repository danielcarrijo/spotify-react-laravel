import React, { Component } from 'react'

export class Searchbar extends Component {
    render() {
        return (
            <div>
                <input 
                    className="form-control" 
                    type="text"
                    name = "search"
                    onChange = {this.props.handleSearch}
                    placeholder = "Busque uma música, uma artista, um gênero ou uma playlist"
                />
            </div>
        )
    }
}

export default Searchbar
