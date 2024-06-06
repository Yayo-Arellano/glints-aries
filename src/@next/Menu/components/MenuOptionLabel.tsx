import React from 'react';
import { Typography } from '../../Typography';
import { Neutral } from '../../utilities/colors';
import { MenuOptionLabelContainer } from './MenuOptionLabelStyle';

interface MenuOptionLabelProps {
  label: React.ReactNode;
  sublabel?: React.ReactNode;
}

export const MenuOptionLabel = ({ label, sublabel }: MenuOptionLabelProps) => {
  if (!sublabel) {
    return (
      <Typography as="span" variant="body1" color={Neutral.B18}>
        {label}
      </Typography>
    );
  }

  return (
    <MenuOptionLabelContainer>
      <Typography as="span" variant="body1" color={Neutral.B18}>
        {label}
      </Typography>
      <Typography as="span" variant="subtitle2" color={Neutral.B40}>
        {sublabel}
      </Typography>
    </MenuOptionLabelContainer>
  );
};
