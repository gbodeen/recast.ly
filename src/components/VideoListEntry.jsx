

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  // playClicked() {
  //   this.props.appState.playing = this.props.id;
  //   console.log(this.props);
  // }


  render() {
    return (
      <div className="video-list-entry media" onClick={this.props.changeVideo(this.props.id)}>
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.image} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.title}</div>
          <div className="video-list-entry-detail">{this.props.description}</div>
        </div>
      </div>
    );
  }
}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
