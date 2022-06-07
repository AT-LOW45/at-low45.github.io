import React, { FC } from 'react'
import { Product } from '../models/models'
import Card from '../components/Card'

const Gallery: FC = () => {
  return (
    <div className='Gallery flex flex-row'>
      <div id="filters">

      </div>

      <section id="products-grid" className='grid grid-cols-3 p-3 m-2'>

      </section>
    </div>
  )
}

export default Gallery