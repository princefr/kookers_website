


function CourseItem({course}) {
    return (
        <figure className="bg-white overflow-hidden">
            <img
                className="h-48 w-96  object-cover"
                src={course.photoUrl}
                alt=""
            />
            <figcaption className="px-2 py-2">
                <div className="flex flex-row justify-between">
                    <h1 className="font-semibold">{course.name}</h1>
                    <div className="bg-gray-300  px-1 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-0.5">
                        <dt className="text-amber-500">
                        <svg className="w-3 h-3" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                        </dt>
                        <dd className=" m-auto text-xs font-montserrat">4.7 (200)</dd>
                    </div>
                </div>


                <div className="flex flex-row justify-between">
                    <div>
                        <div className="inline-flex items-center rounded-full bg-white  border-gray-200 p-px">
                            <img
                                className="w-8 h-8 object-cover rounded-full ring-1 ring-black"
                                src={course.poster.photoUrl}
                                alt="Avatar of Tailwind CSS Design"
                            />
                            <span className="px-1 text-sm">{course.poster.first_name}  {course.poster.last_name}</span>
                        </div>
                    </div>

                    <div className="font-medium font-montserrat">
                        47 €
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default CourseItem