import React from 'react'
import { Input, Label } from 'reactstrap';

const InputComponent = ({label, id, value, onChange, type}) => {
  return (
    <div>
      <Label htmlFor={id} className="w-100">
        {label}:
        <Input type={type || 'text'} id={id} value={value} onChange={onChange} />
      </Label>
    </div>
  );
};

export default InputComponent;