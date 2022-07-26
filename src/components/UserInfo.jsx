import React from 'react';
import { gravatarUrl } from '../utils';

const IMAGE_SIZE = 128;

export default function UserInfo({ user, openModal, setVote }) {
  return (
    <div className='UserInfo-container'>
      <img src={gravatarUrl(user.email, IMAGE_SIZE)} alt={user.first_name} />
      <div className='UserInfo-data'>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <ul>
          <li>Job title: {user.personalInfo.jobTitle}</li>
          <li>
            Origin: {`${user.personalInfo.city}, ${user.personalInfo.country}`}
          </li>
        </ul>
        <button
          className='UserInfo-button vote'
          type='button'
          onClick={() => setVote(user)}
        >
          Vote
        </button>
        <button
          className='UserInfo-button modal'
          type='button'
          onClick={openModal}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
