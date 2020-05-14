import React, { Component } from 'react'

export class SearchGender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genders: []
        }
    }
    componentDidMount() {
        axios.get('/api/gender').then(response => {
            this.setState({
                genders: response.data
            })
        })
    }
    render() {
        const { genders } = this.state
        let filteredGenders = (this.props.filteredGenders(genders))
        filteredGenders = filteredGenders.slice(0,3)
        return (
            <ul>
                {filteredGenders.map (gender => (
                    <li key={gender.id}>{gender.name}</li>
                ))}   
            </ul>
        )
    }
}

export default SearchGender
