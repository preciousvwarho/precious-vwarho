
import { useEffect } from 'react';
import Head from 'next/head'
// import WOW from  'wowjs/dist/wow.js';

export default function Home() {

  useEffect(() => {
    
    if(typeof window !== 'undefined') {
   
      window.WOW = require('wowjs');
  
    }
  
    new WOW.WOW().init();
    
  }, [])


  return (
    <>
     <Head>
        <title>Precious</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
    </Head>

      <div className="main">


       <div className="ptesh text-center">
          <h1>Precious Vwarho</h1>
        </div>
 


      

      <section className="section-default sec-one">  
          <div className="container">
             <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title wow fadeInUp"  data-wow-duration="1s">Hi, my <br/>name is <b>Precious</b><span className="dot">.</span></h1>
                    <p className="page-p wow fadeInUp"  data-wow-duration="1s" data-wow-delay="0.5s">I&apos;m a <b style={{color: '#f0bce4'}}>software developer</b> with  hands-on experience in web and mobile app development.</p>
                    <div className="ux-front">
                      <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">UI/UX Designer</span>
                      <span className="ux wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s"></span>
                      <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">Front-end Developer</span>
                      <span  className="ux wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.5s"></span>
                      <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.9s">Back-end Developer</span>
                    </div>


                    <div className="boxOne wow fadeInDown"  data-wow-duration="3s"></div>
                    <div className="boxTwo wow fadeInDown"  data-wow-duration="2s"></div>

                    <span className="page-scroll wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"  data-wow-offset="20"><span><span>S</span> <span>c</span> <span>r</span> <span>o</span> <span>l</span> <span>l</span></span></span>
 
                 </div>

             </div>
          </div>

        </section>


       
        <section className="section-default sec-two">
          <div className="container">
             <div className="row">
                <div className="col-lg-5 col-md-7 mb-5">
                  <div className="">
                      <h3 className="design-head wow flipInX" data-wow-duration="1s" data-wow-delay="0.5s">About me</h3>
                        <p className="abt-p wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Hello! i&apos;m Precious Oghenevwarho, a Front-end Developer &amp; UI/UX Designer,
                        dedicated to creating interaction, appealing and scalable applications.
                         </p>
                        <p className="abt-p wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s"> I bring ideas to life with web and mobile technologies.</p>
                        <p className="abt-p wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Here are a few technologies I work with:</p>
                    </div>
                    <div className="skill wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                      <span className="">Javascript (ES6+)</span>
                      <span className="">React</span>
                      <span className="">React Native</span>
                    </div>
                    <div className="skill wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                      <span className="">Node js</span>
                      <span className="">Adobe Illustrator</span>
                      <span className="">Figma</span>
                    </div>
                </div>
                <div className="col-lg-7 col-md-5">
                  <div className="row justify-content-center">
                      <img src={`./images/precious.jpg`} width="220" className="d-inline-block prof-img wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" alt=""/> 
                      <div className="prof-box wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"></div> 
                  </div>
                  </div>
                  
             </div>
           </div>

        </section>


        <section className="section-default sec-m">
          <div className="container">
             <div className="row">
                <div className="col-lg-6 mb-5">
                   <h3 className="design-headTwo wow flipInX" data-wow-duration="1s" data-wow-delay="0.5s">Some Things I’ve Built</h3>
                </div>
                <div className="col-lg-6 mb-5">
                  </div>
             </div>
            </div>

         </section>

        <section className="">

            <div className="portfolio portfolio-left">
              <div className="row">
                  <div className="col-md-9  order-md-last project-image border-left wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="1s">
                      <img src={`./images/Blano-p2.png`} className="d-inline-block img-fluid blano" data-wow-duration="1s" data-wow-delay="1s" alt=""/> 
                    </div>
                  <div className="col-md-3">
                     <div className="prof-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.5s">
                        <h3>Blano Global</h3>
                        <span className="project-stack"><span>Front-end Developer&nbsp; • &nbsp;</span><span>UI Designer</span></span>
                            <p className="page-p">Blano is a crypto app that powers cross border payments</p>
                            <a target="_blank" rel="noopener noreferrer" className="view-btn" href="https://www.blanoglobal.com/" >view project</a>
                      </div>
                  </div>
              </div>
             </div>

            <div className="portfolio portfolio-right">
              <div className="row">
                  <div className="col-md-9 project-image text-center border-right wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="1s" >
                      <img src={`./images/energie.png`} className="d-inline-block img-fluid" alt=""/> 
                    </div>
                  <div className="col-md-3">
                     <div className="prof-text-energie wow fadeInRight" data-wow-duration="1s" data-wow-delay="1.5s">
                        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Energie</h3>
                        <span className="project-stack"><span>Front-end Developer&nbsp; • &nbsp;</span><span>UI Designer</span></span>
                        <p className="page-p">Energie mobile app delivers petroleum products to your doorsteps.</p>
                            <a target="_blank" rel="noopener noreferrer" className="view-btn" href="https://play.google.com/store/apps/details?id=com.energie" >view project</a>
                     </div>
                  </div>
              </div>
             </div>


          <div className="portfolio portfolio-left">
              <div className="row">
                  <div className="col-md-9  order-md-last project-image border-l wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="1s">
                      <img src={`./images/Igobi.png`} className="d-inline-block img-fluid" data-wow-duration="1s" data-wow-delay="1s" alt=""/> 
                    </div>
                  <div className="col-md-3">
                     <div className="prof-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.5s">
                          <h3>Igobi</h3>
                          <span className="project-stack"><span>Full Stack Developer&nbsp; • &nbsp;</span><span>UI Designer</span></span>
                            <p className="page-p">Igobi is a high tech traditional digital market that connects farms to families.</p>
                            <a target="_blank" rel="noopener noreferrer" className="view-btn" href="https://play.google.com/store/apps/details?id=com.igoby" >view project</a>
                          
                      </div>
                  </div>
              </div>
             </div>


           <div className="portfolio portfolio-right">
              <div className="row">
                  <div className="col-md-9 project-image text-center border-right wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="1s" >
                      <img src={`./images/outlaws.png`} className="d-inline-block img-fluid outlaw" alt=""/> 
                    </div>
                  <div className="col-md-3">
                     <div className="prof-text2 wow fadeInRight" data-wow-duration="1s" data-wow-delay="1.5s">
                        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">City Outlaws</h3>
                        <span className="project-stack"><span>Front-end Developer&nbsp;</span></span>
                        <p className="page-p">City outlaws is an NFT play to earn game, built around the concept of outlawed street car racing.</p>
                            <a target="_blank" rel="noopener noreferrer" className="view-btn" href="https://www.cityoutlawsnft.com/" >view project</a>
                     </div>
                  </div>
              </div>
             </div>


        </section>


        <section className="section-default footer">
          <div className="container">
             <div className="row">
                 <div className="col-lg-2"></div>
                 <div className="col-lg-6 text-center intro-text">
                   <h1 className="text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Say Hello!</h1>
                   <p className="abt-p text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">If you&apos;re intreasted in working with me, please send an email</p>
                    <a href="mailto:preciousvwarho@gmail.com" className="btn btn-outline-secondary btn-md wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">Hello! <span> 😀</span></a>

                 </div>
                 <div className="col-lg-4"></div>
                 
               
             </div>



             <div className="copywrite wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
                  <a href="http://">© 2022 preciousvwarho</a>
               </div>

          </div>

        </section>




        <footer>
            
          
            
            <div className="text-center text-white p-5">
            Designed by
              <a className="text-white" href=""> PreciousVwarho</a>
            </div>
            
          </footer>









      </div>

    </>
  )
}
