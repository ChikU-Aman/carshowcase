import React from 'react'

const CustomButton = (props) => {
    console.log(props)
  return (
    <button
        disabled={false}
        type={"button"}
        className="custom-btn"
        style={{"backgroundColor":"blue","color":"white",
                "border-start-start-radius":"9999px",
                "border-end-start-radius":"9999px",
                "border-end-end-radius":"9999px",
                "border-start-end-radius":"9999px",
                "marginTop":"10px"}}
        onClick={()=>{}}
    >
        <span className={'flex-1'}>
            {props.title}
        </span>
    </button>
  )
}

export default CustomButton