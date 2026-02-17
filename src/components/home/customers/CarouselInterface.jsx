import React, { useState, useEffect } from 'react'

const CarouselInterface = ({ items = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    items = [
  { name: "John Doe", testinomial:`"RELIABLE, PROFESSIONAL, AND HIGHLY SKILLED. WE COULDN'T BE HAPPIER WITH THE RESULTS!"`},
  { name: "Jane Smith", testinomial: `"EXCELLENT SERVICE AND OUTSTANDING QUALITY! THEY TRULY CARE ABOUT THEIR CLIENTS AND DELIVER BEYOND EXPECTATIONS!"` }
]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (!items.length) return null

    const handlePrev = () => {
        setCurrentIndex(prev =>
            prev === 0 ? items.length - 1 : prev - 1
        )
    }

    const handleNext = () => {
        setCurrentIndex(prev =>
            prev === items.length - 1 ? 0 : prev + 1
        )
    }

    const { name, testinomial } = items[currentIndex]

    return (
        <>
            <div
                className={`d-flex align-items-center mt-3 ${
                    isMobile ? 'flex-column' : ''
                }`}
            >
                <div
                    className="review"
                    style={{ width: isMobile ? '100%' : '65%' }}
                >
                    <p
                        className="name"
                        style={{
                            fontSize: "20px",
                            fontFamily: "Italiana",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            lineHeight: "1.3em"
                        }}
                    >
                        {name}
                    </p>

                    <p
                        className="testinomial"
                        style={{
                            fontSize: "24px",
                            fontFamily: "Inter",
                            fontWeight: "300",
                            lineHeight: "1.5em"
                        }}
                    >
                        {testinomial}
                    </p>
                </div>

                <div
                    className="buttons d-flex fs-1 gap-5 justify-content-end"
                    style={{
                        width: isMobile ? '100%' : '45%',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                        marginTop: isMobile ? '20px' : '0'
                    }}
                >
                    <p
                        style={{ fontSize: "50px", color: "grey", cursor: "pointer" }}
                        onClick={handlePrev}
                    >
                        &larr;
                    </p>

                    <p
                        style={{ fontSize: "50px", color: "grey", cursor: "pointer" }}
                        onClick={handleNext}
                    >
                        &rarr;
                    </p>
                </div>
            </div>
        </>
    )
}

export default CarouselInterface
