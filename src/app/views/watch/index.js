import * as React from 'react';

import WATCH from 'images/watch.png';

import './styles.less';

export default class Watch extends React.Component<> {
    render() {
        return (
                <div styleName="watch" name="watch">
                    <div styleName="container" style={{ filter: `blur(0px)`}}>
                        <img
                            styleName="logo"
                            src={WATCH}
                            alt=""
                        />
                        <div styleName="covers-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/gGF77gO1zVQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
        )
    }
}
