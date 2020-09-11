import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 10
    };

    //Constructor used for binding
    /*
    constructor() {
        super();
        this.HandleIncrement = this.handleIncrement.bind(this) //Returns a new instance of the new object and will reference this object

    }
    */
    //This is an event handler
    //Using an arrow function for binding a function to a components instance


    render() {
        //console.log("This is counter component. ID is:", this.props.ID);
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
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
        let classes = "badge m-2 badge-";
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