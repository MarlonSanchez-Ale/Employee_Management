import React from 'react'
import Image from 'next/image'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'
import { getAllEmployees } from '@/lib/helper'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction, deleteAction } from '@/redux/reducer'

export default function Table() {

    const { isLoading, isError, data, error } = useQuery('employees', getAllEmployees)

    if (isLoading) return <div>Employee is Loading...</div>
    if (isError) return <div>Got Error {error}</div>

    return (
        <table className=' table-auto'>
            <thead>
                <tr className='bg-gray-800'>
                    <th className='px-16 py-2'>
                        <span className='text-gray-200'>Name</span>
                    </th>
                    <th className='px-16 py-2'>
                        <span className='text-gray-200'>Email</span>
                    </th>
                    <th className='px-16 py-2'>
                        <span className='text-gray-200'>Salary</span>
                    </th>
                    <th className='px-16 py-2'>
                        <span className='text-gray-200'>Birthday</span>
                    </th>
                    <th className='px-16 py-2'>
                        <span className='text-gray-200'>Status</span>
                    </th>
                    <th className='px-16 py-2'>
                        <span className='text-gray-200'>Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className='bg-gray-200'>
                {
                    data.employees.map((obj, i) => <Tr {...obj} key={i} />)
                }
            </tbody>
        </table>

    )
}


function Tr({ id, name, avatar, email, salary, birth_date, status }) {

    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()

    const onUpdate = () => {
        dispatch(toggleChangeAction(id))

        if (visible) {
            dispatch(updateAction(id))
        }
    }

    const onDelete = () => {
        if (!visible) {
            dispatch(deleteAction(id))
        }
    }

    return (
        <tr className='bg-gray-50 text-center'>
            <td className='px-5 py-2 flex flex-row items-center gap-3'>
                <img src={avatar || '#'} alt='' className='h-8 w-8 rounded-full object-cover' />
                <span className='text-center '>{name || "Unknown"}</span>
            </td>
            <td className='px-10 py-2'>
                <span className=''>{email || "Unknown"}</span>
            </td>
            <td className='px-10 py-2'>
                <span className=''>$ {salary || "Unknown"}</span>
            </td>
            <td className='px-10 py-2'>
                <span className=''>{birth_date || "Unknown"}</span>
            </td>
            <td className='px-10 py-2'>
                <button className='cursor'>
                    <span className={`${status == "ACTIVE" ? 'bg-green-500' : 'bg-rose-500'} text-center ml-2 text-white py-1 px-5 rounded `}>{status || "Unknown"}</span>
                </button>
            </td>
            <td className='px-10 py-2 flex justify-around gap-5'>
                <button className='cursor' onClick={onUpdate}>
                    <BsPencilSquare size={25} color={'rgb(34,197,94)'} />
                </button>
                <button className='cursor' onClick={onDelete}>
                    <BsFillTrashFill size={25} color={'rgb(244, 63, 94)'} />
                </button>
            </td>
        </tr>
    )
}