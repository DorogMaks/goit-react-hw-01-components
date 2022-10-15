// import PropTypes from 'prop-types';

import css from 'components/Statistics/Statistics.module.css';
import cssBase from 'components/base.module.css';

import { getRandomHexColor } from 'utils/getColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={cssBase.section}>
      <div className={cssBase.container}>
        <div className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}

          <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) => {
              return (
                <li
                  className={css.item}
                  key={id}
                  style={{ backgroundColor: getRandomHexColor() }}
                >
                  <span className={css.label}>{label}</span>
                  <span className={css.percentage}>{percentage}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.exact({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };
