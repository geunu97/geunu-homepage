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
      <PostDetail header={header} content={content} />
    </>
  )
}
