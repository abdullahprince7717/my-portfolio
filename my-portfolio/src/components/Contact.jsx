import {useState} from 'react'

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  })
  return (
    <div className='md:w-[85%] lg:w-[65%] mx-auto '>
      <p className='text-2xl font-semibold my-4'>Contact</p>
      <form action="https://getform.io/f/lbjkkroa" method="post" className='text-black'>
        <div className='flex flex-col gap-4'>
          <input name='name' type="text" placeholder='Name' className='p-2' onChange={(e)=> setContact({...contact, name: e.target.value})} />
          <input name='email' type="email" placeholder='Email' className='p-2' onChange={(e)=> setContact({...contact, email: e.target.value})} />
          <textarea name='message' placeholder='Message' className='p-2 min-h-60' onChange={(e)=> setContact({...contact, message: e.target.value})}></textarea>
          <button type='submit' className='p-2 bg-[#112240] text-white rounded-md'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact