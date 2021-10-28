import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {COLORS} from '../../constants';
import TextInputWithIcon from '../components/TextInputWithIcon';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

interface Props {
  placeholderText: string;
}
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const RegisterValidationSchema = Yup.object().shape({
  firstname: Yup.string().required().label('First Name'),
  lastname: Yup.string().required().label('Last Name'),
  mobile: Yup.string()
    .matches(phoneRegex, 'Invalid mobile')
    .required('Mobile Number is a required field')
    .label('Phone Number'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen: React.FC<Props> = () => {
  // const [countryDetails, setcountryDetails] = useState({
  //   countryCallingCode: '',
  //   countryCode: '',
  // });

  // const getGeoInfo = () => {
  //   axios
  //     .get('https://ipapi.co/json/')
  //     .then(response => {
  //       let data = response.data;
  //       setcountryDetails({
  //         countryCode: data.country_code,
  //         countryCallingCode: data.country_calling_code,
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getGeoInfo();
  // });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.keyboardView}>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            password: '',
          }}
          onSubmit={values => {
            console.log('register >>>>>', values);
          }}
          validationSchema={RegisterValidationSchema}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <View style={styles.container}>
              <TextInputWithIcon
                placeholderText="First name"
                autoCapitalize="none"
                underlineColorAndroid={COLORS.transparent}
                onChangeText={handleChange('firstname')}
                onBlur={() => setFieldTouched('firstname')}
              />
              <TextInputWithIcon
                placeholderText="Last name"
                autoCapitalize="none"
                underlineColorAndroid={COLORS.transparent}
                onChangeText={handleChange('lastname')}
                onBlur={() => setFieldTouched('lastname')}
              />
              <TextInputWithIcon
                placeholderText="Phone Number"
                keyboardType="number-pad"
                underlineColorAndroid={COLORS.transparent}
                onChangeText={handleChange('mobile')}
                onBlur={() => setFieldTouched('mobile')}
              />
              <TextInputWithIcon
                placeholderText="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid={COLORS.transparent}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />

              <TextInputWithIcon
                placeholderText="Password"
                underlineColorAndroid={COLORS.transparent}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                passwordType
              />
              <Button
                title="Create an account"
                onPress={handleSubmit}
                customWidth={330}
              />
              <>
                <ErrorMessage
                  errorMessage={errors.firstname}
                  visible={touched.firstname}
                />
                <ErrorMessage
                  errorMessage={errors.lastname}
                  visible={touched.lastname}
                />
                <ErrorMessage
                  errorMessage={errors.mobile}
                  visible={touched.mobile}
                />
                <ErrorMessage
                  errorMessage={errors.email}
                  visible={touched.email}
                />
                <ErrorMessage
                  errorMessage={errors.password}
                  visible={touched.password}
                />
              </>
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
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
});
export default RegisterScreen;
