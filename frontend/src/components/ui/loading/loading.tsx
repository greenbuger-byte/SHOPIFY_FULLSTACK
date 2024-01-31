import React from 'react';

const Loading = () => {
  return (
    <div className="inset-0 w-screen h-screen flex items-center justify-center">
      <div className="pulse">Получение данных ...</div>
    </div>
  );
};

export default Loading;
