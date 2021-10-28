import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {icons, COLORS} from '../../constants';

interface Props {
  placeholderText: string;
  activeIcon: any;
  inactiveIcon: any;
  passwordType?: boolean;
  restOfProps: any;
}

const TextInputWithIcon: React.FC<Props> = ({
  placeholderText,
  activeIcon,
  inactiveIcon,
  passwordType,
  ...restOfProps
}) => {
  const [isFocused, setFocused] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setFocused(false);
  };

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <View
      style={[
        styles.inputWithIcon,
        {
          borderBottomColor: isFocused ? COLORS.bgGray : COLORS.secondary,
        },
      ]}>
      {activeIcon || inactiveIcon ? (
        <Image source={isFocused ? activeIcon : inactiveIcon} />
      ) : null}
      <TextInput
        placeholder={placeholderText}
        {...restOfProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[
          styles.input,
          activeIcon || inactiveIcon ? {paddingLeft: 15} : {paddingLeft: 0},
        ]}
        secureTextEntry={passwordType ? !showPassword : undefined}
      />
      {passwordType && (
        <TouchableOpacity onPress={() => toggleShowPasswordIcon()}>
          <Image
            source={showPassword ? icons.iconEye : icons.iconEyeInactive}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  inputWithIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
    paddingBottom: 10,
    borderBottomColor: COLORS.bgGray,
    borderBottomWidth: 1,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    borderBottomWidth: 0,
  },
});

export default TextInputWithIcon;
