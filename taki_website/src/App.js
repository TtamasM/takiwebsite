import './App.css';
import { Contact } from './contact/contact';
import { Header } from './headerFooter/header';
import { Footer } from './headerFooter/footer';
import { RestrictedPage } from './restrictedPage/restricted';
import { ProjectDetails } from './projectDetails/projectDetails';
import { TeamSingle } from './teamSingle/teamSingle';
import { NotFound } from './404/404';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import { Home } from './home/home';
import { Project } from './project/project';
import { Terms } from './Allterms/terms';
import { Cookies } from './Allterms/cookies';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';
import { Appearances } from './appearances/appearances';
import { Services } from './servicesPage/services';

function App() {

  return (
    <BrowserRouter>
    <SmoothScroll />
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/restricted-page' element={<RestrictedPage/>}></Route>
        {/* <Route path='/pricing' element={<PricingPlan/>}></Route> */}
        {/* <Route path='/faq' element={<Faq/>}></Route> */}
        <Route path='/project-details/:id' element={<ProjectDetails/>}></Route>
        <Route path='/rolunk' element={<TeamSingle/>}></Route>
        <Route path='/error' element={<NotFound/>}></Route>
        {/* Blog removed */}
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/service-single' element={<ServiceSingle/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        {/* Blog removed */}
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/megjelenesek' element={<Appearances/>}></Route>
        <Route path='/terms' element={<Terms />}></Route>
        <Route path='/cookies-policy' element={<Cookies />}></Route>
        <Route path='/privacy-policy' element={<Privacy />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
