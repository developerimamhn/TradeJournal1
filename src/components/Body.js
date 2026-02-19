import Pagefore from './Pagefore';
import Pageone from './Pageone';
import Pagethree from './Pagethree';
import Pagetwo from './Pagetwo';
import Footer from './Footer';
import Pagefive from './Pagefive';

const Body = () => {
    return (
        <div className='relative overflow-hidden'>
            <Pageone/>
            <Pagetwo/>
            <Pagethree/>
            <Pagefore/>
            <Pagefive/>
            <Footer/>
        </div>
    );
};

export default Body;
