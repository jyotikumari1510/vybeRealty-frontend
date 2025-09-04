import MyTextarea from "../components/atoms/MyTextarea";

const AboutUs = () => {
  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        alignItems: "center",
        margin: "auto",
        marginBottom: "1rem",
      }}
    >
      <MyTextarea placeholder="Enter here about section" rows="10" cols="5" />
    </div>
  );
};
export default AboutUs;
