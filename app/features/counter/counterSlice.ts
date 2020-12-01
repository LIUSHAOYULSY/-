import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../../store';
const fs = require('fs');const child_process = require('child_process');

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});


export const incrementIfOdd = (): AppThunk => {
     var workerProcess = child_process.spawn('python', ['app/features/counter/test.py']);

     workerProcess.stdout.on('data', function (data) {      console.log('stdout: ' + data);});

     workerProcess.stderr.on('data', function (data) {      console.log('stderr: ' + data);});

     workerProcess.on('close', function (code) {      console.log('子进程已退出，退出码 '+code);});

};

export const incrementAsync = (delay = 1000): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};

export default counterSlice.reducer;

export const selectCount = (state: RootState) => state.counter.value;
