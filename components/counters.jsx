import React, { Component } from 'react';
import Counter from './counter'


class Counters extends Component {

    render() {

        const { onReset, onItemReset, counters, onDelete, onIncrement, onAddItem } = this.props
        console.log("Counters - Rendered");
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                <button className="btn btn-primary btn-sm m-2" onClick={onItemReset}>Item Reset</button>
                <button className="btn btn-primary btn-sm m-2" onClick={onAddItem}>Add Item</button>

                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}//Passes and stores all the properties of the counter(object)
                    //value={counter.value}
                    //id={counter.id}
                    />
                )}
            </div>
        );
    }
}

export default Counters; 