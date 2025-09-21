
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../styles/commonStyles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  variant?: 'primary' | 'secondary' | 'donation';
  disabled?: boolean;
}

export default function Button({ 
  text, 
  onPress, 
  style, 
  textStyle, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton;
      case 'donation':
        return styles.donationButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButtonText;
      case 'donation':
        return styles.donationButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        getButtonStyle(), 
        style,
        disabled && styles.disabledButton
      ]} 
      onPress={onPress} 
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[getTextStyle(), textStyle, disabled && styles.disabledText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 4,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  donationButton: {
    backgroundColor: '#FFD700',
  },
  disabledButton: {
    backgroundColor: colors.grey,
    opacity: 0.6,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  donationButtonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  disabledText: {
    color: colors.textLight,
  },
});
