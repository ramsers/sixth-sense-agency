import React from 'react';
import {Link} from 'react-router-dom';
import './MenuLayer.scss';

const MenuLayer = () => {
    return (
        <div className="menu">
            <div className="menu__second-bg"></div>
            <div className="menu__layer">
                <div className="menu__city-bg"></div>
                <div className="menu__ctn">
                    <div className="menu__wrapper">
                        <div className="menu__links">
                            <nav className="menu__nav">
                                <ul className="menu__list">
                                    <li className="menu__list-item">
                                        <Link to='/opportunities'>Opportunity</Link>
                                        <Link to='/solutions'>Solutions</Link>
                                        <Link to='/contact'>Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="menu__info">
                                <h3 className="menu__info-title">Our Promis</h3>
                                <p className="menu__text">
                                    The passage experienced a surge in popularity during the 1960s 
                                    when Letraset used it on their dry-transfer sheets, and again 
                                    during the 90s as desktop publishers bundled the text with their software. 
                                    Today it's seen all around the web; on templates, websites, 
                                    and stock designs. Use our generator to get your own, 
                                    or read on for the authoritative history of lorem ipsum.
                                </p>
                            </div>
                            <div className="menu__locations">
                                Locations:
                                <span className="menu__location">Toronto</span>
                                <span className="menu__location">Montreal</span>
                                <span className="menu__location">Quebec</span>
                                <span className="menu__location">Halifax</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuLayer;