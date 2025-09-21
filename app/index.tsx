
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

export default function MainScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const openLink = async (url: string, title: string) => {
    try {
      setIsLoading(true);
      console.log(`Opening ${title}: ${url}`);
      await WebBrowser.openBrowserAsync(url, {
        presentationStyle: WebBrowser.WebBrowserPresentationStyle.FORM_SHEET,
        controlsColor: colors.primary,
      });
    } catch (error) {
      console.error(`Error opening ${title}:`, error);
      Alert.alert('Error', `Could not open ${title}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleParentsBandApp = () => {
    openLink('https://band.us/n/a2a1b3I8RdAbW', 'Parents Band App');
  };

  const handleStudentsBandApp = () => {
    openLink('https://band.us/n/a5a3b7H4TfifW', 'Students Band App');
  };

  const handleDonation = () => {
    openLink('https://www.paypal.com/ncp/payment/LLDKHUHQJ4KF6', 'Donation Page');
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.content}>
          {/* Logo Section */}
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Image
              source={require('../assets/images/e9fbf7d7-ac47-46de-bbc1-59d7ef6326fd.png')}
              style={commonStyles.logo}
              resizeMode="contain"
            />
            <Text style={commonStyles.title}>Woodward High School</Text>
            <Text style={commonStyles.subtitle}>Marching Bulldogs</Text>
            <Text style={[commonStyles.text, { fontStyle: 'italic', color: colors.primary }]}>
              "THE PRIDE"
            </Text>
          </View>

          {/* Quick Links Section */}
          <View style={commonStyles.buttonContainer}>
            <Text style={[commonStyles.text, { fontSize: 20, fontWeight: '700', marginBottom: 20, color: colors.primary }]}>
              Quick Access
            </Text>

            {/* Parents Band App */}
            <TouchableOpacity
              style={commonStyles.linkButton}
              onPress={handleParentsBandApp}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="people" size={24} color={colors.white} style={{ marginRight: 12 }} />
                <Text style={commonStyles.linkButtonText}>Band App for Parents</Text>
              </View>
            </TouchableOpacity>

            {/* Students Band App */}
            <TouchableOpacity
              style={commonStyles.linkButton}
              onPress={handleStudentsBandApp}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="school" size={24} color={colors.white} style={{ marginRight: 12 }} />
                <Text style={commonStyles.linkButtonText}>Band App for Students</Text>
              </View>
            </TouchableOpacity>

            {/* Donation Button */}
            <TouchableOpacity
              style={commonStyles.donationButton}
              onPress={handleDonation}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="heart" size={24} color={colors.black} style={{ marginRight: 12 }} />
                <Text style={commonStyles.donationButtonText}>Support Our Band</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Information Cards */}
          <View style={{ width: '100%', marginTop: 40 }}>
            <View style={commonStyles.card}>
              <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '700', color: colors.primary, marginBottom: 10 }]}>
                About Our Band
              </Text>
              <Text style={[commonStyles.text, { textAlign: 'left' }]}>
                The Woodward High School Marching Bulldogs represent excellence in musical performance and community spirit. 
                Join us as we continue our tradition of outstanding performances and school pride.
              </Text>
            </View>

            <View style={commonStyles.card}>
              <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '700', color: colors.primary, marginBottom: 10 }]}>
                Stay Connected
              </Text>
              <Text style={[commonStyles.text, { textAlign: 'left' }]}>
                Use the Band apps above to stay updated on rehearsals, performances, and important announcements. 
                Parents and students have separate channels for relevant information.
              </Text>
            </View>

            <View style={commonStyles.card}>
              <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '700', color: colors.primary, marginBottom: 10 }]}>
                Support Our Program
              </Text>
              <Text style={[commonStyles.text, { textAlign: 'left' }]}>
                Your donations help us purchase new instruments, uniforms, and equipment. 
                Every contribution makes a difference in our students&apos; musical education.
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View style={{ marginTop: 40, marginBottom: 20, alignItems: 'center' }}>
            <Text style={[commonStyles.text, { fontSize: 14, color: colors.grey }]}>
              Woodward High School Marching Band
            </Text>
            <Text style={[commonStyles.text, { fontSize: 14, color: colors.grey }]}>
              Building Excellence Through Music
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
