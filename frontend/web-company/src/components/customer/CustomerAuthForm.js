import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/customerAuth';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Main from '../common/Main';

const CustomerAuthFormBlock = styled(Main)`
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  h3 {
    display: flex;
    align-items: center;
    margin: 0;
    margin-right: 2rem;
    color: ${palette.gray[8]};
  }
  .custom-auth-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .gender-radio,
    .age-radio {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      .radio-inputs {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        label {
          margin-right: 1rem;
          color: ${palette.gray[9]};
          font-size: 1.125rem;
          padding: 0.25rem 0.5rem;
        }
      }
    }
  }
  .react-simple-keyboard {
    padding-bottom: 100px;
  }
`;

const StyledInput = styled.input`
  margin-top: 1rem;
  font-size: 1.125rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const CustomerAuthForm = ({ form, onChange, onSubmit, error }) => {
  const [keyboardInput, setKeyboardInput] = useState('');
  const [layoutName, setLayoutName] = useState('default');
  const dispatch = useDispatch();
  let keyboard = useRef();

  const onChangeInput = (event) => {
    const keyboardInput = event.target.value;
    setKeyboardInput({ keyboardInput });
    keyboard.setInput(keyboardInput);
    dispatch(
      changeField({
        form: 'customerLogin',
        key: 'phoneNumber',
        value: keyboardInput,
      }),
    );
  };

  const onChangeKeyboard = (input) => {
    setKeyboardInput(input);
    dispatch(
      changeField({
        form: 'customerLogin',
        key: 'phoneNumber',
        value: input,
      }),
    );
  };
  const onKeyPress = (button) => {
    if (button === '{shift}' || button === '{lock}') handleShift();
  };
  const handleShift = () => {
    if (layoutName === 'default') {
      setLayoutName('shift');
    } else {
      setLayoutName('default');
    }
  };

  return (
    <CustomerAuthFormBlock>
      <h1>포인트 적립</h1>
      <form className="custom-auth-form" onSubmit={onSubmit}>
        <StyledInput
          autoComplete="phoneNumber"
          name="phoneNumber"
          placeholder="' - ' 을  제외한 번호를 입력하세요"
          readOnly
          onChange={onChangeInput}
          value={keyboardInput}
        />
        <div className="gender-radio">
          <h3>성별</h3>
          <div className="radio-inputs">
            <input
              type="radio"
              id="genderChoice1"
              name="gender"
              value="male"
              onChange={onChange}
            />
            <label htmlFor="genderChoice1">Male</label>
            <input
              type="radio"
              id="genderChoice2"
              name="gender"
              value="female"
              onChange={onChange}
            />
            <label htmlFor="genderChoice2">Female</label>
          </div>
        </div>
        <div className="age-radio">
          <h3>나이</h3>
          <div className="radio-inputs">
            <input
              type="radio"
              id="ageChoice1"
              name="age"
              value="10"
              onChange={onChange}
            />
            <label htmlFor="ageChoice1">10대</label>
            <input
              type="radio"
              id="ageChoice2"
              name="age"
              value="20"
              onChange={onChange}
            />
            <label htmlFor="ageChoice2">20대</label>
            <input
              type="radio"
              id="ageChoice3"
              name="age"
              value="30"
              onChange={onChange}
            />
            <label htmlFor="ageChoice3">30대</label>
            <input
              type="radio"
              id="ageChoice4"
              name="age"
              value="40"
              onChange={onChange}
            />
            <label htmlFor="ageChoice4">40대</label>
            <input
              type="radio"
              id="ageChoice5"
              name="age"
              value="50"
              onChange={onChange}
            />
            <label htmlFor="ageChoice5">50대 이상</label>
          </div>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop indigo fullWidth>
          포인트 적립 및 확인
        </ButtonWithMarginTop>
      </form>
      <Keyboard
        keyboardRef={(r) => (keyboard = r)}
        layoutName={layoutName}
        name="phoneNumber"
        onChange={onChangeKeyboard}
        onKeyPress={onKeyPress}
      />
    </CustomerAuthFormBlock>
  );
};

export default CustomerAuthForm;
