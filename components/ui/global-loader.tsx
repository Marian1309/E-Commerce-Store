import type { FC } from 'react';

import { ClipLoader } from 'react-spinners';

const GlobalLoader: FC = () => {
  return (
    <div className="h-[90vh] flex-center">
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
};

export default GlobalLoader;
