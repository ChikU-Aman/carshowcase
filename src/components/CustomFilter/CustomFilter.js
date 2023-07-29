import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { Image } from 'react-bootstrap'
import chevronupDown from '../../assests/chevron-up-down.svg'
import './CustomFilter.css'

const CustomFilter = (props) => {
  const options = props.options;
  const title = props.title;

  const [selected, setSelected] = useState(options[0]);

  return (
    <div style={{ "width": "fit-content" }}>
      <Listbox
        value={selected}
        onChange={(e)=>{
          setSelected(e); 
        }}>
        <div style={{ "position": "relative", "width": "fit-content", "zIndex": "10" }}>
          <Listbox.Button className='custom-filter__btn'>
            <span style={{ "display": "block", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" }}>{selected.title}</span>
            <Image src={chevronupDown} width={20} height={20} style={{ "marginLeft": "16px", "objectFit": "contain" }} alt='chevron_up_down' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => {
                return <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({active}) => `custom-filter__option ${active ? 'custom-filter__option_active':'custom-filter__option_inactive'}`}
                >
                  {({ selected }) =>
                  (
                    <>
                      <span className={`custom-filter_span ${selected?'custom-filter_span_selected':'custom-filter_span_unselected'}`}>
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
