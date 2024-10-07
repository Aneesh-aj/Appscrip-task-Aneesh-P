import { useEffect, useState } from "react"
import TextContent from "../components/TextContent"

import "../style/shop.css"
import Filter from "../components/Filter"
import Product from "../components/Products"


const Shope = () => {

     const [hideFilter, setHideFilter] = useState(false)
     const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

     const handleResize = () => {
          setIsMobile(window.innerWidth <= 450);
     };

     useEffect(() => {
          window.addEventListener("resize", handleResize);

          handleResize();

          return () => window.removeEventListener("resize", handleResize);
     }, []);


     return (
          <>
               <TextContent />
               <div className="shop" >
                    <div className="shop_bar">
                         <div className="bar_section">
                              <div className="" >
                                   {isMobile ? "" : <h4>34223 ITEMS</h4>}
                              </div>
                              <div className="bar_subsection">
                                   {!isMobile ? <i className={`pi ${hideFilter ? "pi-angle-left" : "pi-angle-right"}`} style={{ margin: 0 }}></i> : ""}
                                   <h4 style={{color:'gray'}} onClick={() => setHideFilter(!hideFilter)}>
                                        {isMobile ? "FILTER" : hideFilter ? "SHOW FILTER" : "HIDE FILTER"}
                                   </h4>
                              </div>
                         </div>
                         <div className="bar_section" style={{ justifyContent: `${isMobile ? "center" : "end"}`, borderLeft: `${isMobile ? "1px solid lightgray" : ""}` }}>
                              <select>
                                   <option value="RECOMMENDED">RECOMMENDED</option>
                                   <option value="NEWEST FIRST">NEWEST FIRST</option>
                                   <option value="POPULAR">POPULAR</option>
                                   <option value="PRICE : HIGH TO LOW">PRICE : HIGH TO LOW</option>
                                   <option value="PRICE : LOW TO HIGH">PRICE : LOW TO HIGH</option>
                              </select>
                         </div>
                    </div>
                    <div className="shop_content">
                         {!hideFilter || isMobile ? <Filter isMobile={isMobile} hideFilter={hideFilter} setHideFilter={setHideFilter} /> : ""}
                         <Product isMobile={isMobile} hideFilter={hideFilter} />
                    </div>

               </div>
          </>
     )
}

export default Shope