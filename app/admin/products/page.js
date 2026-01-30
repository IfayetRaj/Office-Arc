import React from 'react'
import Table from './components/Table'
import Form from './components/Form'

const page = () => {
  return (
    <div className='flex gap-6 items-center'>
      <Form></Form>
      <Table></Table>
    </div>
  )
}

export default page