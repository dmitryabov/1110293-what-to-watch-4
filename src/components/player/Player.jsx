import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";


const WIDTH_PLAYER = `1024`;
const HEIGHT_PLAYER = `675`;

class Player extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler() {
    this.setState({
      isPlaying: true
    });
  }


  render() {
    const handlePlayClick = this.props.handlePlayClick;
    const {poster, video} = this.props;

    const playClick = () => {
      handlePlayClick(0);
    };

    return (
      <div className="player" onClick={this._onClickHandler}>
        <VideoPlayer
          src={video}
          isPlaying={this.state.isPlaying}
          poster={poster}
          widthPlayer={WIDTH_PLAYER}
          heightPlayer={HEIGHT_PLAYER}
          playerControl={true}
        />

        <button type="button" onClick={playClick} className="player__exit">Exit</button>

      </div>
    );
  }
}


Player.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string
    )
  }
  ),
  handlePlayClick: PropTypes.func,
  poster: PropTypes.string,
  video: PropTypes.string.isRequired,
};

export default Player;

