import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 10
    };
    componentDidUpdate(prevProps, prevState) {
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Do Ajax Call
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    render() {
        console.log("Counter - Rendered");
        return (
            <div>

                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <input style={{ width: "100px", margin: "5px" }} type="text" name="item" />
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>

                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m2"
                >
                    Remove
                </button>
            </div>
        );
    }


    //This is just a method 
    getBadgeClasses() {
        let classes = "badge m-1 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter
        const x = 'Zero';
        return value === 0 ? x : value;
    }
}

export default Counter;