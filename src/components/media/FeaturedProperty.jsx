export const FeaturedProperty = () => {
  return (
    <div className="featured-container">
      <h1 className="sub-heading">FEATURED PROPERTY LAUNCH</h1>
      <div className="video-wrapper">
        <video className="featured-video" controls>
          <source src="/top-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
