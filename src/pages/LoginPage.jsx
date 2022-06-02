import { faUser, faEnvelope, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrandLogoComp, BtnComp, InputComp, } from '../components'

const LoginPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [mata, setMata] = useState(true);

    const klikMata = () => {
        setMata(!mata)
    }


    return (
        <div className='registerPage min-h-screen flex '>


            <div className='kanan l flex-1 px-[20px] py-2 lg:px-16 lg:py-7 w-full md:py-5 flex flex-col  justify-between min-h-screen '>

                <BrandLogoComp className={'text-xl md:text-4xl text-center   lg:text-3xl '} />



                <div className="block">
                    <h1 className='font-bold text-xl text-center'>Masuk</h1>
                    <div className="text-center">silahkan masukan email atau username untuk masuk ke akun anda</div>

                    <div className="inputGroup mt-5 lg:w-[50%] mx-auto">
                        <div className="lg:flex gap-7 lg:gap-7 relative">
                            <div className='relative flex w-full items-center '>
                                <InputComp title={'Email atau Username'} type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                <FontAwesomeIcon icon={faUser} className='pb-3 absolute right-0 text-gray-500' />
                            </div>

                        </div>



                        <div className="lg:flex gap-7 lg:gap-7 relative">
                            <div className='relative flex w-full items-center '>
                                <InputComp title={'password'} type={mata ? 'password' : 'text'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <FontAwesomeIcon onClick={klikMata} icon={mata ? faEye : faEyeSlash} className='cursor-pointer pb-3 absolute right-0 text-gray-500' />
                            </div>
                        </div>

                        <div className="flex items-center cursor-pointer justify-center  ">
                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 :focus:ring-blue-600 :ring-offset-gray-800 focus:ring-2 :bg-gray-700 :border-gray-600" />
                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 :text-gray-300">I agree with the <a href="#" className="text-main-color :text-blue-500 hover:underline">terms and conditions</a>.</label>
                        </div>

                        <BtnComp className={'mt-5 px-10 w-full'} onClick={() => alert('daftar akun')} >Daftar Akun</BtnComp>


                        <div className=" pt-5 lg:pt-10  text-center font-bold  ">Belum mempunyai akun ? <Link to={'/login'} className='text-main-color'>Silahkan Daftar</Link></div>
                    </div>

                </div>
                <div className="bottom text-center">
                    &copy; 2022 - <a href="#" className='text-amber-800'>Rivo Pelu</a>
                </div>
            </div>
            <div className='bg-registerPage bg-login w-[50%]'></div>
        </div>
    )
}

export default LoginPage