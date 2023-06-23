import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, className, placeholder, accept, onChange } = this.props;

        return(
            <input type={type} className={className} placeholder={placeholder} accept={accept} onChange={onChange} />
        );
    }
}

export default Input;