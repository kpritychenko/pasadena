import * as React from 'react';

import ABOUT from 'images/about.png';

import './styles.less';

export default () => (
    <div styleName="about" name="about">
        <div styleName="container" style={{ filter: `blur(0px)`}}>
            <img
                styleName="logo"
                src={ABOUT}
                alt=""
            />
            <div styleName="text">
                  САСАЙ БАСАЙ Среди обилия современников, работающих в жанре 80, ощущается резкая нехватка живого звука. К группе из Новосибирска, о которой идет речь, это никоим образом не относится. Квартету Pasadena Night удалось исключительно точно передать дух времени и донести до слушателя подлинное new wave звучание - точная ритм-секция, синтезаторные волны, подкреплённые уместными и мелодичными гитарными пассажами
            </div>
        </div>
    </div>
)