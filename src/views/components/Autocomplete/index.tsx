import * as React from 'react';
import { Input, Empty, List } from 'antd';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/svgs/search-icon.svg';

const FieldSearch = styled(Input)`
  outline: none;
  height: 60px;
  background: ${({ theme }) => theme.bgSearch};
  border-radius: 4px;
  border: 1px solid #e3dfdf;
  .anticon-search {
    font-size: 18px;
    color: ${({ theme }) => theme.color};
  }
  .ant-input {
    font-size: 18px;
    font-weight: 500;
    background: transparent;
    color: ${({ theme }) => theme.color};
  }
`;

const SearchOutIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.color};
  margin-right: 6px;
`;

const Suggestions: typeof List = styled(List)`
  position: absolute;
  left: 0;
  right: 0;
` as any;

interface ISuggestionList {
  show: boolean;
  dataInput: string;
  filtered: string[];
  onClick: React.MouseEventHandler;
}

const SuggestionList: React.FC<ISuggestionList> = ({ show, dataInput, filtered, onClick }) => {
  if (show && dataInput) {
    return (
      <Suggestions
        bordered
        dataSource={filtered}
        locale={{
          emptyText: <Empty description="No suggestion" image={Empty.PRESENTED_IMAGE_SIMPLE} />,
        }}
        renderItem={(item: string) => <List.Item onClick={onClick}>{item}</List.Item>}
      />
    );
  }

  return null;
};

interface IAutocomplete {
  suggestions: string[];
}

const Autocomplete: React.FC<IAutocomplete> = ({ suggestions }) => {
  const [show, setShow] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [dataInput, setDataInput] = React.useState('');
  const [filtered, setFiltered] = React.useState([] as string[]);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setShow(!!e.currentTarget.value);
    setDataInput(e.currentTarget.value);
    setFiltered(
      suggestions.filter(
        (item: string) => item.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1,
      ),
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.keyCode) {
      case 13:
        setShow(false);
        setDataInput(filtered[active]);
        break;
      case 38:
        if (active === 0) return;
        setActive(active - 1);
        break;
      case 40:
        if (active - 1 === filtered.length) return;
        setActive(active + 1);
        break;
      default:
        break;
    }
  };

  const handleClick = (e: React.BaseSyntheticEvent) => {
    setActive(0);
    setFiltered([]);
    setShow(false);
    setDataInput(e.currentTarget.innerHTML);
  };

  return (
    <React.Fragment>
      <FieldSearch
        placeholder="Search..."
        value={dataInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        prefix={<SearchOutIcon />}
      />
      <SuggestionList show={show} dataInput={dataInput} filtered={filtered} onClick={handleClick} />
    </React.Fragment>
  );
};

export default Autocomplete;
