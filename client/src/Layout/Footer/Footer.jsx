import React from 'react'
import'./Footer.css'
import { Link } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai'
import { FaSearchDollar } from 'react-icons/fa'
import {GiArchiveResearch} from'react-icons/gi'

function Footer() {
    return (
        <>
            <div className='wp_footer'>
                <div className='container-fluid'>
                    <div className=' content_footer'>
                        <div className='top_footer'>
                            <div className='host_ftm main_ft'>
                                <h4>what happened</h4>
                                <p><Link className='text-link'>I recommend using Zeppelin rather than Drobox</Link></p>
                                <p><Link className='text-link'>I recommend using Zeppelin rather than Drobox</Link></p>
                                <p><Link className='text-link'>I recommend using Zeppelin rather than Drobox</Link></p>
                                <p><Link className='text-link'>I recommend using Zeppelin rather than Drobox</Link></p>
                                <p><Link className='text-link'>I recommend using Zeppelin rather than Drobox</Link></p>
                                

                            </div>
                             <div className='host_ft'>
                                <h4>about us</h4>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                               
                            </div>
                             <div className='host_ft'>
                                <h4>about us</h4>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                               
                            </div>
                             <div className='host_ft'>
                                <h4>about us</h4>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                               
                            </div>
                             <div className='host_ft'>
                                <h4>about us</h4>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                               
                            </div>
                                                        
                        </div>
                        <div className='bottom_ft dp-fl'>
                            <div className='param'>
                                <p>I recommend using Zeppelin rather than Drobox</p>
                            </div>
                            <div className='icon_ft dp-fl'>
                                <div className='iconfb icon'><AiFillFacebook /></div>
                                <div className='iconsearch icon'> <FaSearchDollar /></div>
                                <div className='iconbook icon'> <GiArchiveResearch/></div>
                                
                               
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer