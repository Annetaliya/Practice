import React, { useEffect, useState} from 'react';
import './style.css';
import User from './User';

const Profile = () => {
    const [username, setUserName] = useState('Annetaliya');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

   

    const fetchGithubUserData = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const result =  await response.json();

            if (result) {
                setUserData(result)
                setLoading(false);
                
            }
            console.log(result)
    
        } catch (e) {
    
        }
    }
    useEffect(() => {
        fetchGithubUserData()
    }, [])

    const handleSubmit = () => {
        fetchGithubUserData()

    }

    if (loading) {
        return <h1>Loading data ! Please wait </h1>
    }

  return (
    <div className='gitub-profile-container'>
        <div className='input-wrapper'>
            <input 
            name='search-by-username'
            type='text'
            placeholder='Search Github Username...'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>

        </div>
        {
            userData !== null ?  <User user={userData}/>: null
        }

    </div>
  )
}

export default Profile;