import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import white_arrow from '../../assets/white-arrow.png';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Only numbers allowed')
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number can be max 15 digits')
        .required('Phone number is required'),
      message: Yup.string()
        .required('Message cannot be empty'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting, setStatus }) => {
      const formData = new FormData();
      formData.append("access_key", "5a974608-f3c7-417a-a015-1a719271004c");
      formData.append("name", values.name);
      formData.append("Phone", values.phone);
      formData.append("message", values.message);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          setStatus("Form submitted successfully");
          resetForm();
        } else {
          setStatus(data.message);
        }
      } catch (error) {
        setStatus("Something went wrong");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className='contact my-[80px] mx-auto max-w-[90%] flex flex-col md:flex-row items-center justify-between gap-[40px]' id='contact'>
      <div className='contact-col md:basis-[48%] text-paragraph'>
        <h3 className='text-titleH2 text-[25px] flex items-center mb-[20px]'>
          Send us a message <img src={msg_icon} alt="message-icon" className='w-[35px] ml-[10px]' />
        </h3>
        <p className='max-w-[450px] leading-[1.3]'>
          Feel free to reach out through contact form or find our contact information below...
        </p>
        <ul>
          <li className='flex items-center my-[20px]'><img src={mail_icon} className='w-[25px] mr-[10px]' /> contact@example.com</li>
          <li className='flex items-center my-[20px]'><img src={phone_icon} className='w-[25px] mr-[10px]' /> +1 123-456-789</li>
          <li className='flex items-center my-[20px]'><img src={location_icon} className='w-[25px] mr-[10px]' /> 77 Massachusettes Ave, Cambridge MA</li>
        </ul>
      </div>

      <div className='contact-col md:basis-[48%] w-full max-w-[500px]'>
        <form onSubmit={formik.handleSubmit}>
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder='Please enter your name'
            className='block w-full bg-inputText p-[15px] border-0 outline-0 mb-[5px] mt-[5px] rounded-md'
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mb-[15px]">{formik.errors.name}</p>
          )}

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]*"
            inputMode="numeric"
            onKeyDown={(e) => {
              const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
              if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder='Please enter your mobile number'
            className='block w-full bg-inputText p-[15px] border-0 outline-0 mb-[5px] mt-[5px] rounded-md'
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm mb-[15px]">{formik.errors.phone}</p>
          )}

          <label>Write your messages here:</label>
          <textarea
            name="message"
            rows="6"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder='Enter your message'
            className='block w-full bg-inputText p-[15px] border-0 outline-0 mb-[5px] mt-[5px] resize-none rounded-md'
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mb-[15px]">{formik.errors.message}</p>
          )}

          <button
            type="submit"
            className='py-[14px] px-[25px] text-[16px] rounded-full cursor-pointer border-none outline-none inline-flex items-center justify-center bg-title text-white'
            disabled={formik.isSubmitting}
          >
            Submit Now <img src={white_arrow} alt="arrow" className='pl-[14px]' />
          </button>
          {formik.status && (
            <span className='block my-[20px] text-green-600'>{formik.status}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
