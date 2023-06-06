import React from 'react'
import { useReducer } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import Success from './success'
import Bug from './bug'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getEmployee, getAllEmployees, updateEmployee } from '@/lib/helper'

export default function UpdateUserForm({ formId, formData, setFormData }) {

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(['employees', formId], () => getEmployee(formId))
  const updateMutation = useMutation((newData) => updateEmployee(formId, newData), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery('employees', getAllEmployees)
    }
  })

  if (isLoading) return <div>Loading...!!!</div>
  if (isError) return <div>Error</div>

  const { name, avatar, salary, birth_date, email, status } = data.employees;
  const [firstname, lastname] = name ? name.split(' ') : formData


  const handleSubmit = async (e) => {
    e.preventDefault();

    /* if (Object.keys(formData).length === 0) return console.log("Don't have Form Data")
 
     console.log(formData)*/

    let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`

    //data.name = "admin" formData.name = "client"
    let updated = Object.assign({}, data.employees, formData, { name: userName })

   // console.log(updated)

    await updateMutation.mutate(updated)
  }

  if (updateMutation.isLoading) return <div>Loading!!!</div>
  if (updateMutation.isError) return <Bug message={updateMutation.error.message}></Bug>
  if (updateMutation.isSuccess) return <Success message={"Employee updated"} />

  return (
    <form className='grid lg:grid-cols-2 w-4/6 gap-4' onSubmit={handleSubmit}>
      <div className='input-type'>
        <input type='text' name='firstname' onChange={setFormData} defaultValue={firstname} placeholder='FirstName' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='text' name='lastname' onChange={setFormData} defaultValue={lastname} placeholder='LastName' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='email' name='email' onChange={setFormData} defaultValue={email} placeholder='Email' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='text' name='salary' defaultValue={salary} onChange={setFormData} placeholder='Salary' className='border w-full px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='input-type'>
        <input type='date' name='birth_date' defaultValue={birth_date} onChange={setFormData} placeholder='Salary' className='border px-5 py-3 focus:outline-none round-md' />
      </div>
      <div className='flex gap-10 items-center'>
        <div className='form-check'>
          <input
            type='radio'
            name='status'
            value='ACTIVE'
            defaultChecked={status === "ACTIVE"}
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
            defaultChecked={status === 'INACTIVE'}
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer '
            id='radioDefault2'
            onChange={setFormData}
          />
          <label htmlFor='radioDefault2' className='inline-block text-gray-800 '>Inactive </label>
        </div>
      </div>

      <button className='flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        <span className='px-1'><BsPencilSquare size={25} /></span> Update
      </button>
    </form>
  )
}
