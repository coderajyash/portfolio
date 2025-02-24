import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-4xl text-center'>Get in Touch</h2>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 text-center tracking-tighter'>
        <span className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-400'>
          Contact: {CONTACT.number}
        </span>
        <span className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-400'>
          Email: {CONTACT.email}
        </span>
      </div>
    </div>
  );
};

export default Contact;
