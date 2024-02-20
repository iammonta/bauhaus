

import 'typeface-titillium-web';
import 'typeface-raleway';



import Footer from '@/components/footer';

import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import HeroSectionService from '@/components/HeroSectionService';
import FormBackgroundsection from '@/components/formbackgroundsection';



 export default function Contact() {
   return (
    
     <main className="flex min-h-screen flex-col  overflow-x-hidden">
       <Navbar />
          <FormBackgroundsection/>  
      {/* <ContactForm/> */}
                 <Footer/>         
      


     </main>
  )
 }
