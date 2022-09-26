import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

function ContactForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [confirmation, setConfirmation] = useState(false)
const [setFormStatus] = React.useState('send')
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_erlt1s5',
      'template_1usposc',
      toSend,
      'uVzqg-NtsKjzAiYoV'
    )
    setFormStatus('Submitting...')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setEmail("")
            setMessage("")
            setName("")
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };

  return (
    <div className="container-contact">

        <div className="contact-title">
            <h2>Let's get in touch</h2>
        </div>

        <div className="contact-info">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
            <label className="form-label" 
                  htmlFor="from name" >
                  From
            </label>
            <input className="form-control"
            type='text'
            name='from_name'
            onChange={(e) => setName(e.target.value)} value={name} required
            placeholder='from name'
            
          />
        </div>

        {/* <div className="mb-3">
            <label className="form-label" 
                  htmlFor="to name" >
                 To
            </label>
            <input className="form-control"
              type='text'
              name='to_name'
              placeholder='to name'
              value={toSend.to_name}
              onChange={handleChange}
            />
        </div> */}
        <div className="mb-3">
            <label className="form-label" 
                  htmlFor="email" >
                 Email
            </label>
            <input className="form-control"
              type='text'
              name='reply_to' 
              onChange={(e) => setEmail(e.target.value)} value={email}required
              placeholder='Your email'
             
            
            />
          </div>
        <div className="mb-3">
            <label className="form-label" 
                  htmlFor="message" >
                 Message
            </label>
            <textarea className="form-control"
              type='text'
              name='message' 
              onChange={(e) => setMessage(e.target.value)} value={message}required
              placeholder='Your message'
             
            />
        </div>

        {confirmation ? <div className='confirmation-message'>
    <p>TYour message has been sent :)</p>
 </div> : null}
          <div className="buttons">
            <button type='submit'onClick={() => {setConfirmation(true)}}>Submit</button>
          </div>

      </form>


{/* 
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                <label className="form-label" 
                  htmlFor="name" >
                  Name
                </label>

                <input 
                  className="form-control" 
                  type="text" id="name" 
                  required placeholder="Jenny Doe"
                  value={toSend.name}
                  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                <label className="form-label" 
                  htmlFor="email">
                  Email
                </label>
                <input className="form-control" 
                type="email" id="email" 
                required placeholder="yourname@example.com"
                value={toSend.email}
                  onChange={handleChange}
                />
                </div>
                <div className="mb-3">
                <label className="form-label" 
                htmlFor="message">
                Message
                </label>
                <textarea className="form-control"
                 id="message" 
                 required placeholder="How can I help you?"
                 />
                </div>
                <div className="buttons">
                  <button type="submit" className="fade-in" ></button>
                </div>
            </form> */}

        </div>

    </div>
  )
}
export default ContactForm;