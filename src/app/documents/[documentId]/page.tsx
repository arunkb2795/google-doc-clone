import Editor from '@/components/partials/editor'

const Document = async ({
  params,
}: {
  params: Promise<{ documentId: string }>
}) => {
  const { documentId } = await params
  console.log('ID', { documentId })
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  )
}

export default Document
