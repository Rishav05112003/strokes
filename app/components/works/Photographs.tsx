import React from 'react'
import { photographs } from '@/data'

function Photographs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photographs.map((item) => (
            <div>
            <img className="h-auto max-w-full rounded-lg" src={item.img} alt=""/>
            </div>
        ))}
    </div>
  )
}

export default Photographs
