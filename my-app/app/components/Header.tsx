import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const Header = () =>{
    return(
        <main>
            <div className="h-[80px] bg-[#C7D3D4FF] border-b border-[#603F83FF] md:w-full ">
                <div className="max-w-[1440px] m-auto flex flex-row justify-around items-center p-7">
                    <div className="text-2xl font-extrabold text-[#603F83FF] ">
                        <p>E COMMERCE STORE</p>
                    </div>
                    <div>
                        <ul className="flex flex-row gap-10 text-[#603F83FF] font-medium text-lg">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/products"}>Products</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex gap-5 ">
                        <CgProfile  className="w-[24px] h-[30px] "/>
                        <Link href={"/Cart"}><LuShoppingCart className="w-[24px] h-[30px] " /></Link>

                    </div>

                </div>
                    
            </div>
        </main>
    )
}

export default Header;


