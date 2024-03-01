import React, { useState } from 'react';
import styled from 'styled-components';
import List from './components/List/List';

const Wrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const WrapperText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-top: 20px;
  width: 50vh;
  padding: 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
  margin-left : 10px;

  &:hover {
    background-color: ${props => ({ disabled }) => (disabled ? '#007bff' : '#0056b3')};
  }
`;

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInput = () => {
    console.log('Input Value:', inputValue); 
    const trimmedInputValue = inputValue.trim();
    console.log('Trimmed Input Value:', trimmedInputValue); 
    if (trimmedInputValue !== '') {
      setItems([...items, trimmedInputValue]);
      setInputValue('');
    }
  };
  
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true); 
      handleInput();
      setIsButtonDisabled(false); 
    }
  };

  const handleDelete = index => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <Wrapper>
      <WrapperText>TODO-LIST</WrapperText>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="오늘 할 일을 메모하세요"
      />
      <Button onClick={handleButtonClick} disabled={isButtonDisabled}>
        추가
      </Button>
      <hr />
      <List items={items} onDelete={handleDelete} />
    </Wrapper>
  );
}

export default App;
