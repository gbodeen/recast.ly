import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: {
        id: {
          videoId: '1w8Z0UOXVaY'
        },
        snippet: {
          title: 'STAR WARS: A Bad Lip Reading',
          description: 'Vader keeps texting Leia, while Ben continues his quest for the Pickaxe of Cortez. Jack Black, Maya Rudolph, and Bill Hader guest.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg'
            }
          }
        }
      },

      videoList: exampleVideoData,

      query: ''

    };
    this.changeVideo = this.changeVideo.bind(this);
    this.search = this.search.bind(this);
    this.successCB = this.successCB.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  search(query) {
    console.log('searched for: ', query);
    searchYouTube({
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    }, this.successCB);
  }

  successCB(videos) {
    this.setState({
      videoList: videos.items,
      playing: videos.items[0]
    });
  }

  changeVideo(video) {
    return (
      () =>
        this.setState({
          playing: video
        })
    );
  }

  handleClick(e) {
    console.log(e.key);

    if (e.key === 'Enter') {
      this.search(this.state.query);
    } else {
      this.setState({
        query: e.target.value + e.key
      });
    }
  }

  // populateVideoList(video) {
  //   //console.log(this.state.videoList);
  //   return (
  //     this.setState({
  //       videoList: this.state.videoList.push(video)
  //     })
  //   );
  // }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="toptext">
            <h1>Yo' Tub</h1>
            <h2>it's not YouTube</h2>
          </div>
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.search} handleClick={this.handleClick} appState={this.state} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer appState={this.state} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList appState={this.state} changeVideo={this.changeVideo} /></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
