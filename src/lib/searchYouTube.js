import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {

  $.ajax(
    {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      success: callback,
      error: () => console.log('ERROR'),
      data: options
    }
  );
};

export default searchYouTube;
