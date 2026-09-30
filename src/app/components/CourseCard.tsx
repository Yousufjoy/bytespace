import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";

import data from "@/data/courses.json";
import { LIME, BLUE, INK, CARD_SHADOW } from "@/lib/theme";

export interface Course {
  id: number;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  students: string;
  image: string;
}

interface CourseCardProps {
  /** Course object (see data/courses.json) */
  course: Course;
  /** Optional override for the lime "2K+" badge */
  studentsLabel?: string;
  /** Optional override for the link (defaults to /courses/:id) */
  href?: string;
}

export default function CourseCard({
  course,
  studentsLabel,
  href,
}: CourseCardProps) {
  return (
    <Link href={href ?? `/courses/${course.id}`} className="block">
      <article
        className={`flex flex-col rounded-[18px] border border-[#cfc5c5] bg-white p-[15px] transition-shadow hover:shadow-md ${CARD_SHADOW}`}
      >
        {/* Thumbnail + glass badges */}
        <div className="relative h-[197px] w-full overflow-hidden rounded-[14px] xl:aspect-[341/197] xl:h-auto">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-[18px] flex items-center justify-between gap-2 text-[11px] text-zinc-700">
            {[
              `${course.lessons} Lessons`,
              course.duration,
              `${course.comments} Comments`,
            ].map((label) => (
              <span
                key={label}
                className="inline-flex h-[26px] items-center whitespace-nowrap rounded-full bg-white/60 px-2.5 backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Title + rating */}
        <div className="mt-[15px] flex items-start justify-between gap-3">
          <h3
            className="truncate text-[20px] font-semibold leading-[28px]"
            style={{ color: INK }}
          >
            {course.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-[15px] font-medium leading-[28px] text-[#767676]">
            <span>{course.rating}</span>
            <Star className="h-4 w-4 fill-[#cfd0d3] text-[#cfd0d3]" />
          </div>
        </div>

        {/* Author */}
        <p className="text-[11px] font-medium leading-[21px] text-[#9c9c9c]">
          by{" "}
          <span className="cursor-pointer underline" style={{ color: BLUE }}>
            {course.author}
          </span>
        </p>

        {/* Level pill + avatars */}
        <div className="mt-[14px] flex items-center">
          <span className="inline-flex h-[30px] items-center gap-1.5 rounded-full border border-[#e6e8ec] bg-white px-2.5 text-[13px] font-medium text-[#4b4d55]">
            <BarChart2 className="h-3.5 w-3.5 text-[#6b6e76]" />
            {course.level}
          </span>
          <div className="ml-3 flex items-center">
            {data.avatars.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                className="h-[30px] w-[30px] flex-none rounded-full border-2 border-white object-cover"
                style={{ marginLeft: i === 0 ? 0 : -6 }}
              />
            ))}
            <span
              className="-ml-1.5 flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-black"
              style={{ background: LIME }}
            >
              {studentsLabel ?? course.students}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-baseline leading-[30px]">
          <span className="text-[18px] font-bold" style={{ color: BLUE }}>
            ${course.price}
          </span>
          <span className="ml-0.5 text-[11px] text-[#a7a7a7]">/lifetime</span>
        </div>
      </article>
    </Link>
  );
}
