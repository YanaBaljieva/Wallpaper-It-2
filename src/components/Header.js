import logo from "../assets/wallpaperit-Logo.png"
import search from '../assets/wallpaperit_sprite-search.png'
import signin from '../assets/signin.png'
import wishlist from '../assets/wishlist.png'
import bag from '../assets/bag.png'
import tick from '../assets/tick_icon.svg'

function Header() {
    return (   
        <div>
        <div className="flex-1 mx-auto">    
            <div className="flex flex-row items-center justify-between relative lg:pt-[1.875rem] lg:pb-[1.875rem] lg:pl-[1rem] lg:pr-[1rem]">
                <div>   
                    <img src={logo} className="logo lg:block hidden lg:mx-auto lg:ml-0" alt="WALLPAPER IT"/>
                </div>
                <div className="justify-center items-center relative hidden lg:block md:max-w-[33.33%] w-full h-11 ">
                    <div className="relative w-full">
                        <form className="w-full">
                            <input className="bg:transparent outline-2 border-2 border-[#6ECEB2] outline-[#6ECEB2] font-['avenir'] rounded-3xl pt-[8px] pr-[40px] pb-[8px] pl-[12px] w-full h-full text-black placeholder-black font-thin" placeholder="Search for products..."/>
                            <button type="submit" className="absolute flex right-1 top-0 bottom-0 cursor-pointer items-center pr-[0.25rem]" >
                                <img src={search} className="h-[28px] w-[32px]" alt="Search icon"/>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex items-center w-full pr-4 lg:w-auto justify-end lg:pr-0">
                    <nav className="flex h-100 w-100 items-center justify-between">
                        <div className="lg:hidden flex h-full ">
                            <button className="px-3 py-3 flex justify-center items-center w-[3.375rem] outline-2 outline-transparent z-30 outline-offset-2"><span className="h-6 w-6 block align-middle">&#9776;</span></button> 
                            <button className="flex items-center justify-center outline-transparent outline-2 cursor-pointer z-30 outline-offset-2"><img src={search} className="h-[28px] w-[32px] block align-middle" alt="Search icon"/></button>   
                        </div> 
                        <a className="Logo lg:hidden w-full h-full flex" aria-label="Logo" href="/">
                            <img src={logo} className="w-[130px] h-[55px] py-3 mx-auto my-0 md:w-auto" alt="logo"/>
                        </a>
                        <ul className="lg:flex hidden h-100 flex-row items-center justify-items-end">
                            <li className="relative flex cursor-pointer items-center flex-col lg:mr-[35px] ml-0">
                                <div className="relative flex justify-center z-[90]">
                                    <button className="text-gray-900 group bg-white rounded-md flex justify-center items-center text-base font-medium right-2/4 focus:outline-none">
                                        <img src={signin} alt="sign in"/>
                                    </button>
                                </div>
                                <span className="text-[12px]  mt-[3px] break-all max-w-176  ">Sign In</span>
                            </li>
                            <li className="lg:mr-[35px] relative flex ml-[1.5rem] cursor-pointer flex-col items-center">
                                
                                <img src={wishlist} alt="wishlist"/>
                                <span className="text-[12px] mt-[3px] cursor-pointer" title="Wish List">Wishlist</span>
                            </li>
                            <li className="lg:mr-[25px] relative flex cursor-pointer items-center flex-col">
                                <button className="relative flex cursor-pointer flex-col items-center ml-[1.5rem]">
                                    <img src={bag} alt="bag"/>
                                </button>
                                <span className="text-[12px] ml-[26px] mt-[8px] cursor-pointer" title="View your Bag">Bag</span>
                            </li>
                        </ul> 
                        <ul className="lg:hidden flex h-100 flex-row items-center justify-items-end m-0 p-0">
                            <li className="relative flex cursor-pointer flex-col items-center ml-0"> 
                                <img src={wishlist} alt="wishlist"/> 
                                
                            </li>
                            <li className="relative ml-[1.5rem] flex cursor-pointer flex-col items-center lg:mr-[15px]">  
                                <img src={bag} alt="bag"/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <nav className="lg:block border-[#6ECEB2] hover:border-[#d8ffea] p-2 border-b-4">
                <ul className="lg:flex lg:justify-around lg:px-[1.875rem] ">
                    <li>
                        <a className="relative h-100 t-[0.25rem] w-auto justify-center border-b-4 border-transparent hover:border-[#6ECEB2] pb-2 font-['avenir'] tracking-widest" href="/">WALLPAPER</a>
                        <span className="arrow down ml-3"></span>
                    </li>
                    <li>
                        <a className="relative top-1 h-100 w-auto justify-center border-b-4 border-transparent hover:border-[#6ECEB2] pb-1 font-['avenir'] tracking-widest" href="/">
                            PAINT
                        </a>
                        <span className="arrow down ml-3"></span>
                    </li>
                    <li>
                        <a className="relative top-1 h-100 w-auto justify-center border-b-4 border-transparent hover:border-[#6ECEB2] pb-1 font-['avenir'] tracking-widest" href="/">
                            BRANDS
                        </a>
                        <span className="arrow down ml-3"></span>
                    </li>
                    <li>
                        <a className="relative top-1 h-100 w-auto justify-center border-b-4 border-transparent hover:border-[#6ECEB2] pb-1 font-['avenir'] tracking-widest" href="/">
                            WALL MURALS
                        </a>
                    </li>
                    <li>
                        <a className="relative top-1 h-100 w-auto justify-center border-b-4 border-transparent hover:border-[#6ECEB2] pb-1 font-['avenir'] tracking-widest" href="/">
                            WALL ART
                        </a>
                        <span className="arrow down ml-3"></span>
                    </li>
                    <li>
                        <a className="relative top-1 h-100 w-auto justify-center border-b-4 border-transparent hover:border-[#6ECEB2] pb-1 font-['avenir'] tracking-widest" href="/">
                            SALE
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="font-['avenir', 'Helvetica', 'sans-serif'] hidden bg-[#f8f8f8] relative md:flex justify-center items-center p-3">
            <div className="mr-[120px]">
                <a href="/" >
                    <span className="ml-1">
                        <span className="w-3 h-2.5">
                            <img className="inline" src={tick} alt="tick"/>
                        </span>
                    </span>
                    <span className="font-['DMSerifDisplay'] text-14 lg:text-16 font-bold ml-1">Free Delivery</span>
                    <span className="font-['avenir'] text-12 lg:text-14 ml-1">On All Orders Over £50</span>
                </a>
            </div>
            <div className="ml-[60px] mr-[100px]">
                <a href="/" >
                        <span className="ml-1">
                            <span className="w-3 h-2.5">
                                <img className="inline" src={tick} alt="tick"/>
                            </span>
                        </span>
                        <span className="font-['DMSerifDisplay'] text-14 lg:text-16 font-bold ml-1">Customers Rate Us 4.7 / 5</span>
                    </a>
                </div>
                <div className="ml-[120px] ">
                <a href="/" >
                        <span className="font-['DMSerifDisplay'] text-14 lg:text-16 font-bold ml-1">Free & Easy</span>
                        <span className="font-['avenir'] text-12 lg:text-14 ml-1">Returns*</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;