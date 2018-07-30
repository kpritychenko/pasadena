import * as React from 'react';

import CONTACTS from 'images/contacts.png';

import './styles.less';

export default class Watch extends React.Component<> {
    render() {
        return (
                <div styleName="background" name="contacts">
                    <div styleName="container" style={{ filter: `blur(0px)`}}>
                        <img
                            styleName="logo"
                            src={CONTACTS}
                            alt=""
                        />
                        <div styleName="covers-container">
                            <a href="mailto:pasadena.mgmt@gmail.com">pasadena.mgmt@gmail.com</a>
                            <a href="https://vk.com/welcometopasadena">vk</a>
                        </div>
                    </div>
                </div>
        )
    }
}
