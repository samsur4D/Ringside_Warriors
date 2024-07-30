import Banner from '../Home/Banner';
import Benefit from '../Home/Benefit';
import BenefitMobile from '../Home/BenefitMobile';
import BenefitTablet from '../Home/BenefitTablet';
import Coaces from '../Home/Coaces';
import Footer from '../Home/Footer';
import Latest from '../Home/Latest';
import Memebrship from '../Home/Memebrship';
import Professional from '../Home/Professional';
import Upfooter from '../Home/Upfooter';

const Home = () => {
    return (
        <div className='w-full'> 
            <Banner></Banner>

            <div className='bg-[#180e0d]'>
            <Professional></Professional>
            </div>
            <div className='bg-black'>
             <Coaces></Coaces>
            </div>
         <div className='hidden md:hidden lg:block'>
         <Benefit></Benefit>
         </div>
           <div className='block md:hidden lg:hidden'>
           <BenefitMobile></BenefitMobile>
           </div>
           <div className='hidden md:block lg:hidden'>
           <BenefitTablet></BenefitTablet>
           </div>
            <Latest></Latest>
            <Upfooter></Upfooter>
            <Memebrship></Memebrship>
        
        </div>
    );
};

export default Home;