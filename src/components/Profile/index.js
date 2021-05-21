import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const Profile = (props) => {
  const image = useRef();
  useEffect(() => {
    anime({
      targets: image.current,
      translateY: [-500, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 700,
    });
  }, []);

  return (
    <img ref={image} src={props.profile} className="image" alt="profile" />
  );
};

export default Profile;
