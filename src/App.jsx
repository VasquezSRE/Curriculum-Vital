import 'assets/styles/layout.scss';
import Layout from 'components/templates/Layout';
import Sidebar from 'components/templates/Sidebar';
import Content from 'components/templates/Content';
import Home from 'pages/Home';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Sidebar />
        <Content>
          <Home />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
