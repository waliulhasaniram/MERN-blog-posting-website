import { NavLink } from "react-router-dom"

const Home =()=>{
    return <>
       <div className="hero_section">
            <div className="hero_info">
                <h1>welcome, to blogify </h1> 
                <h1>This is a mern demo blog website</h1>
                <h1>MERN is the technology that will take your blogs available to ereryone.</h1>
                
                <div className="hero_button">
                    <button className='hero_button1'> <NavLink to='/blog'>write blog</NavLink> </button> 
                    <button className='hero_button2'> <NavLink to='/contact'>Contact</NavLink> </button>   
                </div> 
                    
            </div>
            <div className="hero_slider">
                <img className="heroImage" src="vite.svg" alt="this is a registration image" />
                <img className="heroImage" src="react.svg" alt="this is a registration image" />
            </div>
        </div>
        
        <div className="hero_section">
            <div className='hero_tech'>
                <h1>React</h1><h1>|</h1>
                <h1>Node js</h1><h1>|</h1>
                <h1>Express js</h1><h1>|</h1>
                <h1>MongoDB</h1>
            </div>  
        </div>

        <div className="contact_section">
            <div className="hero_slider">
                <img className="heroImage" src="/images/contactimg.png" alt="this is a registration image"/>
            </div>
            <div className="hero_info">
                <h1>Why Mern is the best</h1>
                <p>why you should use Mern: </p>
                    <ul className='hero_list'>
                        <li>Full-Stack JavaScript: It uses a single language (JavaScript) across the stack, from front-end to back-end, making development more efficient and streamlined.</li><br/>
                        <li>Fast Development: Pre-built tools and libraries in MongoDB, Express, React, and Node.js speed up development time.</li>
                        <li>Scalability: MongoDB provides flexible data models, and Node.js enables handling of high traffic with non-blocking I/O.</li> 
                        <li>Rich User Experience: React’s component-based architecture allows for dynamic, interactive, and responsive user interfaces.</li> 
                        <li>Open Source: Each technology in the MERN stack is open-source, which provides strong community support and continuous updates.</li>     
                    </ul>
            </div>
        </div>

        <div className="hero_section">
            <div className="hero_info">
                <h1>Mern is the simple form of full-stack development.</h1>
                <p>A MERN project offers several key benefits: </p>
                    <ul className='hero_list'>
                        <li>Full-Stack JavaScript: It uses a single language (JavaScript) across the stack, from front-end to back-end, making development more efficient and streamlined.</li><br/>
                        <li>Fast Development: Pre-built tools and libraries in MongoDB, Express, React, and Node.js speed up development time.</li>
                        <li>Scalability: MongoDB provides flexible data models, and Node.js enables handling of high traffic with non-blocking I/O.</li> 
                        <li>Rich User Experience: React’s component-based architecture allows for dynamic, interactive, and responsive user interfaces.</li> 
                        <li>Open Source: Each technology in the MERN stack is open-source, which provides strong community support and continuous updates.</li>     
                    </ul>        
            </div>
            <div className="hero_slider">
                <img className="heroImage" src="/images/regimg.jpg" alt="this is a registration image" />
            </div>
        </div>
    </>
}

export default Home