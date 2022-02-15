import Mock from 'mockjs';
import shopDatas from './data.json';

// Mock.mock('/test',666);

Mock.mock('/api/getMockDatas',{
  code:0,
  data:shopDatas
});


