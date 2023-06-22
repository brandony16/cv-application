import React from "react";

class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, rows, placeholder, onKeyUp } = this.props;

        return(
            <textarea className={className} rows={rows} placeholder={placeholder} onKeyUp={onKeyUp} />
        );
    }
}

export default TextArea;