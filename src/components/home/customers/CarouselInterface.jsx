import React from 'react'

const CarouselInterface = (props) => {
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <div className="review" style={{width:"65%"}}>
                    <p className="name" style={{fontSize:"14px",fontFamily:"Italiana",fontWeight:"500",textTransform:"uppercase",lineHeight:"1.3em"}}>{props.name}</p>
                    <p className="testinomial" style={{fontSize:"24px",fontFamily:"Inter",fontWeight:"500",lineHeight:"1.3em"}}>{props.testinomial}
                        </p>
                </div>
                <div className="buttons d-flex fs-1 gap-5 justify-content-end" style={{width:"45%"}}>
                    <p style={{fontSize:"50px",color:"grey"}}>&larr;</p>   
                    <p style={{fontSize:"50px",color:"grey"}}>&rarr;</p>
                </div>
            </div>

        </>
    )
}

export default CarouselInterface