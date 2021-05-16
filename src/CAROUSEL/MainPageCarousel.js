import React, { useState } from 'react';
import { useSelector } from "react-redux";

function MainPageCarousel() {

    const globalState = useSelector((state) => state);

    // const [display, setDisplay] = useState(1);

    // function change() {
    //     if (display < 3) {
    //         setDisplay(display + 1);
    //     }
    //     else {
    //         setDisplay(1);
    //     }
    // }

    // const handleChange = (val) => {
    //     if (val === 1) {
    //         setDisplay(1);
    //     }
    //     if (val === 2) {
    //         setDisplay(2);
    //     }
    //     if (val === 3) {
    //         setDisplay(3);
    //     }
    // }

    // useEffect(() => {
    //     setTimeout(change, 4000);
    // }, [display])

    return (
        <div style={{ textAlign: "center", position: "fixed", marginLeft: "40%" }}>
            {globalState.backdropTrigger ? <h2>Welcome To Home Page</h2> : ""}
            {/* <div className="carousel" >
                <div>

                    {display === 1 && <img className="items" src="/images/pic1.png" alt="" />}
                </div>
                <div>

                    {display === 2 && <img className="items" src="/images/pic2.png" alt="" />}
                </div>
                <div>

                    {display === 3 && <img className="items" src="/images/pic3.png" alt="" />}
                </div>
            </div><br /><br />
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "48%", marginTop: "-6.5%" }}>

                {display === 1 ? <input type="radio" checked onChange={() => handleChange(1)} /> : <input type="radio" checked={false} onChange={() => handleChange(1)} />}
                {display === 2 ? <input type="radio" checked onChange={() => handleChange(2)} /> : <input type="radio" checked={false} onChange={() => handleChange(2)} />}
                {display === 3 ? <input type="radio" checked onChange={() => handleChange(3)} /> : <input type="radio" checked={false} onChange={() => handleChange(3)} />}
            </div> */}
        </div>
    )
}

export default MainPageCarousel;
