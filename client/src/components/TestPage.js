import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NavBar from "./NavBar";

// Action creator function
const incrementCounter = () => {
    return { type: "INCREMENT_COUNTER" };
};

// functional component
const TestComponent = ({ counter, incrementCounter }) => {
    //The useEffect hook is called whenever the counter prop changes.
    // The useEffect hook is used to perform side effects in functional components. It takes two arguments: a callback function and an array of dependencies.
    // The callback function is executed after the component has rendered, and it can contain any code that needs to perform side effects, such as data fetching, subscriptions, or updating the DOM.
    useEffect(() => {
        console.log("State has changed:", counter);
    }, [counter]);

    return (
        <div>
            <NavBar />
            <div className="w3-container w3-content  w3-padding-64">
                <div className="container">
                    <p>Counter: {counter}</p>
                    <button onClick={incrementCounter}>Increment</button>
                </div>
            </div>
        </div>
    );
};

/**
 * This is a function that takes the application state as an argument and returns an object.
 * It defines the mapping between the Redux state and the props of the CounterComponent.
 */
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

/**
 * takes the dispatch function as an argument and returns an object.
 * It defines the mapping between action creators and dispatching actions.
 * In this case, it uses the bindActionCreators function from Redux to bind the incrementCounter action creator to the dispatch function, resulting in a new prop called incrementCounter that can directly dispatch the action when called.
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            incrementCounter,
        },
        dispatch
    );
};
/**
 * connects the CounterComponent to the Redux store by mapping the state and dispatching actions using the mapStateToProps and mapDispatchToProps functions.
 */
const ConnectedTestComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TestComponent);

export default ConnectedTestComponent;
