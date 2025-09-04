/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import MyTextarea from "../../../components/atoms/MyTextarea";
import MyButton from "../../../components/atoms/MyButton";
import { motion } from "framer-motion";

const Features = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    onSubmitForm(data);
    // navigate("/admin/survey/3");
  };
  return (
    <div className="formCont-bg">
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
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
              <h1 className="detail-head">Fill Features </h1>

              <div className="" style={{ marginBlock: "10px" }}>
                <MyTextarea
                  {...register("Features", {
                    required: "Features are required",
                  })}
                  placeholder="Enter all features in seperated commas"
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
                <MyButton type="submit" className="formButton" name="Submit">
                  Submit
                </MyButton>
              </div>
              <MyButton type="submit" className="formButton" name="Finish" />
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
