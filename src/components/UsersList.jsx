import React, { useState, useContext } from 'react';
import { gravatarUrl, joinClassNames } from '../utils';

import { themeModes, ThemeContext } from '../hooks/theme';

const IMAGE_SIZE = 32;

const UserItem = ({ user, vote, handleUserChange }) => {
  const { theme } = useContext(ThemeContext);

  //   console.log('rendering');
  const onUserClick = () => {
    handleUserChange(user);
  };

  const className = joinClassNames(
    'UserItem',
    vote.id === user.id ? 'voted' : '',
    theme === themeModes.DARK ? 'dark' : ''
  );
  return (
    <button
      className={className}
      type='button'
      onClick={onUserClick}
      title={user.votes}
    >
      <div className='vote-element'>{user.votes}</div>
      <img
        src={gravatarUrl(user.email, IMAGE_SIZE)}
        alt={user.first_name}
        style={{ marginRight: '10px' }}
      />
      <div>{`${user.first_name} ${user.last_name}`}</div>
    </button>
  );
};

export default function UsersList({ users, handleUserChange, vote }) {
  const { theme } = useContext(ThemeContext);

  const className = joinClassNames(
    'UsersList-list',
    theme === themeModes.DARK ? 'dark' : ''
  );

  return (
    <div className={className}>
      {users.map((user) => (
        <UserItem
          user={user}
          key={user.id}
          vote={vote}
          handleUserChange={handleUserChange}
        />
      ))}
    </div>
  );
}
