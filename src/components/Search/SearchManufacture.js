import React, { Fragment, useState } from 'react'
import './SearchManufacture.css'
import './Search.css'
import { Combobox, Transition } from '@headlessui/react'
import { Image } from 'react-bootstrap'
import carLogo from '../../assests/car-logo.svg'
import { manufacturers } from '../../constants/manufacture'

const SearchManufacture = () => {
    const [query, setQuery] = useState("");

    const filteredManufacuturers = () => {
        return query === "" ? manufacturers :
            manufacturers.filter((item) => {
                item.toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            })
    }

    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='combobox__button'>
                    <Combobox.Button style={{ "position": "absolute", "top": "10px" }}>
                        <Image
                            src={carLogo}
                            className='searchImg'
                            width={25}
                            height={25}
                            alt='car logo'>
                        </Image>
                    </Combobox.Button>
                    <Combobox.Input
                        className='search-manufacturer__input'
                        displayValue={(item) => item.toString()}
                        placeholder='Volkswagen ...'
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options className='combo_box__options' static>
                            {
                                filteredManufacuturers.length === 0 && query !== "" ? (
                                    <Combobox.Option>
                                        Create
                                    </Combobox.Option>
                                ) :
                                    (
                                        filteredManufacuturers.map((item) => {
                                            return
                                            <Combobox.Option
                                                key={item}
                                                value={item}
                                                className=''
                                            >
                                                H1
                                            </Combobox.Option>
                                        })
                                    )
                            }
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture