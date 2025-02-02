const VideoPlayer = () => {
  return (
    <iframe
      className="youtube-width"
      src="https://www.youtube.com/embed/DiU4ibWzEpg?si=ZgAzKNvvvAcFuzij"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //   referrerpolicy="strict-origin-when-cross-origin"
      //   allowfullscreen
    ></iframe>
  );
};

export default VideoPlayer;
