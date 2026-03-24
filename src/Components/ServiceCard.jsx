import React, { useRef, useState } from 'react'

const ServiceCard = ({ service, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect()
        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        })
    }

    return (
        <div
            className="position-relative overflow-hidden card shadow-sm border mb-3 mx-auto"
            style={{ maxWidth: "500px", borderRadius: "15px" }}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={handleMouseMove}
            ref={divRef}
        >

            {/* Glow Effect */}
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: "300px",
                    height: "300px",
                    background: "linear-gradient(to right, #0d6efd, #6610f2, #6f42c1)",
                    filter: "blur(100px)",
                    top: position.y - 150,
                    left: position.x - 150,
                    opacity: visible ? 0.6 : 0,
                    transition: "opacity 0.5s",
                    zIndex: 0
                }}
            />

            <div className="d-flex align-items-center p-4 position-relative" style={{ zIndex: 1 }}>

                <div className="bg-light rounded-circle p-2 me-3">
                    <img
                        src={service.icon}
                        alt=""
                        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />
                </div>

                <div className="flex-grow-1">
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="mb-0 small text-muted">{service.description}</p>
                </div>

            </div>

        </div>
    )
}

export default ServiceCard