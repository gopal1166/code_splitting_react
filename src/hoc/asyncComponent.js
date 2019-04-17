/*
  basically our asyncComponent is a function that returns a component.
*/
import React, {Component} from 'react';
import { Spinner } from 'antd';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : <Spinner />;
        }
    }
};

export default asyncComponent;
