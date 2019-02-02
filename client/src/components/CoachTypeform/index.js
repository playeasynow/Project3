import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const TypeformWidget = () => {
  return (
    <div className="typeform-widget">
      <ReactTypeformEmbed popup={false} url="https://gurumatch.typeform.com/to/pHdQSo" />
    </div>
  );
};

export default TypeformWidget;