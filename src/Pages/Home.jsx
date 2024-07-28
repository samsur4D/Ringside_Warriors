import Banner from '../Home/Banner';
import Benefit from '../Home/Benefit';
import Coaces from '../Home/Coaces';
import Footer from '../Home/Footer';
import Professional from '../Home/Professional';
import Upfooter from '../Home/Upfooter';

const Home = () => {
    return (
        <div className='w-full'> 
            <Banner></Banner>

            <div className='bg-[#3E2723]'>
            <Professional></Professional>
            </div>
            <div className='bg-black'>
             <Coaces></Coaces>
            </div>
            {/* <Benefit></Benefit> */}
            <Upfooter></Upfooter>
        </div>
    );
};

export default Home;