import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  //Requisições normais com fetch ou axios 
  // useEffect(() => {
  //   fetch('https://api-sa-east-1.graphcms.com/v2/cl4okolj70aln01xt0w9r8vwh/master', {
  //     method: 'POST',
  //     body: `query {

  //     }`
  //   })
  // },[])
  
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
