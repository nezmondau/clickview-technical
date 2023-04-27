import videoData from '../mock-data/videos.json'
import VideoItem from '../components/video-item'

export function Videos() {
  return (
    <main>
      <h1>Videos route</h1>
      <div>
        {/* Ensure videoData has data / falls back if not */}
        {videoData?.length > 0 
          ? 
            videoData.map((video) => {
              return (
                <VideoItem key={video.id} video={video}/>
              )
            }) 
          : 
            <h3>No videos found</h3>
        } 
      </div>
    </main>
  )
}