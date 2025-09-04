import { useForm } from "react-hook-form";
import MyButton from "../../../components/atoms/MyButton";
import { motion } from "framer-motion";

const Description = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    onSubmitForm(data);

    // navigate("/");
  };

  return (
    <div className="formCont-bg">
      <div
        style={{
          // backgroundColor: "rgba(0,0,0,0.5)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="details-form"
            // style={{ height: "500px",overflowY:'auto',scrollbarColor:'auto' }}
            // style={{width:'700px'}}
          >
            <motion.div>
              <h1 className="detail-head">Fill Descriptions </h1>
              <div className="" style={{ marginBlock: "10px" }}>
                <MyTextarea
                  // {...register("description1", {
                  //   required: "Description is required",
                  // })}
                  placeholder="Enter property description"
                  rows={4}
                  cols={60}
                  className={
                    errors.description ? "textarea errorInput" : "textarea"
                  }
                />
                {/* {errors.description && (
                  <span className="errorText">
                    {errors.description.message}
                  </span>
                )} */}
              </div>

              <div className="" style={{ marginBlock: "10px" }}>
                <MyTextarea
                  {...register("placeDetail", {
                    required: "Details are required",
                  })}
                  placeholder="Enter place short detail in seperated commas"
                  rows={3}
                  cols={60}
                  className={
                    errors.description ? "textarea errorInput" : "textarea"
                  }
                />
                {errors.description && (
                  <span className="errorText">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div className="" style={{ marginBlock: "10px" }}>
                <MyTextarea
                  {...register("description2", {
                    required: "Description is required",
                  })}
                  placeholder="Enter property description"
                  rows={4}
                  cols={60}
                  className={
                    errors.description ? "textarea errorInput" : "textarea"
                  }
                />
                {errors.description && (
                  <span className="errorText">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div className="button-cont">
                {/* <MyButton type="submit" className="formButton" name="Submit">
                  Submit
                </MyButton> */}
                <MyButton type="submit" className="formButton" name="Next">
                  Next
                </MyButton>
              </div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
