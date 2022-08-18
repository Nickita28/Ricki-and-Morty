import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// menu
const  Header = () => {         
  return(
    <Menu mode="horizontal" defaultSelectedKeys={['home']}>
      <Menu.Item key="home" icon={<SettingOutlined />}>
        <Link to={'/'}>Home</Link>
      </Menu.Item>
      <Menu.Item key="SubMenu"  icon={<AppstoreOutlined />}>
        <Link to={'Characters'}>Characters</Link>
      </Menu.Item>
    </Menu>
  )
};

export default Header;