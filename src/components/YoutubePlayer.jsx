import ReactPlayer from 'react-player'
import { ENDPOINT_YOUTUBE } from '../constants';

const YoutubePlayer = ({ videoKey }) => (<ReactPlayer
  className="video-player"
  url={`${ENDPOINT_YOUTUBE}${videoKey}`}
  controls={true}
  playing={true}
  data-testid="youtube-player"
/>);

export default YoutubePlayer;