import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';

import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';
import Tag from '../../src/General/Tag';
import {
  PrimaryColor,
  SecondaryColor,
  Greyscale,
} from '../../src/Style/Colors';
import {
  AddIcon,
  CloseIcon,
  TrashIcon,
} from '../../src/General/Icon/components';

const TagContainer = styled.span`
  margin-right: 15px;
`;

const CustomizedTagStory = () => {
  const ClickableCloseIcon = styled(CloseIcon)`
    fill: ${Greyscale.grey};
    cursor: pointer;

    &:hover,
    &:active {
      fill: ${Greyscale.black};
    }
  `;

  const AddTag = styled(Tag)`
    border-color: ${SecondaryColor.lightgrey};

    &:hover {
      border-color: ${Greyscale.grey};
    }

    &:active {
      border-color: ${Greyscale.black};
    }
  `;

  const ResetTag = styled(Tag)`
    color: ${PrimaryColor.glintsred};
    background-color: rgba(236, 39, 43, 0.05);

    &:hover {
      background-color: rgba(236, 39, 43, 0.1);
    }

    &:active {
      background-color: rgba(236, 39, 43, 0.2);
    }
  `;

  return (
    <>
      <StorybookComponent
        title="Tag"
        code="import { Tag } from 'glints-aries'"
        usage={`import { Tag, CloseIcon } from 'glints-aries'
import styled from 'styled-components';

const ClickableCloseIcon = styled(CloseIcon)\`
  fill: ${Greyscale.grey};
  cursor: pointer;

  &:hover,
  &:active {
    fill: ${Greyscale.black};
  }
\`;
<Tag endIcon={<ClickableCloseIcon onClick={() => alert('Clicked!')} />}/>}>Add</Tag>
`}
      >
        <Heading>Customized Tags</Heading>
        <TagContainer>
          <Tag
            endIcon={<ClickableCloseIcon onClick={() => alert('Clicked!')} />}
          >
            Close
          </Tag>
        </TagContainer>
      </StorybookComponent>
      <StorybookComponent
        usage={`import { Tag, AddIcon } from 'glints-aries'
import styled from 'styled-components';

const AddTag = styled(Tag)\`
  border-color: ${SecondaryColor.lightgrey};

  &:hover {
    border-color: ${Greyscale.grey};
  }

  &:active {
    border-color: ${Greyscale.black};
  }
\`;

<AddTag
  border="dashed"
  startIcon={<AddIcon />}
  onClick={() => alert('Clicked!')} />}
>
  Add
</AddTag>
`}
      >
        <TagContainer>
          <AddTag
            border="dashed"
            startIcon={<AddIcon />}
            onClick={() => alert('Clicked!')}
          >
            Add
          </AddTag>
        </TagContainer>
      </StorybookComponent>

      <StorybookComponent
        usage={`import { Tag, TrashIcon } from 'glints-aries'
import styled from 'styled-components';

const ResetTag = styled(Tag)\`
  color: ${PrimaryColor.glintsred};
  background-color: rgba(236, 39, 43, 0.05);

  &:hover {
    background-color: rgba(236, 39, 43, 0.1);
  }

  &:active {
    background-color: rgba(236, 39, 43, 0.2);
  }
\`;

<ResetTag
  border="none"
  startIcon={<TrashIcon />}
  onClick={() => alert('Clicked!')} />}
>
  Reset
</ResetTag>
`}
      >
        <TagContainer>
          <ResetTag
            border="none"
            startIcon={<TrashIcon />}
            onClick={() => alert('Clicked!')}
          >
            Reset
          </ResetTag>
        </TagContainer>
      </StorybookComponent>
    </>
  );
};

const TagTypeStory = () => {
  const props = {
    Tag: [
      {
        name: 'block',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Tag into block style.',
      },
      {
        name: 'outline',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Tag into outline style.',
      },
      {
        name: 'border',
        type: 'string',
        defaultValue: <code>solid</code>,
        possibleValue: <code>solid | dashed | none</code>,
        require: 'no',
        description: "Sets Tag's border style.",
      },
    ],
  };
  return (
    <StorybookComponent
      propsObject={props}
      usage={`<Tag>Default</Tag>
<Tag block>Block</Tag>
<Tag outline>Outline</Tag>
<Tag block outline>Block and Outline</Tag>`}
    >
      <Heading>Types</Heading>
      <TagContainer>
        <Tag>Default</Tag>
      </TagContainer>
      <TagContainer>
        <Tag block>Block</Tag>
      </TagContainer>
      <TagContainer>
        <Tag outline>Outline</Tag>
      </TagContainer>
      <TagContainer>
        <Tag block outline>
          Block and Outline
        </Tag>
      </TagContainer>
      <TagContainer>
        <Tag border="dashed">Dashed border</Tag>
      </TagContainer>
      <TagContainer>
        <Tag border="none">None border</Tag>
      </TagContainer>
    </StorybookComponent>
  );
};

const ClickableTagStory = () => {
  const usage = `<Tag>Non-clickable tag</Tag>
<Tag startIcon={<AddIcon onClick={() => alert('Clicked!')} />}>Clickable icon</Tag>
<Tag endIcon={<CloseIcon onClick={() => alert('Clicked!')} />}>Clickable icon</Tag>
<Tag onClick={() => alert('Clicked!')}>Clickable tag</Tag>`;
  const propsObject = {
    Tag: [
      {
        name: 'startIcon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any',
        require: 'no',
        description: 'Element placed before the children.',
      },
      {
        name: 'endIcon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any',
        require: 'no',
        description: 'Element placed after the children.',
      },
      {
        name: 'onClick',
        type: 'function',
        defaultValue: '-',
        possibleValue: 'function',
        require: 'no',
        description: 'Make the whole tag is clickable',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Clickable Area</Heading>
      <TagContainer>
        <Tag>Non-clickable tag</Tag>
      </TagContainer>
      <TagContainer>
        <Tag startIcon={<AddIcon onClick={() => alert('Clicked!')} />}>
          Clickable icon
        </Tag>
      </TagContainer>
      <TagContainer>
        <Tag endIcon={<CloseIcon onClick={() => alert('Clicked!')} />}>
          Clickable icon
        </Tag>
      </TagContainer>
      <TagContainer>
        <Tag onClick={() => alert('Clicked!')}>Clickable tag</Tag>
      </TagContainer>
    </StorybookComponent>
  );
};

const TagStories = () => (
  <React.Fragment>
    <CustomizedTagStory />
    <Divider theme="grey" />
    <TagTypeStory />
    <Divider theme="grey" />
    <ClickableTagStory />
  </React.Fragment>
);

export default TagStories;
