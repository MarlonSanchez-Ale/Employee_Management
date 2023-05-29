import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BsPersonFillAdd } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Employee</title>
      </Head>
      <main className='py-5'>
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Hello world!
        </h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3'>
            <button className='flex bg-indigo-600 text-white px-4 py-2 border rounded-md hover:bg-indigo-500 hover:border-indigo-500'>
              <span className='mr-2'>
                <BsPersonFillAdd size={20} />
              </span>
              Add Employee
            </button>

          </div>
          {/* collapsable form */}

          {/* table */}

        </div>
      </main>

    </>
  )
}
