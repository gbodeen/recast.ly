import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {

  $.ajax(
    {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      dataType: 'json',
      success: (obj) => console.log(obj),
      error: () => console.log('ERROR'),
      data: JSON.stringify({
        key: YOUTUBE_API_KEY,
        q: 'Chubawumba',
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true'
      }).replace(/"/g, '').replace(/:/g, '=').replace(/,/g, '&').slice(1, -1)
    });
};

export default searchYouTube;
