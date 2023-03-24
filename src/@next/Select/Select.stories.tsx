import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

import { Select, SelectProps } from './Select';
import { SearchableSelect } from './selectStoryHelper/Searchable';
import { Select as SelectHelper } from './selectStoryHelper/Select';

(Select as React.FunctionComponent<SelectProps>).displayName = 'Select';

export default {
  title: '@next/Select',
  component: Select,
  subcomponents: {
    'Select.Label': Select.Label,
    'Select.OptionList': Select.OptionList,
    'Select.Option': Select.Option,
    'Select.ActivatorTextInput': Select.ActivatorTextInput,
    'Select.ActivatorSelect': Select.ActivatorSelect,
  },
  decorators: [withGlintsPortalContainer],
} as Meta;

const countries = [
  { label: 'Cambodia', value: 'Cambodia' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Malaysia', value: 'Malaysia' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Singapore', value: 'Singapore' },
  { label: 'Taiwan', value: 'Taiwan' },
  { label: 'Thailand', value: 'Thailand' },
  { label: 'Vietnam', value: 'Vietnam' },
];

const options = [
  {
    active: false,
    disabled: false,
    id: '1',
    label: 'All status',
    value: 'All status',
  },
  {
    active: false,
    disabled: false,
    id: '2',
    label: 'Completed',
    value: 'Completed',
  },
  {
    active: false,
    disabled: false,
    id: '3',
    label: 'Pending',
    value: 'Pending',
  },
  {
    active: false,
    disabled: true,
    id: '4',
    label: 'Expired',
    value: 'Expired',
  },
  {
    active: false,
    disabled: false,
    id: '5',
    label: 'Cancelled',
    value: 'Cancelled',
  },
];

const NonSearchableSingleSelectTemplate: Story<SelectProps> = args => {
  return <SelectHelper options={options} {...args} />;
};

export const NonSearchableSingleSelect = NonSearchableSingleSelectTemplate.bind(
  {}
);

NonSearchableSingleSelect.args = {};

const NonSearchableMultiSelectTemplate: Story<SelectProps> = args => {
  return <SelectHelper options={options} {...args} allowMultiple />;
};

export const NonSearchableMultiSelect = NonSearchableMultiSelectTemplate.bind(
  {}
);

NonSearchableMultiSelect.args = {};

const slicedCountries = countries.slice(0, 5);

const SearchableMultiSelectTemplate: Story<SelectProps> = args => {
  return <SearchableSelect data={slicedCountries} {...args} />;
};

export const SearchableMultiSelect = SearchableMultiSelectTemplate.bind({});

SearchableMultiSelect.args = {
  allowMultiple: true,
};

SearchableMultiSelect.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Malaysia', value: 'Malaysia' },
        { label: 'Singapore', value: 'Singapore' },
        { label: 'Taiwan', value: 'Taiwan' },
        { label: 'Vietnam', value: 'Vietnam' },
      ];

      const [inputValue, setInputValue] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    
      const [options, setOptions] = useState(countries);
    
      const handleInputChange = (value: string) => {
        setInputValue(value);
    
        if (value === '') {
          setOptions(countries);
          return;
        }
    
        const filterRegex = new RegExp(value, 'i');
        const filterOptions = options.filter(country =>
          country.label.match(filterRegex)
        );
        setOptions(filterOptions);
      };
    
      const handleSelect = (selected: string) => {
        if (selectedOptions.includes(selected)) {
          setSelectedOptions(selectedOptions.filter(option => option !== selected));
        } else {
          setSelectedOptions([...selectedOptions, selected]);
        }
      };
    
      const optionsMarkup =
        options.length > 0
          ? options.map(option => {
              const { label, value } = option;
    
              return (
                <Select.Option
                  key={value}
                  label={label}
                  value={value}
                  selected={selectedOptions.includes(value)}
                />
              );
            })
          : null;
    
      const removeTag = useCallback(
        tag => () => {
          const options = [...selectedOptions];
          options.splice(options.indexOf(tag), 1);
          setSelectedOptions(options);
        },
        [selectedOptions]
      );
    
      const tagsMarkup = selectedOptions.map(option => (
        <StyledTag
          key={\`option-\${option}\`}
          onRemove={removeTag(option)}
          textColor={Blue.S99}
        >
          {option}
        </StyledTag>
      ));
    
      useEffect(() => {
        if (options.length === 0) {
          setIsSearchEmpty(true);
        }
    
        if (options.length > 0 && isSearchEmpty === true) {
          setIsSearchEmpty(false);
        }
      }, [isSearchEmpty, options]);
    
      return (
        <div style={{ width: '500px' }}>
          <Select.Label>Label</Select.Label>
          <Select
            {...args}
            activator={
              <Select.TextInput
                value={inputValue}
                onChange={(value: string) => handleInputChange(value)}
                placeholder="Search"
              />
            }
          >
            <Select.OptionList onSelect={handleSelect} isEmpty={isSearchEmpty}>
              {optionsMarkup}
            </Select.OptionList>
          </Select>
          <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
        </div>
      );
      `,
    },
  },
};

const MultiSelectScrollableTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const MultiSelectScrollable = MultiSelectScrollableTemplate.bind({});

MultiSelectScrollable.args = {
  allowMultiple: true,
  scrollable: true,
};
