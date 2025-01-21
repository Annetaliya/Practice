import React, { useEffect, useState } from 'react';
import Suggestion from './Suggestions';
const SearchAutocomplete = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState (null);
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false);
    const [filtererdUsers, setFilteredUsers] = useState([])

    const fetchUsers = async() => {
        setLoading(true)
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data =  await response.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(userItem => userItem.firstName));
                setLoading(false);
            }
            console.log(data)
            

        } catch (e) {
            setLoading(false)
            console.log(e)
            setError(e)

        }
        
    }


    useEffect(() => {
        fetchUsers()

    }, [])
    

    function handleChange (event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query)
        if (query.length > 1) {
            const filteredData = users.filter(item => item.toLowerCase().includes(query))
            setFilteredUsers(filteredData)
            setShowDropdown(true);
        } else {
            setShowDropdown(false)
        }

    }
    console.log(users, filtererdUsers)

    if (loading) {
        return <div>Loading... Please Wait!</div>
    }
    function handleClick (e) {
        console.log(e.target.textContent)
        setShowDropdown(false)
        setSearchParam(e.target.textContent)
        setFilteredUsers([])
    }

    return (
        <div className='search-auto-complete'>
            <input 
            name='search'
            type='text'
            placeholder='Search Users here'
            value={searchParam}
            onChange={handleChange}
            />
            {showDropdown && <Suggestion handleClick={handleClick} data={filtererdUsers}/>}

        </div>
    )
}
export default SearchAutocomplete;