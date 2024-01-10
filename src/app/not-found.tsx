import React from "react";
import  Link  from "next/link";
import { ColoredDevider } from "@/shared";
const NotFound=()=>{
return (
    <div
    className="mx-auto mt-[150px] max-w-[600px] shadow-md hover:shadow-lg text-center py-[10px] text-black"
      data-testid="NotFound-div"
    >
        <div className="text-[16px] text-blue-600">404</div>
        <div className="text-black uppercase">Page not Found</div>
        <ColoredDevider/>
        <Link href='/' className="no-underline text-blue-950">Home Page</Link>
    </div>
)
}
export default NotFound;