/* eslint-disable react/prop-types */

export const Stats = ({ stats }) => {
  return (
    <ul className="stats flex justify-evenly bg-gray-300">
      {Object.entries(stats).map(([key, value]) => {
        return (
          <li
            key={key}
            className="flex flex-col flex-1 items-center border-[1px] border-gray-200 py-2 "
          >
            <span className="label">{key}</span>
            <span className="quantity">{value}</span>
          </li>
        );
      })}
    </ul>
  );
};
