import React from 'react';
import { useNavigate } from 'react-router-dom';
import playlistData from '../mock-data/playlists.json'
import {PlaylistItem} from '../components/playlist-item';

export function Playlists() {
  const navigate = useNavigate();
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

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
  }


  return (
    <main>
      <h1>Playlists route</h1>
      <div>
        <div style={{marginBlock: '10px'}}> 

          {isCreateModalOpen ? 
            <div>
              <input type="text" class="form-control" style={{marginBlock: '5px'}} id="playlistName" aria-describedby="playlistName" placeholder="Enter playlist name"></input> 
              <button type="button" class="btn btn-primary" style={{marginRight: '5px'}} onClick={handleCreatePlaylist}>
                Submit
              </button>
            </div>
            :  
            <button type="button" class="btn btn-primary" style={{marginRight: '5px'}} onClick={() => setIsCreateModalOpen(true)}>
              Create Playlist
            </button>
          }
        </div>
        {/* Ensure playlistData has data / falls back if not */}
        {playlistData?.length > 0 
          ? 
            playlistData.map((playlist) => {
              return (
                <div onClick={() => {handlePlaylistClick(playlist.id)}} style={{cursor: 'pointer'}}>
                  <PlaylistItem key={playlist.id} playlist={playlist} />
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