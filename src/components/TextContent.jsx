import "../style/TextContent.css"

const TextContent = () => {
    return (
        <>
            <div className="text_content" >
                <div className=' phone_visible'  >
                        <div style={{ color: "lightgray" }}>HOME</div>
                        <div style={{ borderLeft: "1px solid lightgray", paddingLeft: "0.5rem" }}>SHOP</div>
                </div>
                <h1 className="title">DISCOVER OUR PRODECTS</h1>
                <div style={{ width: '100%', height: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti doloribus praesentium officia id obcaecati voluptatibus facilis, expedita blanditiis! Iste earum tenetur non nostrum, voluptates reprehenderit quod beatae aliquid architecto.</p>
                </div>
            </div>
        </>
    )
}

export default TextContent