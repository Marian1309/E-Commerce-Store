import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto py-5">
        <p className="text-center text-black">
          &copy; {new Date().getFullYear()} Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
