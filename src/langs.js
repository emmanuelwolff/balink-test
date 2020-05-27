import React, { useEffect } from 'react';
import {langConnector} from './redux/connectors';

const Langs = (props) => {

    const {lang: selected, langs, changeLang, getLangs} = props;

    useEffect(() => {
        if (!langs){
            getLangs();
        }
    })

    return (
        langs ? <div className="header">
            <div className="langs">
                <select value={selected} onChange={e => changeLang(e.target.value)}>
                    {langs.map(lang => <option value={lang}>{lang}</option>)}
                </select>
            </div>
        </div> : ''
    );
};

export default langConnector(Langs);
