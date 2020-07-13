import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Header.scss';
import MenuLayer from '../MenuLayer/MenuLayer'

const Header = ({history}) => {
    return (
        <header className="header">
            <div className="header__ctn">
                <div className="header__wrap">
                    <div className="header__inner-header">
                        <div className="header__logo">
                            <Link to='/'>SIXTH SENSE</Link>
                        </div>
                        <div className="header__menu">
                            <div className="header__menu-btn">Menu</div>
                        </div>
                    </div>
                </div>
            </div>
            <MenuLayer/>
        </header>
    )
}

export default withRouter(Header);