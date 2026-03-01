
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{background: '#1f2937', color: 'white', padding: '1rem'}}>
      <Link to="/" style={{marginRight: '1rem'}}>Home</Link>
      <Link to="/greenhouse/7030" style={{marginRight: '1rem'}}>70/30</Link>
      <Link to="/bom">BOM</Link>
    </nav>
  );
}
