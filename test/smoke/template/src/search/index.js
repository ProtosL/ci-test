'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from '../images/avatar.jpg';
import '../../common';
import { a } from './tree-shaking';
import largeNumber from '@liuhaomin/large-number';

if (false) {
    a();
}

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        }
    }

    loadComponent () {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        });
    }

    render() {
        const { Text } = this.state;
        const addResult = largeNumber('999', '1');
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            Search asdfasdfasf {addResult}
            <img src={logo} onClick={this.loadComponent.bind(this)}/>
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)
