import * as React from 'react';

import Menu from './menu';
import About from './about';
import Listen from './listen';
import Watch from './watch';
import Contacts from './contacts';

export default class App extends React.Component<> {
    render() {
        return (
            <React.Fragment>
                <Menu />
                <About />
                <Listen />
                <Watch />
                <Contacts />
            </React.Fragment>
        )
    }
}