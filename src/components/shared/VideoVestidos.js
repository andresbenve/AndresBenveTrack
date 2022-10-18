// import React from "react";

// function VideoVestidos() {
//   return (
//     <div className="mb-12 mt-12">
//       <div>
//         <div className="videoWrapper ">
//           {/* <iframe
//             src="https://player.vimeo.com/video/724974021?autoplay=1&loop=1&autopause=1&muted=1"
//             // hay que borrar lo que dice h=numeros? y agregale todo lo que dice despues de autoplay.
//             // linkn con la data https://www.youtube.com/watch?v=SGwHsszcASo
//             frameBorder="0"
//             allow="autoplay; fullscreen; picture-in-picture"
//             allowFullScreen
//           ></iframe> */}
//           {/* Vídeo de YouTube */};
//           <iframe
//             width="662"
//             height="372"
//             src="https://www.youtube.com/embed/3nZwtkdjLD0?controls=&rel=0"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default VideoVestidos;
// import React from "react";
// //import Script from "next/script";

// (function () {
//   var stopPlayAt = 10, // Stop play at time in seconds
//     stopPlayTimer; // Reference to settimeout call

//   // This code loads the IFrame Player API code asynchronously.
//   var tag = document.createElement("script");
//   tag.src = "//www.youtube.com/iframe_api";
//   var firstScriptTag = document.getElementsByTagName("script")[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   // This function creates an <iframe> (and YouTube player)
//   // after the API code downloads.
//   var player;
//   window.onYouTubeIframeAPIReady = function () {
//     player = new YT.Player("player", {
//       height: "315",
//       width: "560",
//       videoId: "xe-f4gokRBs",
//       events: {
//         onReady: onPlayerReady,
//         onStateChange: onPlayerStateChange,
//       },
//     });
//   };

//   // The API will call this function when the video player is ready.
//   // This automatically starts the video playback when the player is loaded.
//   function onPlayerReady(event) {
//     event.target.playVideo();
//   }

//   // The API calls this function when the player's state changes.
//   function onPlayerStateChange(event) {
//     var time, rate, remainingTime;
//     clearTimeout(stopPlayTimer);
//     if (event.data == YT.PlayerState.PLAYING) {
//       time = player.getCurrentTime();
//       // Add .4 of a second to the time in case it's close to the current time
//       // (The API kept returning ~9.7 when hitting play after stopping at 10s)
//       if (time + 0.4 < stopPlayAt) {
//         rate = player.getPlaybackRate();
//         remainingTime = (stopPlayAt - time) / rate;
//         stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000);
//       }
//     }
//   }
//   function pauseVideo() {
//     player.pauseVideo();
//   }
// })();

// function video() {
//   <div id="player"></div>;
// }

// export default video;
