import { useState } from "react";

export const HomePage = () => {
  const [topVideo, setTopVideo] = useState(null);
  const [realEstateFiles, setRealEstateFiles] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState(null);

  const handleTopVideo = (e) => setTopVideo(e.target.files[0]);
  const handleRealEstateFiles = (e) => setRealEstateFiles([...e.target.files]);
  const handleFeaturedVideo = (e) => setFeaturedVideo(e.target.files[0]);

  return (
    <div className="home-container">
      <div className="home-form">
        <form>
          <label>Upload Top Video</label>
          <input type="file" accept="video/*" onChange={handleTopVideo} />

          <label>Upload Real Estate Services Files</label>
          <input type="file" multiple onChange={handleRealEstateFiles} />

          <label>Upload a Featured Launched Video</label>
          <input type="file" accept="video/*" onChange={handleFeaturedVideo} />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input placeholder="enter the title" type="text" />
            <textarea
              rows="2"
              cols="5"
              placeholder="Enter the description"
            ></textarea>
          </div>
        </form>
      </div>

      {/* Uploaded Data Preview */}
      <div className="uploaded-data">
        {topVideo && (
          <div>
            <h3>Top Video:</h3>
            <video controls width="300" src={URL.createObjectURL(topVideo)} />
          </div>
        )}

        {realEstateFiles.length > 0 && (
          <div>
            <h3>Real Estate Services Files:</h3>
            <ul>
              {realEstateFiles.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {featuredVideo && (
          <div>
            <h3>Featured Video:</h3>
            <video
              controls
              width="300"
              src={URL.createObjectURL(featuredVideo)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
