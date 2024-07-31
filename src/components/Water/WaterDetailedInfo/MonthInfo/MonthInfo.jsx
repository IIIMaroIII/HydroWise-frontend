import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from './Calendar/Calendar';
import { CalendarPagination } from './CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { setShowChart } from 'src/redux/chart/slice.js';
import { useNavigate } from 'react-router-dom';
import ChartComponent from 'src/components/ChartComponent/ChartComponent.jsx';

const MonthInfo = () => {
  const dispatch = useDispatch();
  const showChart = useSelector(state => state.chart.showChart);
  const navigate = useNavigate();

  const handleClick = () => {
    const newChart = !showChart;
    dispatch(setShowChart(newChart));
    if (newChart) {
      navigate('/tracker/statistics');
    } else {
      navigate('/tracker');
    }
  };

  return (
    <>
      <div className={css.wrapper}>
        <h3 className={css.month}>Month</h3>
        <div className={css.paginationWrapper}>
          <CalendarPagination />
          {showChart ? (
            <svg className={css.chartIcon} onClick={handleClick}>
              <use href={'/sprite.svg#icon-pie-chart-00'}></use>
            </svg>
          ) : (
            <svg className={css.chartIcon} onClick={handleClick}>
              <use href={'/sprite.svg#icon-pie-chart-02'}></use>
            </svg>
          )}
        </div>
      </div>
      {showChart ? <ChartComponent /> : <Calendar />}
    </>
  );
};

export default MonthInfo;
