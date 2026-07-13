import { Typography } from '@mui/material'
import './style.css'
const Footer = () => {
    return(
        <footer id='footerSection'>
            <div className='container'>
                <Typography textAlign={'center'}>
                    &copy; 2024, All Rights Reserved
                </Typography>
            </div>
        </footer>
    )
}

export default Footer