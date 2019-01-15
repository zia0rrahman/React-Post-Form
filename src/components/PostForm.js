import React, { Component } from 'react'
import axios from 'axios'

// set JSON PLACEHOLDER url
const BASE_URL = 'https://jsonplaceholder.typicode.com'

class PostForm extends Component {

    state = {
        title: '',
        body: '',
        userId: '112'
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        // Prevent reload
        e.preventDefault()

        axios.post(`${BASE_URL}/posts`, {
            // passing object
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
        })
            .then(res => {
                this.setState({
                isSubmitted: true, //show successs message under form
                error: false
                })

                console.log(res)
            })

            .catch(error => {
                this.setState({
                    error: true, // show error message under form
                    isSubmitted: false
                })
            })
    }

  render() {
    return (
      <div>
          <form onSubmit={this.submitHandler}>
              <input 
              type="text"
              className="form-control my-2"
              name='title'
              value={this.state.title}
              placeholder='Enter your title'
              onChange={this.changeHandler}
              />

              <textarea   
              className="form-control my-2"
              name='body'
              placeholder='Enter your text'
              value={this.state.body}
              onChange={this.changeHandler}
              />

              <button type="submit" className="btn btn-primary">Submit</button>
              {/* show success message */}

              {this.state.isSubmitted && <p className="text-success mt-1">Form submitted successfully!</p>}

              {/* show error */}
              {this.state.error && <p className="text-danger mt-1">Something error!</p>}
          </form>
      </div>
    )
  }
}

export default PostForm