import { ReactNode } from 'react'
// import Header from '../components/Header' 
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

interface Props{
  children: ReactNode;
  title: string;
  subtitle: string;
}


const Layout = ({children, title, subtitle}: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <Hero title={title} subtitle={subtitle}/>
        <div className='container mx-auto  flex-1'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout