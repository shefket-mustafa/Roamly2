import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export type ToggleOption = {
    label: string
    value: string;
}

export type ToggleProps = {
    options: ToggleOption[]
    className?: string
}

export default function Toggle({options, className}: ToggleProps) {
  const [alignment, setAlignment] = React.useState('web');
  console.log(options);
  

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className={className}
    >
      {options.map((option) => (
  <ToggleButton key={option.value} value={option.value}>
    {option.label}
  </ToggleButton>
))}
        
    </ToggleButtonGroup>
  );
}