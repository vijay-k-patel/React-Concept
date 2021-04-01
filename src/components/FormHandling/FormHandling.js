import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            comments: '',
            topic:'react'
        }
    }

    handlerUserNameChange = (event) => {
        this.setState({
            userName:event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }

    handleSelect = (event) => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render () {
        const { userName, comments, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Form Component</h1>
                    <label>UserName: </label>
                    <input type="text" placeholder="Enter your name"
                    value={userName}
                    onChange={this.handlerUserNameChange}>
                    </input>
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea value={comments}
                        onChange={this.handleCommentsChange}>
                    </textarea>
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={topic} onChange={this.handleSelect}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>    
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormHandling
