import WorkspaceContent from './WorkspaceContent';

export async function generateStaticParams() {
  return ['1', '2', '3', '4', '5'].map((id) => ({ id }));
}

export default function WorkspaceDetailPage() {
  return <WorkspaceContent />;
}
