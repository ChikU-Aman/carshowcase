import React from 'react'

const SignInButton = (props) => {
    console.log(props)
    return (
        <button
            disabled={false}
            type={"button"}
            className="custom-btn"
            style={{
                "backgroundColor": "white",
                "border-start-start-radius": "9999px",
                "border-end-start-radius": "9999px",
                "border-end-end-radius": "9999px",
                "border-start-end-radius": "9999px",
                "marginTop": "10px"
            }}
            onClick={() => { }}
        >
            <span style={{"color":"blue"}} className={'flex-1'}>
                Sign In
            </span>
        </button>
    )
}

export default SignInButton