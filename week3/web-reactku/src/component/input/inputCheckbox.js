import React,{Component} from "react";
import "./input.css";

class InputCheckbox extends Component {
	render() {
		return(
		<div>
				<input className="inputCheckbox" type={this.props.type} />
				<label className="label" for="savePassword">{this.props.label}</label>
		</div>
		)
	}
}
export default InputCheckbox;
