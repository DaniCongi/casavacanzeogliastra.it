import './VideoSection.css';

function VideoSection() {
  return (
    <section className="video-section">
      {/* <h2>Scopri la Marina di Tertenia</h2> */}
      <div className="video-container">
        <video controls autoPlay loop muted width="100%">
          <source src="./src/video/marina-tertenia.mp4" type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;