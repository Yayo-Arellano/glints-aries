import React from 'react';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/icons/icons';
import { Typography } from '../Typography';
import {
  StyledBanner,
  StyledBannerContentContainer,
  StyledBannerTitle,
  StyledBannerTitleContainer,
  StyledCloseIconWrapper,
  StyledFixedCloseIconWrapper,
  StyledFixedIconWrapper,
} from './BannerStyle';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  /** If set will take precedent of status */
  iconName?: IconNames;
  status?: 'success' | 'info' | 'warning' | 'critical';
  children?: React.ReactNode;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  dismissable?: boolean;
  onDismiss?: () => void;
  type?: 'static' | 'fixed' | 'fixed-noicon';
}

const iconNameStatusMap: Record<BannerProps['status'], IconNames> = {
  success: 'ri-checkbox-circle-fill',
  info: 'ri-information-fill',
  warning: 'ri-error-warning-fill',
  critical: 'ri-error-warning-fill',
};

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  function Banner(
    {
      title,
      status,
      iconName,
      children,
      action,
      secondaryAction,
      dismissable = true,
      onDismiss,
      type = 'static',
      ...props
    }: BannerProps,
    ref
  ) {
    const iconByStatus = iconNameStatusMap[status];
    if (!iconByStatus) {
      console.warn(`Status ${status} is not valid, default style will be used`);
    }
    const iconNameValue = iconName
      ? iconName
      : iconByStatus || iconNameStatusMap['info'];

    return (
      <StyledBanner
        ref={ref}
        data-titled={!!title}
        data-status={status}
        data-type={type}
        {...props}
      >
        {type === 'static' ? (
          <StyledBannerTitleContainer>
            <Icon name={iconNameValue} />
            {title && (
              <StyledBannerTitle data-type={type}>
                <Typography as="span" variant="subtitle1">
                  {title}
                </Typography>
              </StyledBannerTitle>
            )}
            {dismissable && (
              <StyledCloseIconWrapper
                role="button"
                onClick={() => onDismiss?.()}
              >
                <Icon name="ri-close" />
              </StyledCloseIconWrapper>
            )}
          </StyledBannerTitleContainer>
        ) : (
          type === 'fixed' && (
            <StyledFixedIconWrapper>
              <Icon name={iconNameValue} />
            </StyledFixedIconWrapper>
          )
        )}
        <StyledBannerContentContainer data-type={type}>
          <Typography as="div" variant="body1">
            {children}
          </Typography>
        </StyledBannerContentContainer>
        <StyledBannerContentContainer data-type={type} data-button="true">
          {action &&
            (secondaryAction !== 'undefined' ? (
              <ButtonGroup>
                {action}
                {secondaryAction}
              </ButtonGroup>
            ) : (
              { action }
            ))}
        </StyledBannerContentContainer>
        {type !== 'static' && dismissable && (
          <StyledFixedCloseIconWrapper
            data-type={type}
            role="button"
            onClick={() => onDismiss?.()}
          >
            <Icon name="ri-close" />
          </StyledFixedCloseIconWrapper>
        )}
      </StyledBanner>
    );
  }
);
