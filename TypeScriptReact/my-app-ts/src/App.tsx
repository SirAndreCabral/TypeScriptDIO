import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        Hello World
        <Card 
          id={1}
          details='TS'
          paragraph='Front com TS'
        />
        <Card 
          id={2}
          details='HTML'
          paragraph='Front com HTML'
          />
        <Card
          id={3}
          details='SQL'
          paragraph='Query SQL'
          />
      </Layout>
    </>
  );
}

export default App;
