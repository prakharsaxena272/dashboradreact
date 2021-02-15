import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header >
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center" >
                        <div className="navbar-brand">Sales Employee Dashboard</div>
                    </nav>
                </header> 
            </div>
        );
    }
}

export default HeaderComponent;