import Image from 'next/image'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Sectiontwo from '../components/sectiontwo'
import Sectionthree from '../components/sectionthree'
import Sectiontfor from '../components/sectionfor'
import Sectiontfive from '../components/sectionfive'
import Sectiontsix from '../components/sectionsix'
import Footer from '@/components/footer'
import Sectionsevenhome from '@/components/sectionsevenhome'
import Team from '@/components/Team'
import Sectioneight from '@/components/Sectioneight'
import Sectioneighthome from '@/components/sectioneighthome'
import 'typeface-titillium-web';
// index.js or index.jsx

import 'typeface-raleway';
import Sectionninehome from '@/components/sectionninehome'
import Newsslider from '@/components/newsslider'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  overflow-x-hidden">
      <Navbar />
       <HeroSection /> 
        <Sectiontwo/>
       <Sectionthree/>
       <Sectiontfor/>
       <Sectiontfive/>
       <Sectiontsix/> 
         <Sectionsevenhome></Sectionsevenhome> 
         <Sectioneighthome/> 
           {/* <Team/>  */}
          <Newsslider/>
           <Footer/>    
      
    </main>
  )
}
