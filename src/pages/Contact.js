import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label htmlFor="name" required>
          Name
        </label>
        <br />
        <input id="name" type="text" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          /* type="email" */
          pattern="/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/"
          required
        />
        <br />
        <label htmlFor="message" required>
          Message
        </label>
        <br />
        <textarea id="message" type="text" />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
