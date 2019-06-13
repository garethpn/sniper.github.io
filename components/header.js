import Link from 'next/link';
import '../css/site.css'

const Header = () => (
  <div className="headerBar">
    <Link href="/">
      <div className="linkStyle">Home</div>
    </Link>
    <Link href="/profile">
      <div className="linkStyle">Profile</div>
    </Link>
    <Link href="/blog">
      <div className="linkStyle">Blog</div>
    </Link>
  </div>
);

export default Header;