import { useEffect, useState, useRef } from "react";
import $ from "jquery";
import "ytplayer";

const FirstView = () => {
  const [text, setText] = useState("");
  const isTypingRef = useRef(false);
  const typingElementRef = useRef(null);

  useEffect(() => {
    $("#videoPlay").YTPlayer();
  }, []);

  useEffect(() => {
    const Typing = (sentence:any) => {
      if (isTypingRef.current) return;
      isTypingRef.current = true;
      setText("");
      
      sentence.split("").forEach((character:any, index:any) => {
        setTimeout(() => {
          setText((prevText) => prevText + character);
          if (index === sentence.length - 1) {
            setTimeout(() => {
              isTypingRef.current = false;
            }, 500);
          }
        }, 80 * index);
      });
    };

    Typing("Made by React");
  }, []);

  return (
    <div className="video-container bg-dark" id="top">
      <div className="text-white" style={{ whiteSpace: "nowrap" }}>
        <h2 className="copy">
          <p ref={typingElementRef}>{text}</p>
        </h2>
      </div>
      <div
        id="videoPlay"
        data-property='{
          "videoURL": "jbBVV-BGtfY",
          "containment": ".video-container",
          "mute": true,
          "loop": true,
          "autoPlay": true,
          "startAt": 33,
          "showControls": false,
          "showYTLogo": false
        }'
      ></div>
    </div>
  );
};

export default FirstView;
