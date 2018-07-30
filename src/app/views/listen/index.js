import * as React from 'react';
import { Dimmer, Segment } from 'semantic-ui-react';

import LISTEN from 'images/listen.png';
import ON_THE_RUN from 'images/covers/on-the-run.jpg';
import DATPR from 'images/covers/datpr.jpg';
import BEAUTY_OF_NIGHT from 'images/covers/beauty-of-night.jpg';

import './styles.less';

export default class Listen extends React.Component<> {
    state = {
        showDimmer: false,
        album: null
    };

    albums = [
        {
            cover: ON_THE_RUN,
            index: 0
        },
        {
            cover: DATPR,
            index: 1
        },
        {
            cover: BEAUTY_OF_NIGHT,
            index: 2
        }
    ]

    frames = [
        <iframe width="500" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/131036917&color=%232d2b3a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>,
        <iframe width="500" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215137027&color=%232d2b3a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>,
        <iframe width="500" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/214693130&color=%232d2b3a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    ]

    handleShowAlbum = (index) => {
        this.setState({
            showDimmer: true,
            index
        })
    }

    handleCloseAlbum = () => {
        this.setState({
            showDimmer: false
        })
    }

    renderCover = (item) => {
        const { active } = this.state;
        return (
            <img
                styleName="cover"
                src={item.cover}
                alt="on the run cover"
                onClick={this.handleShowAlbum.bind(this, item.index)}
            />
        )
    }

    render() {
        const { active } = this.state;
        return (
            <React.Fragment>
                <Dimmer
                    active={this.state.showDimmer}
                    onClickOutside={this.handleCloseAlbum}
                    page
                >
                    {this.frames[this.state.index]}
                </Dimmer>
                <div styleName="listen" name="listen">
                    <div styleName="container" style={{ filter: `blur(0px)`}}>
                        <img
                            styleName="logo"
                            src={LISTEN}
                            alt=""
                        />
                        <div styleName="covers-container">
                                {this.albums.map(this.renderCover)}
                        </div>
                    </div>
                </div>
                </React.Fragment>
        )
    }
}
