import React from 'react';
import { useNavigate } from 'react-router-dom';
import playlistData from '../mock-data/playlists.json'
import {PlaylistItem} from '../components/playlist-item';

export function Playlists() {
  const navigate = useNavigate();
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [state, setState] = React.useState(false);

  const handlePlaylistClick = (id) => {
    navigate(`/playlists/${id}`);
  };

  const handleCreatePlaylist = () => {
      const val = document.querySelector('input').value;
      playlistData.push({
        name: val,
        description: "",
        videoIds: [],
        id: Math.floor(Math.random() * 100),
        dateCreated: new Date(),
      });
      setIsCreateModalOpen(false);
  };

  const handleDeletePlaylist = (id) => {
    playlistData.map((playlist, idx) => {
      if (playlist.id === id) {
        playlistData.splice(idx, 1);
      }
    });
    setState(!state);
  };


  return (
    <main>
      <h1>Playlists route</h1>
      <div>
        <div style={{marginBlock: '10px'}}> 
          {isCreateModalOpen ? 
            <div>
              <input type="text" class="form-control" style={{marginBlock: '5px'}} id="playlistName" aria-describedby="playlistName" placeholder="Enter playlist name"></input> 
              <button type="button" class="btn btn-primary" onClick={handleCreatePlaylist}>
                Submit
              </button>
            </div>
            :  
            <button type="button" class="btn btn-primary" onClick={() => setIsCreateModalOpen(true)}>
              Create Playlist
            </button>
          }
        </div>

        {/* Ensure playlistData has data / falls back if not */}
        {playlistData?.length > 0 
          ? 
            playlistData.map((playlist) => {
              return (
                <div>
                <div onClick={() => {handlePlaylistClick(playlist.id)}} style={{cursor: 'pointer'}}>
                  <PlaylistItem key={playlist.id} playlist={playlist} />
                </div>
                
                 <button type="button" class="btn btn-primary" style={{marginBlock: '5px'}}onClick={() => handleDeletePlaylist(playlist.id)}>
                 Delete Playlist
               </button>
               </div>
               
              )
            }) 
          : 
            <h3>No videos found</h3>
        }
      </div>
    </main>
  );
}