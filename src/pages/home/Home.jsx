import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import Discuss from "../../components/Discuss";
import Portfolio from "../../components/Portfolio";
import Team from "../../components/Team";
import Work from "../../components/Work";
import Quotation from "../../components/Quotation";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { useRef } from "react";


export default function Home() {
  useEffect(() => {
    Aos.init({duration:3000})
  }, [])
  
  const services = useRef(null);
  const team = useRef(null);
  const working = useRef(null);
  const quotation = useRef(null);
  const portfolio = useRef(null);
  const servicesScroll = () => services.current.scrollIntoView();
  const teamScroll = () => team.current.scrollIntoView();
  const workingScroll = () => working.current.scrollIntoView();
  const quotationScroll = () => quotation.current.scrollIntoView();
  const portfolioScroll = () => portfolio.current.scrollIntoView();
  return (
    <>
      <Header services={servicesScroll} team={teamScroll} working={workingScroll} quotation={quotationScroll} portfolio={portfolioScroll} />
      <Banner />
      <Services refProp={services} />
      <Team refProp={team}/>
      <Work refProp={working}/>
      {/* <Quotation refProp={quotation}/> */}
      <Portfolio refProp={portfolio}/>
      <Discuss/>
      <Footer />
    </>
  );
}
