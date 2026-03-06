import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import BackgroundDots from './components/home/CompanySlider/Backgrounddots';
import About from './pages/About';
import Services from './pages/Services';
import ItSolutions from './pages/ItSolutions';
import DigitalMarketing from './pages/DigitalMarketing';
import AppsDevelopment from './pages/AppsDevelopment';
import RealEstate from './pages/RealEstate';
import Portfolio from './pages/Portfolio';
import Automation from './pages/Automation';
import Contact from './pages/Contact';
import Real from './pages/Real';
import HealthCare from './pages/HealthCare';
import NotFound from './pages/NotFound';
import Error502 from './pages/Error502';
import OurApproach from './pages/OurApproach';
import DigitalSuccess from './pages/DigitalSuccess';
import MobileSolution from './pages/MobileSolution';
import SingleLayoutPage from './pages/SingleLayoutPage';
import { singleLayoutPageData } from './constants/singleLayoutPageData';
import {HelmetProvider} from 'react-helmet-async';



const PageTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return children;
};

const SingleLayoutRoute = () => {
  const { layoutKey } = useParams();
  const selectedKey = layoutKey || 'singlelayoutpage';
  const pageData = singleLayoutPageData[selectedKey];

  if (!pageData) {
    return (
      <PageTitle title="404 - RMAAC">
        <NotFound />
      </PageTitle>
    );
  }

  return (
    <PageTitle title="RMAAC">
      <SingleLayoutPage pageData={pageData} />
    </PageTitle>
  );
};

function App() {
  return (
    <HelmetProvider>
    <Router>
      <Navbar />
      <BackgroundDots />
      <main className="app-main">
        <Routes>
          <Route path="" element={<PageTitle title="RMAAC"><Home /></PageTitle>} />
          <Route path="/" element={<PageTitle title="RMAAC"><Home /></PageTitle>} />
          <Route path="/about" element={<PageTitle title="RMAAC"><About /></PageTitle>} />
          <Route path="/servicespage" element={<PageTitle title="RMAAC"><Services /></PageTitle>} />
          <Route path="/itsolutionspage" element={<PageTitle title="RMAAC"><ItSolutions /></PageTitle>} />
          <Route path="/digitalmarketingpage" element={<PageTitle title="RMAAC"><DigitalMarketing /></PageTitle>} />
          <Route path="/appdevelopmentpage" element={<PageTitle title="RMAAC"><AppsDevelopment /></PageTitle>} />
          <Route path="/realestatepgae" element={<PageTitle title="RMAAC"><RealEstate /></PageTitle>} />
          <Route path="/portfoliopage" element={<PageTitle title="RMAAC"><Portfolio /></PageTitle>} />
          <Route path="/automationpage" element={<PageTitle title="RMAAC"><Automation /></PageTitle>} />
          <Route path="/healthcarepage" element={<PageTitle title="RMAAC"><HealthCare /></PageTitle>} />
          <Route path="/contactpage" element={<PageTitle title="RMAAC"><Contact /></PageTitle>} />
          <Route path="/realestateportfoliopage" element={<PageTitle title="RMAAC"><Real /></PageTitle>} />
          <Route path="/ourapproachpage" element={<PageTitle title="RMAAC"><OurApproach /></PageTitle>} />
          <Route path="/digitalsuccesspage" element={<PageTitle title="RMAAC"><DigitalSuccess/></PageTitle>} />
          <Route path="/mobilesolutionpage" element={<PageTitle title="RMAAC"><MobileSolution /></PageTitle>} />
          <Route path="/singlelayoutpage" element={<SingleLayoutRoute />} />
          <Route path="/singlelayoutpage/:layoutKey" element={<SingleLayoutRoute />} />
          <Route path="/502" element={<PageTitle title="502 - RMAAC"><Error502 /></PageTitle>} />
          <Route path="*" element={<PageTitle title="404 - RMAAC"><NotFound /></PageTitle>} />
        </Routes>
      </main>

      <Footer />
    </Router>
    </HelmetProvider>
  );
}

export default App;
