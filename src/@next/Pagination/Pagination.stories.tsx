import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Pagination } from './Pagination';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PaginationProps } from './paginationUtils';

(Pagination as React.FunctionComponent<PaginationProps>).displayName =
  'Pagination';

export default {
  title: '@next/Pagination',
  component: Pagination,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<PaginationProps> = args => {
  const [page, setPage] = useState(1);

  const { currentPage, ...rest } = args;
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return <Pagination {...rest} currentPage={page} onPageChanged={setPage} />;
};

export const Interactive = Template.bind({});
Interactive.args = { totalItems: 200, pageSize: 10 };
Interactive.parameters = {
  docs: {
    source: {
      code: `  const [currentPage, setCurrentPage] = useState(1);

      return (
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChanged={setCurrentPage}
        />
      );`,
      language: 'javascript',
      type: 'auto',
    },
  },
};
