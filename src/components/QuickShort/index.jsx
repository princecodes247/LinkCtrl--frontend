import React from 'react';
import Button from '../Button';

function QuickShort() {
  return (
    <div className="w-full flex justify-center">
      <form className="mx-auto">
        <input className="h-full" type="text" />
        <Button>Shorten</Button>
      </form>
    </div>
  );
}

export default QuickShort;
