import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Login, Signup, MyProfile } from './pages';

const App = ({ children }) => {
  const { activeSong } = useSelector((state) => state.player);


  const MainLayout = ({ children }) => {
    return (
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <Searchbar />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">

            <div className="flex-1 h-fit pb-40">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BaseLayout = ({ children }) => {
    return (
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <Searchbar />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">

            <div className="flex-1 h-fit pb-40">
              {children}
            </div>
            {activeSong?.title && (
              <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer />
              </div>
            )}
          </div>

        </div>
      </div>
    )
  }

  return (
    <>
      <MainLayout>{children}</MainLayout>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}

    </>
  );
};

export default App;