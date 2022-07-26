import React, { useState } from 'react';
import { joinClassNames } from '../utils';
import { useModal } from '../hooks/dialog';
import { themeModes, ThemeContext } from '../hooks/theme';
import UserInfo from './UserInfo';
import UsersList from './UsersList';
import ThemeButton from './ThemeButton';
import { useMemo } from 'react';

export default function UsersPage({ users }) {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [votedUser, setVotedUser] = useState(users[0]);
  const [mode, setMode] = useState(themeModes.LIGHT);
  const { Dialog, open } = useModal();

  const toggleTheme = () => {
    setMode((state) =>
      state === themeModes.LIGHT ? themeModes.DARK : themeModes.LIGHT
    );
  };

  const usersList = useMemo(() => {
    return (
      <UsersList
        vote={votedUser}
        users={users}
        handleUserChange={(u) => setSelectedUser(u)}
        mode={mode}
      />
    );
  }, [votedUser, mode]);

  return (
    <ThemeContext.Provider
      value={{
        theme: mode,
        // toggleTheme,
      }}
    >
      <header className='UserPage-header'>
        <h1>Vote for your favorite user</h1>
        <ThemeButton mode={mode} toggleTheme={toggleTheme} />
      </header>
      <div
        className={joinClassNames(
          'UsersPage-content',
          mode === themeModes.DARK ? 'dark' : ''
        )}
      >
        {usersList}
        <UserInfo setVote={setVotedUser} user={selectedUser} openModal={open} />
      </div>
      <Dialog>
        {selectedUser.description.map((paragraph, i) => (
          <p key={i} className='UserDescription'>
            {paragraph}
          </p>
        ))}
      </Dialog>
    </ThemeContext.Provider>
  );
}
