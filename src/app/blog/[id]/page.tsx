import BlogHeader from '../../../../src/components/BlogHeader'
import getPostDetail from '../../../utils/getPostDetail'
import dynamic from 'next/dynamic'

const PostDetail = dynamic(() => import('../../../components/PostDetail'), {
  ssr: false,
})

interface BlogProps {
  params: {
    id: string
  }
}

export default async function Blog({ params }: BlogProps) {
  const { header, content } = await getPostDetail(params.id)

  return (
    <>
      <BlogHeader />
      <div style={{ paddingTop: '90px' }}>
        <PostDetail header={header} content={content} />
      </div>
    </>
  )
}
