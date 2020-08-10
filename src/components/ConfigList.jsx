import React, {Component} from 'react';

// TODO: change to hook
class Configurations extends Component {
  constructor() {
    super();
    this.state = {
      configurations: []
    }
  }

  componentDidMount() {
    fetch("/configs")
      .then(res => res.json())
      .then(configurations => this.setState({
        configurations
      }));
  }

  render() {
    return (
      <div>
      <h4> Configurations </h4>
      <ul>
        {this.state.configurations.map(config =>
          <li key = {config.config_id}>
            {config.key1}: {config.key2} ({config.minfloat} - {config.maxfloat}) {config.value}
          </li>)}
      </ul>

      </div>
    );
  }
}

export default Configurations;
