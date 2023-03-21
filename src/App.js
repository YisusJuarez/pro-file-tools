import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { SideNav } from './components/SideNav';
import { menuItems } from './data/menuItems';
import { Lyrics } from './pages/Lyrics';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='flex flex-col h-screen'>
          <NavBar></NavBar>
          <div className='flex h-full '>
            <div class="flex-none w-44 bg-neutral-900 border-neutral-700 border">
              <SideNav menuItems={menuItems}></SideNav>
            </div>
            <div class="flex-1 w-auto bg-neutral-900 border-neutral-800 border p-4">
              <Routes>
                <Route path="/" element={<></>} />
                <Route path="/lyricstopro" element={<Lyrics />} />
              </Routes>
            </div>
          </div>

        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
