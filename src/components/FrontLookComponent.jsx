import React, { Component } from 'react';
// import DropDown from './components/dropdown';

class FrontLook extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-md-2 filterColumn ">
                        <h5>
                            {/* <DropDown/>  */}
                        </h5>
                    </div>
                   
                    <div className="col-md-10" >
                        <h5 className="nav justify-content-center">Charts</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontLook;