import React from 'react';


const CarsPagination = ({carsPerPage, totalCars,paginate}) => {
    const pageNumbers=[];
    for (let i = 1; i <= Math.ceil(totalCars/carsPerPage); i++) {
        pageNumbers.push(i)
        
    }
    return (
        <nav> 
            <ul className="pagination mt-4">
                {
                    pageNumbers.map(num=>(
                        <li key={num} className="page-item">
                            <p onClick={() =>paginate(num)} className="page-link ml-50">{num}</p>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default CarsPagination;