import { Button } from './styles/components';

export const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#e5e5e5',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button>Ola mundo</Button>
    </div>
  );
};
