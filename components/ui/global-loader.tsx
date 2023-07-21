import type { FC } from 'react';

import { ClipLoader } from 'react-spinners';

const GlobalLoader: FC = () => {
  return (
    <div className="h-screen flex-center">
      <ClipLoader color="#3498db" size={50} />;
    </div>
  );
};

export default GlobalLoader;
