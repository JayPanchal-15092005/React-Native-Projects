import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                    Okutama, Tokyo in the Japan
            </Text>
        </View>
        <Image
        source={{
            uri: "https://images.squarespace-cdn.com/content/v1/58fd82dbbf629ab224f81b68/741d79bd-729e-45b0-b683-9436b8261f2b/2.+Okutama%2C+Tokyo+.jpg?format=2500w"
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text>
            This is the perfect place to get away from the city and back to nature, with camping spots galore found along the Tama River which boasts water sports such as white water rafting and canoeing.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite("https://japanobjects.com/features/japanese-countryside")}>
                <Text style={styles.socialLinks}>
                    Read more
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite("https://japanobjects.com/features/japanese-countryside")}>
                <Text style={styles.articalsLinks}>
                    Click this link for more Articals.
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    card: {
        width: 380,
        // height: 300,
        borderRadius: 10,
        marginVertical: 6,
        marginHorizontal: 4,
    },
    elevatedCard: {
        backgroundColor: "#F5C469",
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "600",
    },
    cardImage: {
        height: 250,
    },
    bodyContainer: {
        padding: 2
    },
    footerContainer: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    socialLinks: {
        color: "#000000",
        // margin: 6,
        fontSize: 16,
        backgroundColor: "#FFF",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 15,  
    },
    articalsLinks: {
        color: "#26ae60",
        fontSize: 16,
        backgroundColor: "#FFF",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 15,
    }
})