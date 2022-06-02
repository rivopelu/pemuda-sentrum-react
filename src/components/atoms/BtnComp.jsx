import React from 'react'

const BtnComp = ({ className, onClick, children }) => {
    return (
        <button className={`bg-main-color text-white px-5 py-1 hover:bg-amber-800 duration-200 ${className}`} onClick={onClick}>{children}</button>
    )
}

export default BtnComp