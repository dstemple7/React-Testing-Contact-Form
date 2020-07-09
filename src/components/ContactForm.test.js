import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("contact form adds new contact to contact list", () => {
  const { getByLabelText, queryByPlaceholderText} = render(<ContactForm />);

  // query for the form inputs
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  // fireEvent function from RTL to fill in the inputs
  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "David" }
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Temple" }
  });
  fireEvent.change(emailInput, {
    target: { name: "email", value: "david@david.com" }
  });
  fireEvent.change(messageInput, {
    target: { name: "message", value: "david was here" }
  });

  // query for the submit button
  const submitButton = queryByPlaceholderText(/submit/i);
  fireEvent.click(submitButton);

  screen.getByDisplayValue(/temple/i)
});