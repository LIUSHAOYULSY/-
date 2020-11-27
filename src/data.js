import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Cached, { ActionCached } from 'material-ui/svg-icons/action/cached';

const data = {
  menus: [
    { text: '主页面', icon: <Assessment/>, link: '/dashboard' },
    { text: '个人信息', icon: <Web/>, link: '/form' },
    { text: '列表', icon: <GridOn/>, link: '/table' },
    { text: '登陆页面', icon: <PermIdentity/>, link: '/login' },
    { text: '相机页面', icon: <Cached/>, link: '/camera' },
  ],
  tablePage: {              //可以存储每次的记录
    items: [
      {id: 1, name: 'Product 1', price: '1', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '1', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '0', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '0', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '0', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '1', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '1', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '0', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [         //记录设备
      {id: 1, title: 'SONY', text: 'SONY CAMERA'},
      {id: 2, title: 'CANON', text: 'ENNNNNN'},
      {id: 3, title: 'SUMSUNG', text: 'GOOOOOOOOOOOD '},
      {id: 4, title: 'PC', text: 'NORMAL'}
    ],
    monthlySales: [         //每月的测试人数，柱状图
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [         //同上的曲线图
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [      //制作戴口罩，不戴口罩的人数
      {name: 'WEAR', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'NOT WEAR', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'UNKNOWN', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
