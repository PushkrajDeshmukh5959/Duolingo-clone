import { Sidebar } from "@/components/sidebar";
import { MobilHeader } from "@/components/mobile-header";
import { Children } from "react";

type Props ={
    children: React.ReactNode;
};

 const MainLayout = ({
    children,
 }: Props) =>{
    return(
        <>
        <MobilHeader/>
        <Sidebar className="hidden lg:flex"/>
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="max-w-[1050px] mx-auto pt-6 h-full">
            {children}
            </div>
        </main>
        </>
    );
};


export default MainLayout;