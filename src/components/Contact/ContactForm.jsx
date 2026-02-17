import React, { useMemo, useState } from 'react'
import styles from './ContactForm.module.css'
import PrimaryButton from '../PrimaryButton'

const EMAIL_TO = 'umarasif650@gmail.com'

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    terms: false
  })

  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => {
    const next = {}
    if (!values.name.trim()) next.name = 'Name is required'
    if (!values.email.trim()) next.email = 'Email is required'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Enter a valid email'
    }
    if (!values.phone.trim()) next.phone = 'Phone is required'
    if (values.phone && !/^[0-9+()\-\s]{7,25}$/.test(values.phone)) {
      next.phone = 'Enter a valid phone'
    }
    if (!values.subject.trim()) next.subject = 'Subject is required'
    if (!values.message.trim()) next.message = 'Message is required'
    if (!values.terms) next.terms = 'You must accept the terms'
    return next
  }, [values])

  const isValid = Object.keys(errors).length === 0

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (!isValid) return

    const subject = encodeURIComponent(values.subject)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\nMessage:\n${values.message}`
    )
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={undefined}
          className={styles.input}
          placeholder="Enter Your Full Name"
        />
        {submitted && errors.name && <div className={styles.error}>{errors.name}</div>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={undefined}
          className={styles.input}
          placeholder="Enter Your Email Adderss"
        />
        {submitted && errors.email && <div className={styles.error}>{errors.email}</div>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={undefined}
          className={styles.input}
          placeholder="Enter Your Phone Number"
        />
        {submitted && errors.phone && <div className={styles.error}>{errors.phone}</div>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          onBlur={undefined}
          className={styles.input}
          placeholder="Enter Subject"
        />
        {submitted && errors.subject && <div className={styles.error}>{errors.subject}</div>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={undefined}
          className={styles.textarea}
          rows={5}
          placeholder="Write your message"
        />
        {submitted && errors.message && <div className={styles.error}>{errors.message}</div>}
      </div>

      <div className={styles.checkboxRow}>
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={values.terms}
          onChange={handleChange}
          onBlur={undefined}
        />
        <label htmlFor="terms">I accept the terms and conditions</label>
      </div>
      {submitted && errors.terms && <div className={styles.error}>{errors.terms}</div>}

      <div className={styles.buttonRow}>
        <PrimaryButton
          type="submit"
          btntxt="Send Message"
          disabled={!values.terms || !isValid}
        />
      </div>
    </form>
  )
}

export default ContactForm
