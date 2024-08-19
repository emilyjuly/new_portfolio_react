import RoutesApp from './routes';
import LocaleProvider from './context/LocaleContext';
import './App.css';

function App() {
  return (
    <LocaleProvider>
      <div className="container">
        <RoutesApp />
      </div>
    </LocaleProvider>
  );
}

export default App;
