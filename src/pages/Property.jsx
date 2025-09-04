import Card from "../components/layouts/Card";
import { properties } from "../utils/data";
import FormFlow from "./admin/formComponents/FormFlow";

const Property = () => {
  // const properties = [
  //   {
  //     image: ["property1.jpg", "property2.jpg", "property3.jpg"],
  //     location: "New York, USA",
  //     area: 1500,
  //     bedrooms: 3,
  //     bathrooms: 2,
  //     parking: 1,
  //   },
  //   {
  //     image: ["property7.jpg", "property5.jpg", "property6.jpg"],
  //     location: "Los Angeles, USA",
  //     area: 1900,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     parking: 2,
  //   },
  //   {
  //     image: ["property8.jpg", "property6.jpg", "property5.jpg"],
  //     location: "New York City, USA",
  //     area: 1100,
  //     bedrooms: 2,
  //     bathrooms: 1,
  //     parking: 1,
  //   },
  //   {
  //     image: ["property8.jpg", "property1.jpg", "property4.jpg"],
  //     location: "San Francisco, USA",
  //     area: 1800,
  //     bedrooms: 4,
  //     bathrooms: 2,
  //     parking: 1,
  //   },
  //   {
  //     image: ["property5.jpg", "property6.jpg", "property7.jpg"],
  //     location: "Miami, USA",
  //     area: 3000,
  //     bedrooms: 2,
  //     bathrooms: 2,
  //     parking: 1,
  //   },
  //   {
  //     image: ["property1.jpg", "property4.jpg", "property6.jpg"],
  //     location: "Chicago, USA",
  //     area: 1200,
  //     bedrooms: 5,
  //     bathrooms: 3,
  //     parking: 2,
  //   },
  //   // {
  //   //     image :"property7.jpg",
  //   //     location:"Los Angeles, USA",
  //   //     area: 2000 ,
  //   //     bedrooms: 3,
  //   //     bathrooms: 2,
  //   //     parking :1
  //   // },
  // ];

  // const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedType, setSelectedType] = useState(null);

  // const toggleDropdown = () => {
  //   setShowDropdown((prev) => !prev);
  // };

  return (
    <div className="propertylist-container">
      {/* <div className="propertylist-header">
        <button
          type="button"
          className="add-property"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          Add Property ▾
        </button>

        {showDropdown && (
          <div className="dropdown-menu">
            <button type="button" onClick={() => setSelectedType("Building")}>
              Building
            </button>
            <button type="button" onClick={() => setSelectedType("Flat")}>
              Flat
            </button>
          </div>
        )}
      </div>
      <div className="propertylist-content">
        {selectedType ? (
          <FormFlow type={selectedType} />
        ) : (
          properties.map((property, index) => (
            <Card key={index} {...property} />
          ))
        )}
      </div> */}

      <div className="propertylist-content">
        {properties.map((property, index) => (
          <Card key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Property;
