import Link from 'next/link'
import React from 'react'
import Navigation from './navigation'
import { DottedSeparator } from './dotted-separator'

const Sidebar = () => {
  return (
    <aside className='h-full bg-blue-50 p-4 w-full'>
      <Link href='/' className='my-4'>
        Kemix
      </Link>
      <DottedSeparator className='my-4'/>
      <Navigation/>
    </aside>
  )
}

export default Sidebar