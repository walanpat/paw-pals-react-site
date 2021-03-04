import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';


const Journal = () => {
return(
<div>
<Link to='/home'>
    <p>Home</p>
    </Link>
    <a href='https://docs.google.com/document/d/1AeJU9i6R1beBSZ6G_uPGY0Gtxo_W2_3YWnP483mDmAI/edit?usp=sharing'>Meeting 2/3/21</a>

    <a href='https://docs.google.com/document/d/1YI8J9i8_FOxLdjgpdSB12ypoPSalViPnFgXx5vQYgQg/edit?usp=sharing'> Meeting 2/22/21</a>
    <a href='https://docs.google.com/document/d/1YvmnWhVRKSwcognusNchkWEV1NeNlFSdzr1bJfJ65L0/edit?usp=sharing'> Meeting 3/2/21</a>
    
</div>
)}
export default Journal;
