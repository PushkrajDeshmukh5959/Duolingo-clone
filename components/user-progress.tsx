import { Ghost, InfinityIcon, Link } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";


type Props ={
    activeCourse: {imageSrc: string; title: string}; // todo: replace with bd types
    hearts: number;
    points: number;
    havActiveSubscription: boolean;
};



export const UserProgress = ({activeCourse, 
    points, 
    havActiveSubscription, 
    hearts}: Props) =>{
    return(
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link>
            <Button>
                <Image    
                src={activeCourse.imageSrc}
                alt={activeCourse.title}
                className="rounded-md border"
                width={32}
                height={32}
                />
            </Button>
            </Link>
            <Link href="shop">
                {/* points image */}
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/" height={28} width={28} alt="Points"  className="mr-2"/>
                    {points}
                </Button>
            </Link>
            <Link href="shop">
                {/* heart image */}
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/" height={22} width={22} alt="Hearts"  className="mr-2"/>
                    {havActiveSubscription ? <InfinityIcon className="h-4 w-4 storke-[3]" /> :hearts}
                </Button>
            </Link>
        </div>
    );
}; 