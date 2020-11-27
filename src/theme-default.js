import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey400, grey800} from 'material-ui/styles/colors';
//顶部导航栏与左侧导航颜色设置
const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blueGrey400
  },
  drawer: {
    width: 230,
    color: grey800
  },
  raisedButton: {
    primaryColor: blueGrey400,
  }
});


export default themeDefault;
