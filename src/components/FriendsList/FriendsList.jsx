/* eslint-disable react/prop-types */
export const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className="userList flex flex-col mx-auto gap-[10px] mt-[50px] w-[200px] ">
      {friends.map(({ id, avatar, isOnline, name }) => (
        <li
          className="userList__item flex items-center gap-[10px] p-[10px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]"
          key={id}
        >
          <span
            className={`rounded-full w-[10px] h-[10px] ${isOnline ? 'bg-green-600' : 'bg-red-600'}`}
          ></span>
          <img className="userList__image block" src={avatar} width="40px" />
          <p className="userList__name "> {name} </p>
        </li>
      ))}
    </ul>
  );
};
