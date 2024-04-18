import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Link, LinkProps } from './Link';

(Link as React.FunctionComponent<LinkProps>).displayName = 'Link';

export default {
  title: '@next/Link',
  component: Link,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const DefaultTemplate: Story<LinkProps> = args => {
  return <Link {...args}>Default Link</Link>;
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  url: '#',
};

const WithinParagraphTemplate: Story<LinkProps> = args => {
  return (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Link external {...args}>
        {' '}
        Default Link
      </Link>{' '}
      Sed volutpat eget mi in consequat. Aliquam cursus nunc pulvinar rutrum
      pharetra.
    </>
  );
};

export const WithinParagraph = WithinParagraphTemplate.bind({});
