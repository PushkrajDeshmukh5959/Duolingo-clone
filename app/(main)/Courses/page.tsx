import { getCourse } from "@/db/queries";
import { courses } from "@/db/schema";
import { List } from "./list";




const CoursesPage = async () => {
    const courses = await getCourse();
  return (
    <div className="h-full max-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Courses
      </h1>
            <List
                courses={courses}
                activeCourseId={1}
            />
    </div>
  );
};

export default CoursesPage;