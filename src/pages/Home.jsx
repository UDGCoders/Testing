import Engineer from '../components/home/Engineer';
import HomeHero from '../components/home/HomeHero';
import ScrollTimeline from '../components/home/Timeline';
import Vision from '../components/Vision';
import Impact from '../components/home/Impact';
import Built from '../components/home/Built';
import Legacy from '../components/home/Legacy/Legacy';
import CeoMeasures from '../components/home/CEO/CeoMeasures';
import Team from '../components/home/Team/Team';
import Customers from '../components/home/customers/Customers';
import Build from '../components/home/Build/Build';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  const texts = ["Success", "INOVATIONS", "GROWTH"];

  return (
    <>
  
      <div className="headerbackground h-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="wp-content/uploads/2026/01/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        <div className="header-content">
          <HomeHero main="POWERING" texts={texts} />
        </div>
      </div>
      <Engineer />
      <ScrollTimeline />
      <Vision
        src="wp-content/uploads/2026/01/about-landing.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="bgvideo"
      />
      <Impact />
      <Built
        title="BUILT BRICK BY BRICK, IDEA BY IDEA"
        description="OUR STORY ISN'T ABOUT OVERNIGHT SUCCESS. IT'S ABOUT BOLD MOVES, SMART PARTNERSHIPS, AND STEADY GROWTH ACROSS INDUSTRIES."
      />
      <Legacy
        bigtitle="OUR LEGACY"
        smallTitle="OUR BRANDS"
        description="Working Together for Excellence – Making a Difference with ❤️"
      />
      <CeoMeasures bigtitle="A Decade of" smallTitle="Measurable Success" />
      <Team bigtitle="The Team Behind" smallTitle="RMAAC" />
      <Customers
        role="Trusted by 25,000+"
        name="happy customers"
        img="wp-content/uploads/2026/01/Testimonials-pics.webp"
      />
      <Build />
    </>
  );
}

export default Home;
