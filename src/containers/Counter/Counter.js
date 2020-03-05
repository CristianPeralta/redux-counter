import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
    INCREMENT,
    DECREMENT,
    ADD,
    SUBTRACT,
    STORE_RESULT,
    DELETE_RESULT,
} from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDerementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li onClick={() => this.props.onDeleteResult(strResult.id)} key={strResult.id}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
};

const mapDisptachToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: INCREMENT }),
        onDerementCounter: () => dispatch({ type: DECREMENT }),
        onAddCounter: () => dispatch({ type: ADD, val: 10 }),
        onSubtractCounter: () => dispatch({ type: SUBTRACT, val: 5 }),
        onStoreResult: result => dispatch({ type: STORE_RESULT, result }),
        onDeleteResult: id => dispatch({ type: DELETE_RESULT, id }),
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Counter);