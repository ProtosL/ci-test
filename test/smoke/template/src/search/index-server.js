'use strict';

const React = require('react');
require('./search.less');
const logo = require('../images/avatar.jpg');
// require('../../common');
// const { a } = require('./tree-shaking');
const largeNumber = require('@liuhaomin/large-number');

// if (false) {
//     a();
// }

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        }
    }

    loadComponent() {
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
            <img src={logo.default} onClick={this.loadComponent.bind(this)} />
        </div>
    }
}

module.exports = <Search />;