import { Listbox } from '@headlessui/react'
import React from 'react'
import { Image } from 'react-bootstrap'
import chevronupDown from '../../assests/chevron-up-down.svg'

const CustomFilter = () => {
  return (
    <div style={{"width":"fit-content"}}>
        <Listbox>
            <div style={{"position":"relative","width":"fit-content","zIndex":"10"}}>
                <Listbox.Button className='custom-filter__btn'>
                    <span style={{"display":"block","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}>AMAN</span>
                    <Image src={chevronupDown} width={20} height={20} style={{"marginLeft":"16px","objectFit":"contain"}} alt='chevron_up_down'/>
                </Listbox.Button>
            </div>
        </Listbox>
    </div>
  )
}

export default CustomFilter
