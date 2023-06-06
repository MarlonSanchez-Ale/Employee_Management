import React from 'react'
import { useReducer } from 'react'
import { BsPlus } from 'react-icons/bs'
import Success from './success'
import Bug from './bug'
import { useQueryClient, useMutation, QueryClient } from 'react-query'
import { addEmployee, getAllEmployees } from '@/lib/helper'




export default function AddUserForm({ formData, setFormData }) {

  const queryClient = useQueryClient();

  const addMutation = useMutation(addEmployee, {
    onSuccess: () => {
      queryClient.prefetchQuery('employees', getAllEmployees)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) return console.log("Don't have Form Data")

    let { firstname, lastname, email, salary, birth_date, status } = formData;
    //console.log(formData)

    const model = {
      name: `${firstname} ${lastname}`,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10)}.jpg`,
      email, salary, birth_date, status: status ?? "ACTIVE"
    }

    addMutation.mutate(model)
  }


  if (addMutation.isLoading) return <div>Loading!!!</div>
  if (addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
  if (addMutation.isSuccess) return <Success message={"Add Successfully"} />

  return (
    <form className='grid lg:grid-cols-2 w-4/6 gap-4' onSubmit={handleSubmit}>
      <div className='input-type'>
        <input type='text' required name='firstname' onChange={setFormData} placeholder='FirstName' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='text' name='lastname' required onChange={setFormData} placeholder='LastName' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='email' name='email' required onChange={setFormData} placeholder='Email' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='number' name='salary' required onChange={setFormData} placeholder='Salary' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='date' name='birth_date' required onChange={setFormData} placeholder='Salary' className='border px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='flex gap-10 items-center'>
        <div className='form-check'>
          <input
            type='radio'
            name='status'
            value='ACTIVE'
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer '
            id='radioDefault1'
            onChange={setFormData}
          />
          <label htmlFor='radioDefault1' className='inline-block text-gray-800 '>Active </label>
        </div>
        <div className='form-check'>
          <input
            type='radio'
            name='status'
            value='INACTIVE'
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer '
            id='radioDefault2'
            onChange={setFormData}
          />
          <label htmlFor='radioDefault2' className='inline-block text-gray-800 '>Inactive </label>
        </div>
      </div>

      <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        <span className='px-1'><BsPlus size={25} /></span> Add
      </button>
    </form>
  )
}
