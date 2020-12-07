import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
/*
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return <div>Latitude: </div>;
}*/

class App extends React.Component {
   
    state = { latitude: null, errorMessage: '' };
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
            
        );
    }

    componentDidUpdate() {

    }
    
    render() {
        if(this.state.latitude && !this.state.errorMessage)
            return (
                <div>
                    <SeasonDisplay lat={this.state.latitude} />
                </div>
            );
        else if(!this.state.latitude && this.state.errorMessage)
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
    
        return  <div>loading</div>;
    }
}

ReactDOM.render( <App/>, document.querySelector('#root'));