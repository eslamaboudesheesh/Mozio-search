import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';

function HomePage() {
    return (
        <>
            <SearchForm isHomepage={true} />
        </>
    );
}

export default HomePage;
