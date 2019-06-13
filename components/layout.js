import Header from '../components/header';
import '../css/site.css'

const Layout = props => (
    <div className='layoutStyle'>
        <Header />
        {props.children}
    </div>
);

export default Layout;