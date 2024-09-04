import React from 'react'
import { twMerge } from 'tailwind-merge'

const Title = ({title,className}) => {
    const classItem = twMerge("text-[45px] font-semibold",className ? className :"")
  return (
    <div className={classItem}>{title}</div>
  )
}

export default Title