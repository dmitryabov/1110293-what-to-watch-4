import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._movieVideoRef = React.createRef();
    this._movieVideoTimer = null;

    this.state = {
      isPlaying: this.props.isPlaying
    };
  }


  componentDidUpdate() {
    const movieVideo = this._movieVideoRef.current;

    const onPlay = () => {
      movieVideo.play();
    };

    if (this.props.isPlaying) {
      this._movieVideoTimer = setTimeout(onPlay, 1000);
    } else {
      clearTimeout(this._movieVideoTimer);
      movieVideo.load();
    }
  }

  componentWillUnmount() {
    const movieVideo = this._movieVideoRef.current;
    movieVideo.muted = true;
  }


  render() {
    const {src, poster} = this.props;

    return (
      <video
        preload="none"
        width="280"
        height="175"
        loop={true}
        autoPlay={false}
        src={src}
        poster={poster}
        ref={this._movieVideoRef}
        muted={true}
      />
    );
  }
}

VideoPlayer.propTypes = {

  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,

};

export default VideoPlayer;

