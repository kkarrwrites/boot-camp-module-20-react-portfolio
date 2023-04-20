import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlurChangeName = () => {
    if (!name) {
      setErrorMessage('A name is required.');
      return;
    }
  };
  const handleBlurChangeEmail = () => {
    if (!email) {
      setErrorMessage('A valid email address is required.');
      return;
    }
  };
  const handleBlurChangeMessage = () => {
    if (!message) {
      setErrorMessage('A message is required.');
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('A name is required.');
      return;
    }
    if (!validateEmail(email) || !email) {
      setErrorMessage('A valid email address is required.');
      return;
    }
    if (!message) {
      setErrorMessage('A message is required.');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label htmlFor="name" required>
          Name (Required)
        </label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlurChangeName}
          type="text"
          placeholder="Name"
          required
        />
        <label htmlFor="email" required>
          Email (Required)
        </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlurChangeEmail}
          type="email"
          placeholder="Email"
          required
        />
        <label htmlFor="message" required>
          Message (Required)
        </label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlurChangeMessage}
          type="text"
          required
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage}
    </section>
  );
}

export default Contact;
