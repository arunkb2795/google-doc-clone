import Editor from "@/components/partials/editor";

const Document = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;
  console.log({ documentId });
  return (
    <div>
      <Editor />
    </div>
  );
};

export default Document;
