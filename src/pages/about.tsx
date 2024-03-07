import { ButtonBase } from '@/components/elements/buttons'
import React from 'react'

const About = () => {
  return (
    <div className="w-screen h-fit p-10">
        <ButtonBase name={'click me'} onClick={() => alert('hello world')} />
    </div>
  )
}

export default About