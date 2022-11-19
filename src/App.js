import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, VideoDetail, ChannelDetail, Feed, SearchFeed} from './components'; 

const app = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor : '#F0E68C'}}>
            <Navbar />
            <Routes>
                <Route path ="/" exact element={<Feed />} />
                <Route path="/video/:id" element = {<VideoDetail/>} />
                <Route path="/channel/:id" element = {<ChannelDetail/>} />
                <Route path="/search/:searchTerm" element = {<SearchFeed/>} />
            </Routes>
        </Box>
    </BrowserRouter>
  );


export default app