import React, { useContext, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components/native';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const StyledText = styled.Text`
  font-size: 40px;
  color: #111111;
  font-weight: bold;
`;

const Login = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const refPassword = useRef(null);

  const _handleSigninBtnPress = () => {
    console.log('로그인');
  };

  return (
    <Container insets={insets}>
      {/*<Image url=""/>*/}
      <StyledText>Walking Mate</StyledText>

      <Input
        label="E-Mail"
        placeholder="이메일을 입력해주세요."
        returnKeyType="next"
        value={id}
        onChangeText={setId}
        onSubmitEditing={() => refPassword.current.focus()}
      />

      <Input
        ref={refPassword}
        label="Password"
        placeholder="비밀번호를 입력해주세요."
        returnKeyType="done"
        value={pw}
        onChangeText={setPw}
        isPassword={true}
        onSubmitEditing={_handleSigninBtnPress}
      />

      <Button title="Login" onPress={_handleSigninBtnPress} />

      <Button
        title="or sign up"
        onPress={() => navigation.navigate('SignUp')}
        containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
        textStyle={{ color: theme.btnTextLink, fontSize: 18 }}
      />
    </Container>
  );
};

export default Login;
