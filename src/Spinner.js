import React from 'react';

const Spinner  = (data) =>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {data.message}
            </div>
        </div>
    );
};
Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;