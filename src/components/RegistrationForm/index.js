// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    formSubmit: false,
  }

  onSubmitSuccess = () => {
    this.setState({formSubmit: true})
  }

  onSubmitFormDetails = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({firstNameError: true, lastNameError: true})
    } else if (firstName !== '' && lastName === '') {
      this.setState({lastNameError: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({firstNameError: true})
    } else if (firstName !== '' && lastName !== '') {
      this.onSubmitSuccess()
    }
  }

  onClickNewResponse = () => {
    this.setState(prevState => ({
      formSubmit: !prevState.formSubmit,
      firstName: '',
      lastName: '',
    }))
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({
        firstNameError: true,
      })
    } else {
      this.setState({firstNameError: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({
        lastNameError: true,
      })
    } else {
      this.setState({lastNameError: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFormSubmission = () => {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      submitError,
    } = this.state

    const firstNameInput = firstNameError ? 'input-error' : ''
    const firstNameResultError = firstNameError ? 'Required' : ''

    const lastNameInput = lastNameError ? 'input-error' : ''
    const lastNameResultError = lastNameError ? 'Required' : ''

    return (
      <form className="form-container" onSubmit={this.onSubmitFormDetails}>
        <div className="input-container">
          <label className="input-label" htmlFor="FirstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="FirstName"
            placeholder="First name"
            className={`input ${firstNameInput}`}
            value={firstName}
            onBlur={this.onBlurFirstName}
            onChange={this.onChangeFirstName}
          />
          <p className="error-message">{firstNameResultError}</p>
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="LastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="LastName"
            placeholder="Last name"
            className={`input ${lastNameInput}`}
            value={lastName}
            onBlur={this.onBlurLastName}
            onChange={this.onChangeLastName}
          />
          <p className="error-message">{lastNameResultError}</p>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <p className="error-message">{submitError}</p>
      </form>
    )
  }

  renderFormSuccessfully = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-title">Submitted Successfully</p>
      <button
        type="button"
        className="response-button"
        onClick={this.onClickNewResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {formSubmit} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {formSubmit
          ? this.renderFormSuccessfully()
          : this.renderFormSubmission()}
      </div>
    )
  }
}

export default RegistrationForm
