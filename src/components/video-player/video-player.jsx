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
    const {src, poster, widthPlayer, heightPlayer, playerControl = false} = this.props;

    return (
      <video
        controls = {playerControl}
        preload="none"
        width={widthPlayer}
        height={heightPlayer}
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
  playerControl: PropTypes.bool,
  poster: PropTypes.string.isRequired,
  widthPlayer: PropTypes.string.isRequired,
  heightPlayer: PropTypes.string.isRequired,

};

export default VideoPlayer;

