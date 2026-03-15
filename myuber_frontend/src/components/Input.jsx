import React from 'react'

export default function Input({type, name,  placeholder, value, onChange, ...rest}){


    return (
        <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
        {...rest}


        
        />
    )
}