import PropTypes from 'prop-types';

import css from 'components/Statistics/Statistics.module.css';
import cssSection from 'components/Shared/Section.module.css';
import cssContainer from 'components/Shared/Container.module.css';

import { getBgColor } from 'utils/getBgColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={cssSection.section}>
      <div className={cssContainer.container}>
        <div className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}

          <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) => {
              return (
                <li
                  className={css.item}
                  key={id}
                  style={{ backgroundColor: getBgColor() }}
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
