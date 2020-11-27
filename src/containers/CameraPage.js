import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey400} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import Data from '../data';



const CameraPage = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 300
    }
  };

  return (
    <PageBase title="相机测试">
      <div>
      <h1>outputData</h1>
    <p>Pure JavaScript QR code decoding library.</p>
    <div id="loadingMessage" v-if="!showCanvas">loadingMessage</div>
    <canvas
      width="canvasWidth"
      height="canvasHeight"
      id="canvas"
      v-show="showCanvas"
      ref="canvasElement"
    ></canvas>
    <div id="output" v-if="showCanvas">
      <div v-if="!outputData">No QR code detected.</div>
      <div v-else>
        <b>Data:</b>
        <span id="outputData">outputData</span>
      </div>
    </div>
    <button type="primary" onclick="openScan">开启扫描</button>
  </div>

    </PageBase>
  );
};

export default CameraPage;
