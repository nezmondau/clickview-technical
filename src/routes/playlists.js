import playlistData from '../mock-data/playlists.json'
import {PlaylistItem} from '../components/playlist-item';
import { useNavigate } from 'react-router-dom';

export function Playlists() {
  const navigate = useNavigate();
  const handlePlaylistClick = (id) => {
    navigate(`/playlists/${id}`);
  };

  return (
    <main>
      <h1>Playlists route</h1>
      <div>
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