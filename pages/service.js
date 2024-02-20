// import Image from 'next/image'
 import SectiontwoService from '@/components/SectiontwoService';
import Navbar from '../components/Navbar'
// import { MantineProvider } from '@mantine/core';

// import HeroSection from '../components/HeroSection'
// 

import 'typeface-titillium-web';
import 'typeface-raleway';


import HeroSectionService from "@/components/HeroSectionService";
import SectionthreeService from '@/components/SectiontthreeService';
import Sectiontfive from '@/components/sectionfive';
import Sectiontfor from '@/components/sectionfor';
import SectiontforService from '@/components/sectionforservice';
import Footer from '@/components/footer';
import SectionsixService from '@/components/sectionsixservice';
import Sectionseven from '@/components/sectionseven';
//  import { MyFooter } from '@/components/footer';

 export default function Service() {
   return (
     <main className="flex min-h-screen flex-col  overflow-x-hidden">
       <Navbar />
        <HeroSectionService /> 
         <SectiontwoService></SectiontwoService>
       <SectionthreeService></SectionthreeService>

         <SectiontforService></SectiontforService> 
           <Sectiontfive></Sectiontfive> 
          <SectionsixService></SectionsixService>
           <Sectionseven></Sectionseven> 
                 <Footer></Footer>         
      


     </main>
  )
 }
