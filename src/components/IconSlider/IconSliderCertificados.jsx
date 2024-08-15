import React from 'react';
import IconSlider from './IconSlider';

import ll_c from '../../assets/img/ll-c.svg'

const IconSliderCertificados = () => {
    const items = [
        { icon: ll_c, text: 'ISO 9001 - 2015' },
        { icon: ll_c, text: 'ISO 14001 - 2015' },
        { icon: ll_c, text: 'ISO 45001 - 2018' },
        { icon: ll_c, text: 'NORSOK S-WA-006-2009' },
    ];

    return (
        <div className="contenedor-iconos-certificados">
            <IconSlider items={items} />
        </div>
    );
};

export default IconSliderCertificados;
