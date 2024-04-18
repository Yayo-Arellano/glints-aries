import React from 'react';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { StyledLink } from './LinkStyle';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  id?: string;
  url?: string;
  external?: boolean;
  monochrome?: boolean;
  removeUnderline?: boolean;
}

export const Link = ({
  children,
  external = false,
  monochrome = false,
  removeUnderline = false,
  url,
  ...props
}: LinkProps) => {
  return (
    <StyledLink
      href={url}
      data-underline={!removeUnderline}
      data-monochrome={monochrome}
      {...(external && { target: '_blank' })}
      external={external}
      {...props}
    >
      <Typography variant="body1" as="span">
        {children}
      </Typography>
      {external && <Icon name="ri-external-link-line" />}
    </StyledLink>
  );
};
