import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BsPersonFillAdd, BsX, BsCheck } from 'react-icons/bs'
import Table from '@/components/elements/table'
import Form from '@/components/layout/form'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAction, toggleChangeAction } from '@/redux/reducer'
import { deleteEmployee, getAllEmployees } from '@/lib/helper'
import { useQueryClient } from 'react-query'
export default function Home() {

  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector(state => state.app.client.deleteId);
  const queryclient = useQueryClient();
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction())
  }

  const deletehandler = async () => {
    if (deleteId) {
      await deleteEmployee(deleteId)
      await queryclient.prefetchQuery('employees', getAllEmployees)
      await dispatch(deleteAction(null))
    }
  }

  const cancelhandler = async () => {
    await dispatch(deleteAction(null))
  }

  return (
    <section >
      <Head>
        <title>Admin Employee</title>
      </Head>
      <main className='py-5'>
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Hello world!
        </h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3'>
            <button onClick={handler} className='flex bg-indigo-600 text-white px-4 py-2 border rounded-md hover:bg-indigo-500 hover:border-indigo-500'>
              <span className='mr-2'>
                <BsPersonFillAdd size={20} />
              </span>
              Add Employee
            </button>
          </div>
          {deleteId ? DeleteComponent({ deletehandler, cancelhandler }) : <></>}
        </div>
        {/* collapsable form */}



        {visible ? <Form /> : <></>}



        {/* table */}
        <div className='container mx-auto'>
          <Table />
        </div>
      </main>

    </section>
  )
}


function DeleteComponent({ deletehandler, cancelhandler }) {
  return (
    <div className='flex gap-5'>
      <button>Are you sure?</button>
      <button onClick={deletehandler} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>
        Yes
        <span className='px-1'><BsX color='rgb(255 255 255)' size={25} /></span>
      </button>
      <button onClick={cancelhandler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-green-400 hover:border-green-500 hover:text-gray-50'>
        No
        <span className='px-1'><BsCheck color='rgb(255 255 255)' size={25} /></span>
      </button>
    </div>
  )
}