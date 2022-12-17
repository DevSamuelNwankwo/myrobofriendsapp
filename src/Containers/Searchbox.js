function Searchbox ({searchField, searchChange}) {

    return (
        <div className="pa50">
           <input type="search" name="" id="" placeholder="Search robots" className="pa3 ba b--green bg-lightest-blue tc" 
            onChange = {searchChange}/>
        </div>
    )

}

export default Searchbox;