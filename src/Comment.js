import { render } from 'enzyme';
import React, { Component } from 'react';

export default class Comment extends Component {
render () {
    return (
        <div classname="comment">
            {this.props.commentText}
        </div>
    );
}
}
