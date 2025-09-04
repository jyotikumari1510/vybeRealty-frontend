import "../../styles/components/card.scss";
import { FaBed, FaBath, FaCar, FaMapMarkerAlt, FaArrowRight,FaArrowLeft} from "react-icons/fa";
// PropertyCard.jsx or App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

const PropertyCard = ({
  image,
  location,
  area,
  bedrooms,
  bathrooms,
  parking,
}) => {


// For Slide the image next or prev through with the icon button

// const NextArrow = ({ onClick }) => {
//   return (
//     <button
//       className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//       onClick={onClick}
//     >
//        <span className="text-black text-2xl font-bold">{">"}</span>
//     </button>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <button
//       className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//       onClick={onClick}
//     >
//        <span className="text-black text-2xl font-bold">{"<"}</span>
//     </button>
//   );
// };

// carousel Setting
const settings ={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow/>,
};

  return (
    <div className="property-card">
      {/* Image */}
      {/* <img src={image} alt={location} className="property-card__image" /> */}
      {/* Image Carousel */}
      <Slider {...settings} >
        {image.map((img, index) => (
          <div key={index} >
            <img
              className="property-card__image"
              src={img}
              alt={`property-${index}`}
            //   className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Details */}
      <div className="property-card__content">
        {/* Location */}
        <div className="property-card__location">
          <FaMapMarkerAlt className="mr-2 text-red-500"></FaMapMarkerAlt>
          <span>{location}</span>
        </div>

        {/* Area */}
        <p className="property-card__area">{area}sqft</p>

        {/* Icons Row */}
        <div className="property-card__details">
          <div className="flex items-center">
            <FaBed className="mr-1 text-blue-500" /> {bedrooms}
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-green-500" /> {bathrooms}
          </div>
          <div className="flex items-center">
            <FaCar className="mr-1 text-yellow-500" /> {parking}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
