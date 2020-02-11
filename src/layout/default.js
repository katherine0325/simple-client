import React, { Component } from "react";
import generateLayout from '../lib/generate-layout';

class Default extends Component {
    render() {
        return (
            <div>
                <div>header</div>
                <div>{this.props.children}</div>
                <div>footer</div>
            </div>
        )
    }
}

export default generateLayout(Default);