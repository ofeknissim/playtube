import{ Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ytblue from './ytblue.png';



const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{positon: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}} >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={ytblue} alt="Logo" height={40}/>
      </Link>
      <SearchBar />
    </Stack>
  );

export default Navbar