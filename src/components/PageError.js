import React from 'react'
import './styles/PageError.css'

const PageError = () => {
        return (
        <div className="PageError">😨{this.props.error.message}😱😱</div>
            
        )
    }

export default PageError
