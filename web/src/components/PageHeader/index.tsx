type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <>
      <h4 className="mt-4">{title}</h4>
      <hr />
    </>
  );
}
