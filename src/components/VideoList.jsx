import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {exampleVideoData.map(video => {

      let title = video.snippet.title;
      let description = video.snippet.description;
      let image = video.snippet.thumbnails.default.url;
      let id = video.id.videoId;

      return (
        <VideoListEntry title={title} description={description} image={image} appState={props.appState} id={id} changeVideo={props.changeVideo} key={id} />
      );
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
