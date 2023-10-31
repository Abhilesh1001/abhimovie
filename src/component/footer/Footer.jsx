import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <div className=' bg-blue-600 relative top-[50px] md:top-[50px] 2xl:top-[55px] text-white font-bold'>
            <div className='p-10'>
                <div className="flex flex-wrap">
                    <div className="w-40 ">
                        <div>ABHIMOVIE</div>
                        <div>MOVIE</div>
                        <div>MOVIE</div>
                        <div>TV-Series</div>
                    </div>
                    <div className="w-40">
                        <div>Generes</div>
                        <div>comdedy</div>
                        <div>Romance</div>
                        <div>action</div>
                        <div>crime</div>
                        <div>mystry</div>
                    </div>
                    <div className="w-96">
                        <div>Suscribe</div>
                        <div>Suscribe to the ABHIMOVIES list to received updates on movies, tv-series and news pf top movies</div>
                    </div>
                    <div className=' w-96'>
                        <div className='  text-red-200'>ABHIMOVIES</div>
                        <div>Copyright © 2023 ABHIMOVIES. All Rights Reserved.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer