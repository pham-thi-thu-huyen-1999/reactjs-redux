import React from 'react'
import Search from './search'
import Sort from './sort'

class SearchAndSort extends React.Component{
    render() {
        return(
            <div className="row mt-15"> 
                <Search />
                <Sort />
            </div>
        )
    }
}

export default SearchAndSort;
