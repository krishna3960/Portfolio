import React from 'react'
import "./resume.scss"

export default function Resume() {
    return (
        <div className='resume'>
           <div className="page">
               <div className="header">
                <div className="title">
                    Krishna Le Moing
                </div>
               
                
               </div>

               <div className="body">
                   <div className="section_type_1">
                       <div className="title">Programming Languages and Frameworks</div>
                        <div className="content">Java, Python, Javascript, Spring Boot, React</div>
                   </div>
                   <div className="section_type_2">
                       <div className="title">Education</div>
                       <div className="block">
                       
                           <div className="prefix"> 2019-2022</div>
                           <div className="blockcontent">
                            <div className="content">BSc in Computer Science, University of Fribourg</div>
                           </div>
                       </div>
                       
                       <div className="block">
                       
                           <div className="prefix"> 2017-2018</div>
                           <div className="blockcontent">
                            <div className="content">BSc in Economics, University of Lausanne</div>
                           
                       </div>
                       </div>
                   </div>

                   <div className="section_type_2">
                       <div className="title">Languages</div>
                       <div className="block">
                       
                        <div className="prefix"><strong>English</strong></div>
                        <div className="blockcontent">
                        <div className="content"><strong>Fluent</strong></div>
                        </div>
                       </div>
                       <div className="block">
                       
                           <div className="prefix">French</div>
                           <div className="blockcontent">
                            <div className="content">Fluent</div>
                           
                           </div>
                       </div>
                       <div className="block">
                       
                           <div className="prefix">German</div>
                           <div className="blockcontent">
                           <div className="content">Basic</div>
                           </div>
                       </div>
                       
                   </div>
                   <div className="section_type_2">
                       <div className="title">Professional Experience</div>
                       <div className="block">
                       
                           <div className="prefix">
                               2020-2021
                           </div>
                           <div className="blockcontent">
                           <div className="blocktitle">
                           Head of IT, Junior Entreprise Fribourg.
                           </div>
                           <div className="content">Supervising a team of 5 people for IT projects such as websites using Wordpress
                        and mobile apps using Ionic.js. We had a turnover of over 12’000 CHF during my
period. As the Head of IT I also had to meet clients to sign new contracts before
assigning the project to a Project Manager.</div>
                    </div>
                       </div>
                       <div className="block">
                           
                           <div className="prefix">
                               2019-2020
                           </div>
                           <div className="blockcontent">
                           <div className="blocktitle">
                           Project Manager IT, Junior Entreprise Fribourg.
                           </div>
                           <div className="content">As a Project Manager I had to plan websites and then build them using Wordpress.
My other tasks were maintaining and updating the website jef.ch
                        </div>
                        </div>
                       </div>
                   </div>

                   <div className="section_type_2">
                       <div className="title">Extra Curricular activities</div>
                       <div className="block">
                           <div className="prefix">
                               2021
                           </div>
                           <div className="blockcontent">
                               <div className="blocktitle">YB Hackathon</div>
                               <div className="content">A Hackhaton organised by the football club of Young Boys Bern. We had 24
                                    hours to build an innovative solution. Our project was for an energy company,
                                    that wanted to find a solution to be able to create a peer to peer energy sale
                                    solution. We build a prototype that would mimic a peer to peer marketplace that
                                    would be implemented on the blockchain. I was in charge of the Front end using
                                    React.
                                </div>
                           </div>
                       </div>
                   </div>

                   
               </div>

           </div>
        </div>
    )
}
