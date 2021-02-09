function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}

export const retrieveData = arr => {
  const nonVideo = [];
  const newArr = [];
  const second = 3;
  let size = 4;
  let index = 0;

  const videos = arr.filter(function (item) {
    const video = item.has_video;
    if (!video) nonVideo.push(item);
    return video;
  });

  for (let i = 0; i < nonVideo.length; i++) {
    if (size === i && videos.length !== 0 && index < videos.length) {
      newArr.push(videos[index]);
      index++;
      size += second;
    }

    newArr.push(nonVideo[i]);
  }

  return chunkArray(
    [...newArr.filter(item => item), ...videos.slice(index)],
    14
  );
};
