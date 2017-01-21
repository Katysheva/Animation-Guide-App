import React, {Component} from 'react';
import logo from '../../img/logo.svg';
import  './header.css';

class Header extends  Component {
    render() {
        return (
            <header className="header">
                <h1 className="logo">
                    <img src={logo} alt="logo"/>
                </h1>

                <div className="header-content">
                    <h1 className="header-content__title">
                        <strong>Animations</strong> in CSS
                    </h1>
                    <p className="header-description">The CSS properties that allow you to animate almost any other
                        property</p>
                </div>

                <div className="header-content">
                    <h1 className="header-content__title">
                        <strong>Easing</strong> in CSS
                    </h1>
                    <p className="header-content__description">Easing functions specify the speed at which an animation progresses
                        at different points within the animation.</p>
                </div>

                <button className="animatable-properties"></button>
            </header>
        )
    }
}

export default Header;