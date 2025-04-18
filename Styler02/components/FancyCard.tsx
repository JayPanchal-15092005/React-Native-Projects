import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    // <ScrollView>
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: "https://images.pexels.com/photos/14247658/pexels-photo-14247658.jpeg?auto=compress&cs=tinysrgb&w=600"
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Jaipur, India</Text>
            <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.
            </Text>
            <Text style={styles.cardFooter}>This Hawa Mahal is in Jaipur.</Text>
        </View>
      </View>
    </View>
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    card: {
        height: 350,
        width: 360,
        borderRadius: 6,
        marginHorizontal: 2,
        marginVertical: 12,
    },
    cardElevated: {
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset: {
          width: 1,
          height: 1,
        }
    },
    cardImage: {
        // height: 350,
        height: 180,
        // width: 360,
        marginBottom: 8,
        borderRadius: 10
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 15,
    },
    cardTitle: {
        color: "#2B2B52",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 2,
    },
    cardLabel: {
         color: "#2ecc72",
         fontSize: 16,
         marginBottom: 4
    },
    cardDescription: {
         color: "#487EB0",
         fontSize: 16,
         marginBottom: 12,
         marginTop: 6,
         flexShrink: 1,
    },
    cardFooter: {
        color: "#2C3335",
        fontSize: 14,
    },
})