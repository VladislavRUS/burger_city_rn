import React from 'react';

import { Checkbox } from './RoundedCheckbox.styles';

interface IRoundedCheckboxProps {
  isActive: boolean;
}

const RoundedCheckbox: React.FC<IRoundedCheckboxProps> = ({ isActive }) => (
  <Checkbox isActive={isActive} />
);

export default RoundedCheckbox;
