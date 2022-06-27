import React from "react";

function VideoVestidos() {
  return (
    <div className="mb-12 mt-12">
      <div>
        <div className="videoWrapper ">
          <iframe
            src="https://player.vimeo.com/video/50855881?autoplay=1&loop=1&autopause=0&muted=1"
            // hay que borrar lo que dice h=numeros? y agregale todo lo que dice despues de autoplay.
            // linkn con la data https://www.youtube.com/watch?v=SGwHsszcASo
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Vídeo de YouTube */}
          {/* ;
          <iframe
            width="662"
            height="372"
            src="https://www.youtube.com/embed/3nZwtkdjLD0?controls=0&showinfo=0&title=0&rel=0&autoplay=1&mute=1&loop=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}
export default VideoVestidos;
