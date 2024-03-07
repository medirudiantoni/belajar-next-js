import React from 'react'

interface buttonProps {
    name: String;
    onClick: () => void;
}

export const ButtonBase: React.FC<buttonProps> = ({name, onClick}) => {
  return (
    <button onClick={onClick} className='py-2 px-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 hover:border border-white active:bg-neutral-200 duration-75'>{name}</button>
  )
}