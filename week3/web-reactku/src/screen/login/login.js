import React,{Component} from "react"; 
import Input from "../../component/input/input";
import InputCheckbox from "../../component/input/inputCheckbox";
import Button from "../../component/button/button"
import "./login.css"

class Login extends Component {
	render() {
		return (
			<div className="container">
				<div className="container-login">
					<div>
					<h2 className="h1">Login</h2>
					<h4 className="h3">Assigment Week 3</h4>
					<Input placeholder="Input your Username" type="text"></Input>
					<br />
					<Input placeholder="Input your Password" type="password"></Input>
					<br />
					<InputCheckbox type="checkbox" label="Remember Me!"></InputCheckbox>
					<br />
					<Button display="Login" className="success"></Button>
					<br />
					<Button display="Cancel" className="outline"></Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;