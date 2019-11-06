import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Head from './containers/Head';
import AddTodo from './containers/AddTodo';
import TodoItem from './containers/TodoItem';
import WorkSpace from './containers/WorkSpace';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

// import './App.css'

function App() {
  return (
    <div className="App">
        <Layout  
          style={{
            background: '#fff'
          }}
        >
          <Sider width={200} style={{ background: '#f0f2f5' }}>
            <WorkSpace/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
            {/* */}
            <Head/>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 480,
              }}
            >
              <AddTodo/>
              <TodoItem/>
            </Content>
          </Layout>
        </Layout>
    </div>
  );
}

export default App;
