import { useParams } from 'react-router-dom'
import videoData from '../mock-data/videos.json'
import playlistData from '../mock-data/playlists.json'
import VideoItem from '../components/video-item';

// Create a map so finding the videos isn't O(n^2) and doesn't
// rely on any params so can be moved outside of component
const videoMap = videoData.reduce((_videoMap, video) => {
  return {
    ..._videoMap,
    [video.id]: {
      ...video
    }
  }
}, {});

export function PlaylistVideos() {
  const params = useParams();
  const playlist = playlistData.find((_playlist) => _playlist.id === parseInt(params.id || ''));
  const videos = playlist?.videoIds.map((video) => videoMap[video] || {}) || [];

  return (
    <main>
      <h1>Playlist route for playlist id: {params.id}</h1>
      <div>
        {/* Ensure videos has data / falls back if not */}
        {videos?.length > 0 
          ? 
            videos.map((video) => {
              if (video?.id) {
                return (
                  <VideoItem key={video.id} video={video}/>
                )
              }
            }) 
          : 
            <h3>No videos found</h3>
        } 
      </div>
    </main>
  )
}