import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Login, Signup, MyProfile } from './pages';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/discover"
              element={
                <ProtectedRoute>
                  <App><Discover /></App>
                </ProtectedRoute>
              }
            />
            <Route
              path="/around-you"
              element={
                <ProtectedRoute>
                  <App><AroundYou /></App>
                </ProtectedRoute>
              }
            />
            <Route
              path="/top-artists"
              element={
                <ProtectedRoute>
                  <App><TopArtists /></App>
                </ProtectedRoute>
              }
            />
            <Route
              path="/top-charts"
              element={
                <ProtectedRoute>
                  <App><TopCharts /></App>
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-profile"
              element={
                <ProtectedRoute>
                  <App><MyProfile /></App>
                </ProtectedRoute>
              }
            />
            <Route
              path="/artists/:id"
              element={
                <ProtectedRoute>
                  <App><ArtistDetails /></App>
                </ProtectedRoute>
              }
            />
            <Route
              path="/songs/:songid"
              element={
                <ProtectedRoute>
                  <App><SongDetails /></App>
                </ProtectedRoute>
              }
            />
            <Route
              path="/search/:searchTerm"
              element={
                <ProtectedRoute>
                  <App><Search /></App>
                </ProtectedRoute>
              }
            />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/" exact element={<Login />} />

          </Routes>
        </UserAuthContextProvider>
      </Provider>
    </BrowserRouter>
    </ChakraProvider>
  </div>
);