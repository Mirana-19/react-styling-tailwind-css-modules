/* eslint-disable react/prop-types */

import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  console.log(stats);
  return (
    <div className={css.statsCard}>
      <h2 className={css.statsCard__title}>Upload stats</h2>
      <ul className={css.statsCard__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.statsCard__item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <h3 className={css.statsCard__label}>{label}</h3>
            <p className={css.statsCard__percentage}>{percentage}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
