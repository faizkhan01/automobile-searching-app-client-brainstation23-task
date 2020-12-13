import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './LandingPage.css'
import { BsSearch } from 'react-icons/bs';
import SingleCar from './SingleCar';
import CarsPagination from './CarsPagination';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './LandingPage.css'


const LandingPage = () => {

    const [search, setSearch] = useState("");
    const [allCars, setAllCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(6);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        fetch('https://stormy-tundra-94731.herokuapp.com/allCars')

            .then(response => response.json())
            .then(data => setAllCars(data))  
            setLoading(false);
            
    }, [])

    let carFilter = allCars.length > 0 && allCars.filter(cd => {
        return cd.brandName.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    // get current cars
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = carFilter !== false && carFilter.slice(indexOfFirstCar, indexOfLastCar)

    //change page
    const paginate = (num) => { setCurrentPage(num) }
    const searchHandler = (e) => {
        setSearch(e.target.value);
        e.preventDefault();
    }
    return (
        <div className="bg">
            <Header />
            <Container>

                <div className="searchbar mt-4">
                    <div align="center" className="search-section">
                        <h4 style={{color:'cyan'}}>Search your favorite brand here</h4>
                        <InputGroup className="mb-3 searchbar">

                            <FormControl className="search-input" onChange={searchHandler} aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Append>
                                <InputGroup.Text className="search-input_icon"><BsSearch /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <Row>
                        {
                            carFilter === false ?  <p style={{color:'cyan', fontSize: '40px'}}> <strong>loading...  <LoadingSpinner> ...</LoadingSpinner>   </strong> </p> : carFilter.length === 0 ? <p>NO CAR FOUND </p> : currentCars.map((ac, index) => <SingleCar CarDetails={ac} key={index}></SingleCar>)
                        }
                    </Row>
                    <CarsPagination carsPerPage={carsPerPage} totalCars={carFilter.length} paginate={paginate} />
                </div>
            </Container>
        </div>
    );
};

export default LandingPage;