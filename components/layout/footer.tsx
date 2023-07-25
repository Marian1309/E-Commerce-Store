import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="border-t bg-white dark:bg-transparent">
      <div className="mx-auto py-5">
        <p className="text-center text-black dark:text-white">
          &copy; {new Date().getFullYear()} Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
