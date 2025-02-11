import './global.css';

const Navbar: React.FC = () => <></>;
interface PageHeaderProps {
  title?: string;
  subTitle?: string;
  actionComponent?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title = '',
  subTitle,
  actionComponent,
}) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
      {actionComponent && <div className="action">{actionComponent}</div>}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  hideNavbar?: boolean;
  headerTitle?: string;
  headerSubTitle?: string;
  headerSubTitleComponent?: JSX.Element;
}

const Layout: React.FC<LayoutProps> = props => (
  <div className="flex h-full flex-col items-center">
    <Navbar />
    <main className="h-full w-full">
      <div className="mx-auto h-full w-full max-w-[1536px] p-4 sm:p-6 md:p-8">
        <PageHeader
          title={props.headerTitle ?? ''}
          subTitle={props.headerSubTitle}
          actionComponent={props.headerSubTitleComponent}
        />
        <div className="mb-8 grid max-w-[1473px] grid-cols-12 gap-6">
          {props.children}
        </div>
      </div>
    </main>
  </div>
);

export default Layout;
