import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  background-color: #9370db;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 18px;
  color: #fff;
`;

export const Input = styled.input`
  width: 200px;
  min-height: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  width: 120px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.5s ease;

  &:hover,
  &:focus {
    background-color: #c4c4c4;
  }
`;