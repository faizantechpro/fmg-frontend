import { Button, Card } from "antd";
import * as Yup from "yup";
import TextArea from "../Input/TextArea";
import TextInput from "../Input/TextInput";
import FileUpload from "../Input/FileUpload";
import { Formik, Form, Field } from "formik";
import { updateProfile } from "./profile.action";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const validateUser = Yup.object({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
  });

  const onFinish = (values) => {
    dispatch(updateProfile({ ...values }));
  };

  return (
    <Card className="dark:bg-[#0D567A] bg-white md:w-3/4 border-0 md:ml-4 rounded-md mt-8 md:mt-0">
      <div className="dark:text-white text-lg font-bold md:pl-6 pl-4">
        Profile
      </div>
      <div className="md:px-10 px-4">
        <Formik
          initialValues={{
            firstName: user?.firstName,
            lastName: user?.lastName,
            address: user?.address,
            eduction: user?.eduction,
            experience: user?.experience,
          }}
          validationSchema={validateUser}
          onSubmit={(values) => {
            (values.userId = user?._id), onFinish(values);
          }}
        >
          <Form>
            <h1 className="dark:text-white font-bold mt-2">First Name</h1>
            <TextInput
              name="firstName"
              type="text"
              placeholder="First Name"
              className="border rounded-lg dark:border-[#FFFFFF80] dark:text-[#FFFFFFBF] dark:bg-[#0D567A] bg-white text-base h-10 mb-2"
            />
            <h1 className="dark:text-white font-bold">Last Name</h1>
            <TextInput
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="border rounded-lg dark:border-[#FFFFFF80] dark:text-[#FFFFFFBF] dark:bg-[#0D567A] bg-white text-base h-10 mb-2"
            />
            <h1 className="dark:text-white font-bold">Address</h1>
            <TextArea
              name="address"
              className=" p-2 border-2 dark:border-[#FFFFFF80] dark:text-[#FFFFFFBF] dark:bg-[#0D567A] bg-white rounded text-base  my-4"
              placeholder="Address"
              rows={5}
            />
            <h1 className="dark:text-white font-bold">Education</h1>
            <TextInput
              name="education"
              type="text"
              placeholder="Education"
              className="border rounded-lg dark:border-[#FFFFFF80] dark:text-[#FFFFFFBF] dark:bg-[#0D567A] bg-white text-base h-10 mb-2"
            />
            <h1 className="dark:text-white font-bold">Work Experience</h1>
            <TextInput
              name="experience"
              type="text"
              placeholder="Work Experience"
              className="border rounded-lg dark:border-[#FFFFFF80] dark:text-[#FFFFFFBF] dark:bg-[#0D567A] bg-white text-base h-10 mb-2"
            />
            <h1 className="dark:text-white text-lg font-bold">Image Preview</h1>
            <div className="h-72 border rounded my-4 ">
              <Field name="image" component={FileUpload} />
            </div>
            <div className="flex justify-center">
              <Button
                size="large"
                htmlType="submit"
                // disabled={}
                className="h-10 w-28 flex justify-center font-bold text-base dark:bg-[#0897DD] bg-[#0897DD]  hover:bg-[#0897DD] dark:text-white rounded border-0"
              >
                Save
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Card>
  );
};

export default Profile;
