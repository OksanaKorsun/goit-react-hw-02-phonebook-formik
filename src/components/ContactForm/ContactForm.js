// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   phoneInputId = nanoid();

//   handleChange = () => {};
//   handleSubmit = () => {};
//   render() {
//     return (
//       <form action="" onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>Name</label>
//         <input
//           type="text"
//           name="name"
//           id={this.nameInputId}
//           value={this.state.name}
//           onChange={this.handleChange}
//           required
//         />
//         <label htmlFor={this.phoneInputId}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           id={this.phoneInputId}
//           value={this.state.number}
//           onChange={this.handleChange}
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

import { Formik} from 'formik';
import {
  Form,
  StyledLabel,
  Field,
  FormButton,
  ErrorMessage
} from './ContactForm.styled';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .integer('Must be an integer')
    .min(1000000, 'Must be at least 7 digits')
    .max(9999999, 'Must be at most 7 digits')
    .required('Required'),
});

export const ContactForm = ({ updateContact }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema = {contactSchema}
        onSubmit={(values, actions) => {
          updateContact(values);
          actions.resetForm();
        }}
      >
        <Form>
          <StyledLabel htmlFor="name">
            Name:
            <Field name="name" />
            <ErrorMessage name="name" component="span"/>
          </StyledLabel>

          <StyledLabel htmlFor="number">
            Number:
            <Field name="number" type="tel" />
            <ErrorMessage name="number" component="span"/>
          </StyledLabel>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </div>
  );
};
