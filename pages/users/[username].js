import { useRouter } from "next/router"
import { useEffect, useState } from "react"

//named by nextjs: ssr
export async function getServerSideProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()

  return {
    props: {
      posts: data
    }
  }
}

export default function User({posts}) {
  const router = useRouter()
  // const [posts, setPosts] = useState([])
  const {username} = router.query

  //client side rendering: not preferred
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     const data = await res.json()
  //     setPosts(data)
  //   }
  //   fetchData()
  // },[])

  return (
    <>
    <h1>This is the user: {username}</h1>
    {posts?.map(post => {
      return <li key={post.id}>{post.title}</li>
    })}
    </>
  )
}