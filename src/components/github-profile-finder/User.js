import React from 'react'

const User = ({user}) => {
    const {avatar_url, followers, following, public_repos, url, name, login} = user;
  return (
    <div className='user'>
        <div>
            <img src={avatar_url} className='avatar' alt='user'/>
        </div>
        <div>
            <a href={`https://github.com${login}`}> {name || login}</a>
        </div>

    </div>
  )
}

export default User