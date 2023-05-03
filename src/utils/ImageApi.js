import axios from 'axios';

// const config = {
//     url: 'https://unsplash.com/',
//     clientKey: 'HukBMyn30E4dkaRkxTKBm54ZAdA_ZNYtcoZWtKIsR-k'
// }

const getImages = async () => {
  const page = Math.floor(Math.random() * 20 + 1);
  const urlImages = `https://api.unsplash.com/search/photos?page=${page}&query=Landscape&client_id=HukBMyn30E4dkaRkxTKBm54ZAdA_ZNYtcoZWtKIsR-k`;

  const res = await axios.get(urlImages);
  const photos = res.data.results.map((image) => ({
    id: image.id,
    thumb: image.urls.thumb,
    full: image.urls.full,
    user: {
      username: image.user.username,
      link: image.user.links.html,
    },
  }));
  return photos;
};

export { getImages };
