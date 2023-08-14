import * as Yup from "yup";

const validations = Yup.object().shape({
  text: Yup.string().required("Text is required"),
});

export default validations;