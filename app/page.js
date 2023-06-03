import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'
import Image from 'next/image'
import Specialities from '@/components/Specialities'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
      <div className='seperatorCont'>
        <Image src='/sectionSeperator.svg' alt=""   fill={true} />
      </div> 
      <Specialities/>

      <div className='seperatorCont'>
        <Image src='/sectionSeperator.svg' alt="animation"   fill={true} />
      </div> 

      <Testimonials />




    </main>
  )
}
