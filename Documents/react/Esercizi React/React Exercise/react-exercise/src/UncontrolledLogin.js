import React from "react";


export class UncontrolledLogin extends React.Component {

  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.rememberRef = React.createRef();
    this.state={
        isSubmitDisabled:true
    }
  }

  handleInputChange = () => {
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    const isSubmitDisabled = !(username && password);
    this.setState({
      isSubmitDisabled
    })
  }

  handleLoginUncontrolled = (event) => {
    event.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    const remember = this.rememberRef.current.checked;
    this.props.onLogin({ username, password, remember });
  }

  handleReset = (event) => {
    console.log('reset')
    event.preventDefault();
    this.usernameRef.current.value = "";
    this.passwordRef.current.value = "";
    this.rememberRef.current.checked = false;
    this.setState={
        isSubmitDisabled:true
    }
  }

  componentDidMount(){
    this.usernameRef.current.focus()
  }


  render() {

    
    return (
      <div>
        <h1>Uncontrolled Form</h1>
        <form>
          <h2>Username</h2>
          <input name="username" ref={this.usernameRef} onChange={this.handleInputChange}/>
          <h2>Password</h2>
          <input name="password" type="password" ref={this.passwordRef}  onChange={this.handleInputChange} />
          <h2>Remember password</h2>
          <input name="remember" type="checkbox" ref={this.rememberRef} />
          <div>
            <button onClick={this.handleLoginUncontrolled} disabled={this.state.isSubmitDisabled}  type="submit">
              Login
            </button>
          </div>
          <button onClick={this.handleReset}>Reset</button>
        </form>
      </div>
    );
  }
}
