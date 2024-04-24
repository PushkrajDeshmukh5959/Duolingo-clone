import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";

const LearnPage = () =>{
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                Sticky sidebar
            </StickyWrapper>
            <UserProgress
            activeCourse={{ title:"Spanish" , imageSrc: "/next.svg"}}
            hearts={5}
            points={100}
            havActiveSubscription={false}
            />
            <FeedWrapper>
                {/* try for fixed postion */}
                {/* <div className="h-[20px] w-full bg-blue-500 "/> */}
                {/* name of lang. user take */}
                <Header title="Spanish"/>
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;
