import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = (props)=>{
    return (
        <div>
            <nav>
                <header>
                    <div className="nav-wrapper light-blue darken-2">
                        <a className="brand-logo"> {props.titulo} </a>
                    </div>
                </header>
            </nav>
        </div>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;