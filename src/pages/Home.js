import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { fadeIn } from '../animations/gsap';
import './Home.scss';

export default function Home () {
  let sectionRef = useRef(null);

  const intersection = useIntersection( sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  if (intersection && intersection.intersectionRatio > 0.5) {
    fadeIn(".home-two__text");
  } ;

  return(
    <main className="home">
      <section className="home-one">
        <div className="home-one__logo">
          <img src="/images/img_placeholder.png" alt="logo"/>
        </div>
        <div className="home-one__soon">
          <h1>B.C Craft Cannabis</h1>
          <h6>Coming Soon!</h6>
        </div>
      </section>
      <section className="home-two">
        <section className="home-two__text" ref={sectionRef}>
          <h1>WHO WE ARE</h1>
          <div className="home-two__p">
            <p>Our story is borne on the Pacific West Coast. Our cultivation location uniquely takes fresh clean protected waters from Lake Powell in the niche corridor that connects and flows into the Salish Sea in between 125W and 124W.</p><p> Take a short boat ride from our operations into the middle of the Salish Sea and you will find one of the smallest parks which is highly abundant with life above and below the ocean waves. It is called Mitlenatch Island which means "calm waters all around" and it is exactly at 125W. It is the centre of our inspiration for our coastal cultivation and harvesting: Abundant, deep, rich and full of life with calm and peace all around.</p>
          </div>
        </section>
        <section className="home-two__image">
          <img src="images/meridian125building.jpg" alt="facility"/>
        </section>
      </section>
      <section className="home-three">
        <div className="home-three__contactme">
          <div className="home-three__form-container">
            <h1>CONTACT US</h1>
          </div>
          <div className="home-three__image">
            <img src="images/gulf-islands-bc.jpeg" alt="bc gulf islands"/>
          </div>
        </div>

      </section>
      
    </main>
  )
}