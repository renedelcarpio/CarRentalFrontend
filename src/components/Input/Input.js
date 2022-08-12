import React from 'react';

const Input = ({
  className,
  label,
  name,
  type,
  placeholder,
  value,
  onBlur,
  onChange,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        className={`input ${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
