import React from 'react';

function Button({ label, log, disabled }) {
  return (
    <button
      type="button"
      onClick={() => console.log({ log })}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
