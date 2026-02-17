import React from "react";
import TestimonialCard from "../Cards/TestimonialCard";
import BigTitle from "../BigTitle";
import SmallTitle from "../SmallTitle";
import styles from './Testimonials.module.css';
const Testimonials = () => {
  return (
    <>
      <div className={`container ${styles.Testimonials}`}>
        <div className="row g-5">
            <div className="text-center col-12" style={{margin:'0', padding:'0'}}>
                <BigTitle bigTitle="SEE WHAT OUR BRILLIANT"/>
                <SmallTitle smallTitle="EX-EMPLOYEES HAVE TO SAY"/>
            </div>
          <div className="col-12 col-md-6 d-flex">
            <TestimonialCard employee="Faizan - Ex Finance manager" says="I spent the whole one year with RMAAC as Manager HR Operations. The best thing that i loved was that the organizational stakeholders were very open to new ideas and their integration into the system. Management is always very keen to listen to the problems and does their best provide solutions to them. Organization focuses on continuous learning and development of employees. Not a single day I felt unheard. It felt like home. "/>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <TestimonialCard employee="Hira - Ex Apps Developer" says="From day one it has been full of learning with some very interesting projects. Overall, the team is very supportive and kind, especially the CEO, Sir Nasar, who is one of the coolest CEOs I have ever met. I think leaving a workplace like RMAAC was one of the toughest things I had to do."/>     
          </div>
          <div className="col-12 col-md-6 d-flex">
            <TestimonialCard employee="Sareer - Ex ASO Expert" says="RMAAC has given me the opportunity to work, learn, and grow alongside such an incredible team. My time here has been a truly rewarding experience from gaining hands-on exposure in real projects to learning the importance of strategy, teamwork, and leadership. The guidance and trust I've received, especially from Nasar Ahmad, have been instrumental in shaping my professional journey. I'm deeply grateful to my colleagues and mentors for their constant support, encouragement, and collaboration. Every challenge turned into a learning curve, and every success felt bigger because it was achieved together."/>     
          </div>
          <div className="col-12 col-md-6 d-flex">
            <TestimonialCard employee="Fakiha - Marketing Executive" says="I started my journey at RMAAC as an intern a year ago and I must say, this one year has provided me with a solid start to my career where I got to work on different projects every single month. What i love the most is how there is absolutely no monotony. For each project, I might be working on websites or social media or emails or campaigns. As an employee at RMAAC, your workday is guaranteed to be exciting every day"/>     
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
