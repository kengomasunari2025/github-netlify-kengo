import { useEffect, useRef } from "react";
import YTPlayer from "";

const VideoPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      const player = new YTPlayer(playerRef.current, {
        autoplay: true,
      });

      player.load("M7lc1UVf-VE");

      return () => {
        player.destroy();
      };
    }
  }, []);

  return <div ref={playerRef} style={{ width: "640px", height: "360px" }} />;
};

export default VideoPlayer;
