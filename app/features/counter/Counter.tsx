import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../../constants/routes.json';
import {incrementIfOdd} from './counterSlice';

export default function Counter() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <img className={`counter ${styles.counter}`} data-tid="counter">

      </img>
      <div className={styles.btnGroup}>

        <button
          className={styles.btn}
          onClick={() => {
            dispatch(incrementIfOdd());
          }}
          data-tclass="btn"
          type="button"
        >
          识别
        </button>
      </div>
    </div>
  );
}
