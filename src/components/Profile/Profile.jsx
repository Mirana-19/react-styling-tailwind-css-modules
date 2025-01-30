/* eslint-disable react/prop-types */

import { Stats } from './Stats/Stats';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className="card w-60 mx-auto rounded-[12px] overflow-hidden shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
      <div className="descriprion flex flex-col items-center py-10 bg-white">
        <img src={avatar} alt="User avatar" className="rounded-full bg-blue-200 w-24 h-24" />
        <p className="username mt-6 font-bold">{username}</p>
        <p className="tag text-gray-600">@{tag}</p>
        <p className="location text-gray-600">{location}</p>
      </div>

      <Stats stats={stats} />
    </div>
  );
};
