import BlogHeader from '../../../src/components/BlogHeader'
import getPostList from '../../utils/getPostList'
import dynamic from 'next/dynamic'

const PostList = dynamic(() => import('../../components/PostList'), {
  ssr: false,
})

export default async function Blog() {
  const posts = await getPostList()

  return (
    <>
      <BlogHeader />
      <div style={{ paddingTop: '90px' }}>
        <PostList posts={posts} />
      </div>
    </>
  )
}
