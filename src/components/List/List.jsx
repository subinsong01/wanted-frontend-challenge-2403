import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ completed }) => completed && css`
    opacity: 0.5;
    text-decoration: line-through;
  `}
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const ItemText = styled.span`
  flex: 1;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const List = ({ items, onDelete }) => {
  const [completedItems, setCompletedItems] = useState([]);

  const handleCheckboxChange = index => {
    if (completedItems.includes(index)) {
      setCompletedItems(completedItems.filter(item => item !== index));
    } else {
      setCompletedItems([...completedItems, index]);
    }
  };

  return (
    <ul>
      {items.map((item, index) => (
        <StyledListItem key={index} completed={completedItems.includes(index)}>
          <Checkbox
            type="checkbox"
            checked={completedItems.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
          <ItemText>{item}</ItemText>
          <DeleteButton onClick={() => onDelete(index)}>삭제</DeleteButton>
        </StyledListItem>
      ))}
    </ul>
  );
};

export default List;
