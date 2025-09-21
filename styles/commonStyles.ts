
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  primary: '#003DA5',      // Royal Blue
  secondary: '#1E3A8A',    // Darker Royal Blue
  accent: '#60A5FA',       // Light Blue accent
  background: '#FFFFFF',   // White background
  backgroundAlt: '#F8FAFC', // Light grey background
  text: '#000000',         // Black text
  textLight: '#374151',    // Dark grey text
  white: '#FFFFFF',        // Pure white
  black: '#000000',        // Pure black
  grey: '#6B7280',         // Medium grey
  card: '#FFFFFF',         // White card background
  border: '#E5E7EB',       // Light border
};

export const buttonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  donationButton: {
    backgroundColor: '#FFD700',
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.textLight,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  linkButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 61, 165, 0.3)',
    elevation: 4,
  },
  linkButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  donationButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(255, 215, 0, 0.3)',
    elevation: 4,
  },
  donationButtonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
