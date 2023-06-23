import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { type, className, placeholder, accept, value } = this.props;

        return(
            <input type={type} value={value} onChange={this.props.updateTxt} className={className} placeholder={placeholder} accept={accept}  />
        );
    }
}

export default Input;