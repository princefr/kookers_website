import styles from '../../styles/Home.module.css'
import CourseItem from '../../components/courseItem'
import Link from 'next/link'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { useContext } from 'react'
import { DataInPageContext } from '../../utils/DataInPageContext'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_HOME_DATA } from '../../Helpers/GraphQlGetQueries'


function Courses() {
    const {pageData, setPageData} = useContext(DataInPageContext)
    const router = useRouter();

    const HandleNavigation = (_course) => {
        router.prefetch("/courses/" + _course._id)
        setPageData(_course)
        router.push({
            pathname: "/courses/" + _course._id,
            query: _course
        })
    }


    const { loading, error, data } = useQuery(GET_HOME_DATA, {
        variables : {
          userId: "6048d740e0619076d2245d94",
        },
      })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div style={styles}>
            <main>
                <div className="flex flex-row h-screen">
                        <div className="flex flex-col flex-auto">
                            <div className="flex-col grid grid-flow-row grid-cols-4 grid-rows-4 gap-1">
                                {
                                    data.loadCourseHome ? data.loadCourseHome.map((course) => {
                                        return <a key={course._id} onClick={(() => HandleNavigation(course))}>
                                            <CourseItem course={course} key={course._id}/>
                                        </a>
                                    }): null
                                }

 
                            </div>
                        </div>
                    
                </div>
            </main>

        </div>
    )
}



export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN})(Courses)