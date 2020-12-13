import React from 'react';
import loading from '../../loading.gif'


const LoadingSpinner = () => {
    return (
        <div style={{textAlign:"center"}}> 
            {/* <h5 className="h1Style">Data is loding....</h5> */}
            <img src={loading} alt=""/>
        </div>
    );
};  
 
export default LoadingSpinner;