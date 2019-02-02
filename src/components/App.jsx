import React, { Component } from 'react';



class App extends Component {
    constructor() {
        super();

        this.state = {
            text: "Hi",
            hasLoaded: false,
        };
    }

    //handle event for setting the text in state
    handleInputChange = (text) => {
        this.setState({ text });
    }

    //toggles the hasLoaded property in state
    toggle = () => {

        this.setState({ hasLoaded: !this.state.hasLoaded });
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    render() {

        if(this.state.hasLoaded ===  true) {

            return (
                <div>
                    <input
                        value={this.state.text}
                        onChange={(event) => { this.handleInputChange(event.target.value) }} />
                    <button onClick={this.toggle}>Toggle Loaded</button>
                </div>
                
            )
        } else {

            return (
                <div>
                    <h1>Loading...</h1>
                    <button onClick={this.toggle}>Toggle Loaded</button>
                </div>
            )
        }

        
    }
}
// const App = (props) => {
//  return <h1>Hello, {props.name}!</h1>;
// }


// ReactDOM.render(
// <App />,
// document.getElementById('root')
// );

export default App;