import './App.css';
import NavMenu from './components/NavMenu/NavMenu'
import Centerblock from './components/Centerblock/Centerblock';
import Sidebar from './components/Sidebar/Sidebar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';




function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <Centerblock />
          <Sidebar />
        </main>
        <AudioPlayer />
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
