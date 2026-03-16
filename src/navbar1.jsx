import img1 from  './images/logo.png';
import img2 from './images/zara 1.png';
import img3 from './images/dior 2.png';
import img4 from './images/nike logo.png';
import img5 from './images/polo 21.png';
import img6 from './images/adidas.png';
import img7 from './images/versace01.png';
import img8 from './images/lacosta.png';
import img9 from './images/ea7.png';
import img10 from './images/contact us.png';







const Navbar1 = () => {
    return ( 
        <div>
            <div className="container-flude">

            <nav className="nav1">
                <img src={img1} />
                
                <a href="#home">Home</a> 
                <a href="#Brand">Brand</a> 
                <a href="#Contact">Contact</a> 
                <i className="fa-solid fa-bag-shopping"></i>
                <i className="fa-solid fa-heart"></i>
            </nav>
            </div>

            <div className="home">
                <div className="content">
                    <h1>Select Your Brand To Buy Clothing</h1>
                    <p> Think about the type of people most likely to be interested in your clothing brand, considering demographics like age, income, location, and lifestyle If you want to produce unique clothing designs, look for a manufacturer that offers creative freedom and allows you to build a brand image.</p>
                    <button className="btn1">Shopping Now</button>
                </div>
            </div>
            <h1 id="Brand">Brand</h1>
            <hr className="hr1"/>
            <h3>Choose Your Brand </h3>
            <div className="container">
                <div className="row">
 {/* <!---------> */}
            <div className="card"style={{width:"15rem"}}>
                <img src={img2} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand Zara</h5>
                  <p>Zara is a Spanish fast-fashion retailer founded in 1975 by Amancio Ortega and Rosalía Mera. It is one of the largest </p>

                 <button className="btn2">
                 <a className="a-navbar1" href="/navbar2">See More</a>
                 </button>

            </div>
            </div>
 {/* <!---------> */}
 {/* <!---------> */}
            <div className="card"style={{width:"15rem"}}>
                <img src={img3} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand Dior</h5>
                  <p>Christian Dior French luxury goods company founded on December 16 1946 by Christian  Dior. The company </p>
                  <button className="btn2">
                 <a className="a-navbar1" href="/navbar3">See More</a>
                 </button>
                </div>
            </div>
 {/* <!---------> */}
 {/* <!---------> */}
 <div className="card"style={{width:"15rem"}}>
                <img src={img5} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand Polo</h5>
                  <p>Brand Polo, officially known as Polo Ralph Lauren, is a luxury clothing brand founded by Ralph Lauren in 1968.It </p>
                  <button className="btn2">
                 <a className="a-navbar1" href="/navbar4">See More</a>
                 </button>
                </div>
            </div>
 {/* <!---------> */}
 {/* <!---------> */}
             <div className="card"style={{width:"15rem"}}>
                <img src={img4} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand Nike</h5>
                  <p>Nike is an The American multinational corporation designs,develops,footwear Founded on January 25, 1964,</p>
                  <button className="btn2">
                 <a className="a-navbar1" href="/navbar5">See More</a>
                 </button>
                </div>
            </div>
 {/* <!---------> */}
 {/* <!---------> */}
            <div className="card"style={{width:"15rem"}}>
                <img src={img6} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand Adidas</h5>
                  <p>Adidas AG is a German corporation that designs and sports shoes,clothing Founded in 1924 by Adolf Dassler</p>
                  <button className="btn2">
                 <a className="a-navbar1" href="/navbar6">See More</a>
                 </button>
                </div>
            </div>
 {/* <!---------> */}
 {/* <!---------> */}
            <div className="card"style={{width:"15rem"}}>
                <img src={img7} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand Versace</h5>
                  <p>Founded in 1978 by Gianni Versace, the brand is synonymous with elegance, style, quality, and comfort. Initially</p>
                  <button className="btn2">
                 <a className="a-navbar1" href="/navbar7">See More</a>
                 </button>
                </div>
            </div>
 {/* <!---------> */}
 {/* <!---------> */}
            <div className="card"style={{width:"15rem"}}>
                <img src={img8} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand Lacoste</h5>
                  <p>Lacoste is a French lifestyle brand founded by René Lacoste,The Brand four-time international tennis champion,in the 1930s</p>
                  <button className="btn2">
                 <a className="a-navbar1" href="/navbar8">See More</a>
                 </button>
                </div>
            </div>
 {/* <!---------> */}
 {/* <!---------> */}
            <div className="card"style={{width:"15rem"}}>
                <img src={img9} />
                <hr/>
                <div className="card-body">
                  <h5>About Brand EA7 Giorgio Armani</h5>
                  <p>The EA7 Giorgio Armani logo is a vector logo designed by EA7, a line offered by the fashion house Giorgio Armani S.p.A.</p>
                  <button className="btn2">
                 <a className="a-navbar1" href="/navbar9">See More</a>
                 </button>
                </div>
            </div>
 {/* <!---------> */}
            </div>
            </div>
            <h1 id="Contact">Contact Us</h1>
            <hr className="hr1"/>

          
          <div className="form1">
          <img src={img10}/>
            <div className="form2">
              <div className="form3">
             {/* ----- contac us ------ */}
             <form>
            
          <input type="text" placeholder="Full Name" resourced/>
          
          <input type="tel"placeholder="Number Phone"/>
          <br/>
          <input type="E-mali"placeholder="Emali Address" required/>
          
          <input type="password"placeholder="Password" required/>
          <br/>
          <textarea cols="58" rows="10" placeholder="Message" required/>
          <br/>
          <input className="send" type="submit" value="Send"required/>
          </form>
                {/* ----- contc us------ */}
              </div>
            </div>
          </div>
        
        {/* footer start  */}
        <hr style={{marginTop:"6rem"}}/>
        <footer className="foo1">
                <img  style={{maxWidth:"170px",marginBottom:"1rem",marginLeft:"8px"}}  src={img1}/> 
                 
                <a style={{margin:"28PX"}} href="#">Zara</a>
                <a style={{margin:"28PX"}} href="#">Dior</a>
                <a style={{margin:"28PX"}} href="#">Polo</a>
                <a style={{margin:"28PX"}} href="#">Nike</a>
                <a style={{margin:"28PX"}} href="#">Adidas</a>
                <a style={{margin:"28PX"}} href="#">Versace</a>
                <a style={{margin:"28PX"}} href="#">Lacoste</a>
                <a style={{margin:"28PX"}} href="#">EA7</a>

                
                Creater Amanj Abbas Akray
                

        </footer>
        {/* footer End */}
        </div>
     );
}

export default Navbar1;
