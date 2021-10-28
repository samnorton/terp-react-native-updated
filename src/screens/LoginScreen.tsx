import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {images, icons, COLORS} from '../../constants';
import TextInputWithIcon from '../components/TextInputWithIcon';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

interface Props {
  navigation: any;
}

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen: React.FC<Props> = navData => {
  const navigateTo = (destinationScreen: string) =>
    navData.navigation.navigate(destinationScreen);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.keyboardView}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            console.log('login >>>>', values);
            navigateTo('HomeScreen');
          }}
          validationSchema={LoginValidationSchema}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <View style={styles.container}>
              <View style={styles.logo}>
                <Image source={images.logo} style={styles.imgLogo} />
              </View>
              <View style={styles.inputBox}>
                <TextInputWithIcon
                  placeholderText="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  underlineColorAndroid={COLORS.transparent}
                  activeIcon={icons.iconUser}
                  inactiveIcon={icons.iconUserActive}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                <TextInputWithIcon
                  placeholderText="Password"
                  underlineColorAndroid={COLORS.transparent}
                  activeIcon={icons.iconLock}
                  inactiveIcon={icons.iconLockActive}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  passwordType
                />
                <Button
                  title="Sign in"
                  onPress={handleSubmit}
                  customWidth={290}
                />

                <>
                  <ErrorMessage
                    errorMessage={errors.email}
                    visible={touched.email}
                  />
                  <ErrorMessage
                    errorMessage={errors.password}
                    visible={touched.password}
                  />
                </>

                <TouchableOpacity>
                  <Text style={styles.forgotText}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.registerContainer}>
                <Text style={styles.textQuestion}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigateTo('RegisterScreen')}>
                  <Text style={styles.registerLink}>Create an account</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: COLORS.bgGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  imgLogo: {
    width: 105,
    height: 30,
  },
  inputBox: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginHorizontal: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textQuestion: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 15,
    color: COLORS.lightGray3,
  },
  registerContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  forgotText: {
    color: COLORS.secondary,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  registerLink: {
    color: COLORS.secondary,
    fontSize: 18,
  },
});
export default LoginScreen;
