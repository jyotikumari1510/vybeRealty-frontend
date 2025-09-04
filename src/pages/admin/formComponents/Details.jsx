import React from "react";
import MyDropDown from "../../../components/atoms/MyDropDown";
import { useForm } from "react-hook-form";
import MyTextarea from "../../../components/Atoms/MyTextarea";
import MyButton from "../../../components/atoms/MyButton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MyInputs from "../../../components/atoms/MyInputs";

const Details = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      propertyId: "",
    },
  });

  const propertyType = watch("propertyType");
  // const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    onSubmitForm(data);
    // navigate("/admin/survey/2");
  };

  return (
    <div className="formCont-bg">
      <div
        style={{
          // backgroundColor: "rgba(0,0,0,0.5)",
          // boxShadow: "20px 20px 50px 15px grey",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="details-form">
            <motion.div>
              <h1 className="detail-head">Fill Detail Information</h1>
              <div>
                <div className="form-grid">
                  <div>
                    <MyInputs
                      // {...register("price", { required: "Price is required" })}
                      type="number"
                      placeholder="Price"
                      className={errors.price ? "input errorInput" : "input"}
                    />
                    {/* {errors.price && (
                      <span className="errorText">{errors.price.message}</span>
                    )} */}
                  </div>

                  <div>
                    <MyInputs
                      // {...register("propertySize", {
                      //   required: "Property size is required",
                      // })}
                      type="text"
                      placeholder="Property Size (sq ft)"
                      className={
                        errors.propertySize ? "input errorInput" : "input"
                      }
                    />
                    {/* {errors.propertySize && (
                      <span className="errorText">
                        {errors.propertySize.message}
                      </span>
                    )} */}
                  </div>

                  <div>
                    <MyInputs
                      // {...register("parkingSpace", {
                      //   required: "Parking space info is required",
                      // })}
                      type="text"
                      placeholder="Parking Space"
                      className={
                        errors.parkingSpace ? "input errorInput" : "input"
                      }
                    />
                    {/* {errors.parkingSpace && (
                      <span className="errorText">
                        {errors.parkingSpace.message}
                      </span>
                    )} */}
                  </div>
                </div>

                <div className="form-grid2">
                  <div>
                    <MyInputs
                      // {...register("developerName", {
                      //   required: "Developer name is required",
                      // })}
                      type="text"
                      placeholder="Developer Name"
                      className={
                        errors.developerName
                          ? "input errorInput streach"
                          : "input"
                      }
                    />
                    {/* {errors.developerName && (
                      <span className="errorText">
                        {errors.developerName.message}
                      </span>
                    )} */}
                  </div>

                  <div>
                    <MyDropDown
                      // {...register("propertyType", {
                      //   required: "Please select an option",
                      // })}
                      options={[
                        { value: "office", label: "Office" },
                        { value: "apartment", label: "Apartment" },
                        { value: "villa", label: "Villa" },
                      ]}
                      className={
                        errors.propertyType ? "input errorInput" : "select"
                      }
                    />
                    {/* {errors.propertyType && (
                      <span className="errorText">
                        {errors.propertyType.message}
                      </span>
                    )} */}
                  </div>

                  {propertyType === "apartment" && (
                    <div>
                      <MyInputs
                        // {...register("bedroom", {
                        //   required: "Number of bedrooms is required",
                        // })}
                        type="number"
                        placeholder="Number of Bedrooms"
                        className={
                          errors.bedroom ? "input errorInput" : "input"
                        }
                      />
                      {/* {errors.bedroom && (
                        <span className="errorText">
                          {errors.bedroom.message}
                        </span>
                      )} */}
                    </div>
                  )}

                  <div>
                    <MyInputs
                      // {...register("propertyId", {
                      //   required: "PropertyId is required",
                      // })}
                      type="text"
                      placeholder="Enter Property ID"
                      className={
                        errors.propertyId ? "input errorInput" : "input"
                      }
                    />
                    {/* {errors.propertyId && (
                      <span className="errorText">
                        {errors.propertyId.message}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>

              {/* Full-width description textarea
      <div className="form-grid">
        <div className="full-width">
          <MyTextarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter property description"
            rows={6}
            cols={60}
            className={errors.description ? "error" : "textarea"}
          />
          {errors.description && <span className="errorText">{errors.description.message}</span>}
        </div>
      </div> */}

              <div className="button-cont">
                {/* <MyButton type="submit" className="formButton" name="Submit">
                  Submit
                </MyButton> */}
                <MyButton type="submit" className="formButton" name="Next">
                  Next{" "}
                </MyButton>
              </div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
