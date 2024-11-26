import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
const pfp = require("../../../assets/images/sheen.png");
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.profileBox}>
        <Image source={pfp} style={styles.profilepic} />
        <View style={styles.ngalanUgPronouns}>
          <Text style={styles.ngalan}>Sheen Ocon</Text>
          <Text style={styles.pronouns}> she/her</Text>
        </View>
        <Text style={styles.mylabel}>React Native Developer</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Apps{"\n"}Deployed</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Clients{"\n"}Satisfied</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Experience{"\n"}Years</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logOutButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.logOutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileBox: {
    marginTop: 55,
    flexDirection: "column",
    alignItems: "center",
  },
  profilepic: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#9e6060",
    marginBottom: 7,
  },
  ngalanUgPronouns: {
    flexDirection: "row",
    marginLeft: 50,
    alignItems: "center",
  },
  ngalan: {
    fontSize: 23,
    fontFamily: "Poppins-SemiBold",
  },
  pronouns: {
    fontWeight: "200",
    marginTop: 3,
    fontFamily: "Poppins-Regular",
  },
  mylabel: {
    fontSize: 16,
    fontWeight: "light",
    color: "black",
    fontFamily: "Inter-Regular",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 40,
  },
  stats: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  statLabel: {
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  logOutButton: {
    backgroundColor: "#9e6060",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "93%",
    marginTop: 20,
  },
  logOutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },
});
