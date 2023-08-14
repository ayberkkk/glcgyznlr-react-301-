import React from "react";
import { Formik, Field, Form } from "formik";
import validationScheme from "./validation";
import { useTodo } from "../../../../contexts/TodoContext";

const Header = () => {
  const { addTodo } = useTodo();
  return (
    <header class="header">
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={(values, bag) => {
          console.log(values);

          addTodo(values.text);

          bag.resetForm();
        }}
        validationScheme={validationScheme}
      >
        <Form>
          <Field
            class="new-todo"
            id="text"
            type="text"
            name="text"
            placeholder="What needs to be done?"
            autoFocus
          />
        </Form>
      </Formik>
    </header>
  );
};

export default Header;
