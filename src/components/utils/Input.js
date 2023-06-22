import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, className, placeholder, onKeyUp, accept, onChange } = this.props;

        return(
            <input type={type} className={className} placeholder={placeholder} onKeyUp={onKeyUp} accept={accept} onChange={onChange} />
        );
    }
}

export default Input;