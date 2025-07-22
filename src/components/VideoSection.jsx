import './VideoSection.css';

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video controls autoPlay loop muted width="100%">
          <source src="./src/video/marina-tertenia.mp4" type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
        <div className="video-phrase">
          <h3>Le persone non fanno i viaggi, sono i viaggi che fanno le persone</h3>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;