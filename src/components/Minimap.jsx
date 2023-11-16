import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

import spbw from '../../../utils/spbw';


import gameConfig from '../../../config/game.json';
import cls from './minimap.module.css';

const mmPatterns = gameConfig.minimapPatterns;

function Minimap({ children, guessDisabled, onGuess }) {
    const btnRowRef = useRef();
    const [mmCollapsed, setMmCollapsed] = useState(false);
    const [mmPattern, setMmPattern] = useState(0);

    return (
        <div className={spbw('widget-group', cls.minimap)} style={{
            '--mm-wid': mmPatterns[mmPattern].w,
            '--mm-hgt': mmCollapsed ? window.getComputedStyle(btnRowRef.current).height : mmPatterns[mmPattern].h
        }}>
            <div className={cls.map}>{children}</div>
            <div>
                <Button className="btn-block" disabled={guessDisabled} onClick={onGuess}>Guess</Button>
            </div>
        </div>
    );
}
Minimap.propTypes = {
    guessDisabled: PropTypes.bool,
    onGuess: PropTypes.func
};
Minimap.defaultProps = {
    guessDisabled: true,
    onGuess: () => { }
};

export default Minimap;