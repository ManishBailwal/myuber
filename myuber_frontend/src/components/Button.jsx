import React from 'react'

export default function Button({children, type="button", onClick } ){
    return (
        <button 
         type={type}
         onClick={onClick}
         className="btn-primary w-full"
        >
            {children}
        </button>
    )
}