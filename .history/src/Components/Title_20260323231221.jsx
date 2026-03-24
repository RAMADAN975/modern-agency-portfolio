import React from 'react'

const Title = ({ title, desc }) => {
    return (
        <div className="text-center">
            <h2 className="fw-medium display-5">{title}</h2>
            <p className="mx-auto text-muted mb-4" style={{ maxWidth: "500px" }}>
                {desc}
            </p>
        </div>
    )
}

export default Title