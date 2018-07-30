import * as React from 'react';
import { scroller } from 'react-scroll';

import MENU_ITEMS from 'constants/menu';

import './styles.less';

export default class Menu extends React.Component<Props> {
    handleClick(item) {
        scroller.scrollTo(item, {
            offset: -100,
            delay: 100,
            duration: 500,
            smooth: true
        });
    }

    renderItem = (item) => {
        return (
            <div styleName="item" onClick={this.handleClick.bind(this, item)}>
                {item}
            </div>
        )
    }

    render() {
        return (
            <div styleName="menu">
                <div styleName="item-container">
                    {MENU_ITEMS.map(this.renderItem)}
                </div>
            </div>
        )
    }
}