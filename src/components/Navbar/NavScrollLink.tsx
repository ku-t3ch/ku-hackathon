import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { Link } from 'react-scroll';
interface Props {
  to: string;
  className?: string;
  children?: ReactNode;
}

export const NavScrollLink: FC<Props> = ({ to, className, children }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Link
      to={to}
      duration={800}
      smooth="easeInOutQuart"
      spy={true}
      className={`flex items-center font-medium hover:text-primary cursor-default ${className}`}
      activeClass="text-primary shadow-[inset_0_-2.5px]"
      onClick={() => {
        if (pathname == '/') {
          return;
        }

        router.push('/');
      }}
    >
      {children}
    </Link>
  );
};
