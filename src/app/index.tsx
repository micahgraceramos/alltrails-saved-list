import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Button,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TrailRowProps = {
  name: string;
  park: string;
  rating: string;
  marker: string;
  markerColor: string;
  difficulty: string;
  length: string;
  image: ImageSourcePropType;
};

const TrailRow = ({
  name,
  park,
  rating,
  marker,
  markerColor,
  difficulty,
  length,
  image,
}: TrailRowProps) => {
  return (
    <View style={styles.trailRow}>
      <Image source={image} style={styles.trailPhoto} resizeMode="cover" />
      <View style={styles.trailInfo}>
        <Text style={styles.trailName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.trailPark} numberOfLines={1}>
          {park}
        </Text>
        <Text style={styles.trailMeta}>
          ★ {rating} · <Text style={{ color: markerColor }}>{marker}</Text>{" "}
          {difficulty} · {length}
        </Text>
      </View>
      <Ionicons name="checkmark-circle-outline" size={28} color="#1A1D16" />
    </View>
  );
};

const Index = () => {
  const insets = useSafeAreaInsets();

  const handleAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topBar}>
          <View style={styles.circleButton}>
            <Ionicons name="arrow-back" size={22} color="#1A1D16" />
          </View>
          <View style={styles.pill}>
            <Ionicons name="share-outline" size={22} color="#1A1D16" />
            <Ionicons name="ellipsis-horizontal" size={22} color="#1A1D16" />
          </View>
        </View>

        <Text style={styles.title}>Trails I want to Hike</Text>

        <View style={styles.chip}>
          <Ionicons name="people-outline" size={18} color="#1A1D16" />
          <Text style={styles.chipText}>Collaborators</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressText}>
              <Text style={styles.progressBig}>1/31</Text> completed
            </Text>
            <Text style={styles.hide}>Hide</Text>
          </View>

          <View style={styles.track}>
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.sortRow}>
          <View style={styles.sortLeft}>
            <Text style={styles.sortText}>Last updated</Text>
            <Ionicons name="chevron-down" size={16} color="#1A1D16" />
          </View>
          <Text style={styles.sortText}>31 items</Text>
        </View>

        <TrailRow
          name="Parker Ridge"
          park="Banff National Park"
          rating="4.8"
          marker="■"
          markerColor="#E8B931"
          difficulty="Moderate"
          length="6.8 km"
          image={require("../../assets/images/parker-ridge.jpeg")}
        />

        <TrailRow
          name="Kicking Horse Viewpoint"
          park="Banff National Park"
          rating="4.4"
          marker="■"
          markerColor="#E8B931"
          difficulty="Moderate"
          length="2.9 km"
          image={require("../../assets/images/kicking-horse.webp")}
        />

        <TrailRow
          name="Little Arethusa Route"
          park="Peter Lougheed Provincial Park"
          rating="4.7"
          marker="▲"
          markerColor="#E5643B"
          difficulty="Hard"
          length="5.1 km"
          image={require("../../assets/images/little-arethusa.jpeg")}
        />

        <TrailRow
          name="Wilcox Viewpoint via Wilcox Pass"
          park="Jasper National Park"
          rating="4.9"
          marker="■"
          markerColor="#E8B931"
          difficulty="Moderate"
          length="9.7 km"
          image={require("../../assets/images/wilcox-pass.jpeg")}
        />

        <TrailRow
          name="Tent Ridge Horseshoe"
          park="Spray Valley Provincial Park"
          rating="4.8"
          marker="▲"
          markerColor="#E5643B"
          difficulty="Hard"
          length="10.5 km"
          image={require("../../assets/images/tent-ridge.jpg")}
        />

        <View style={styles.alertWrap}>
          <Button title="Alert" onPress={handleAlert} />
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 8 }]}>
        <View style={[styles.bigButton, styles.downloadButton]}>
          <Ionicons
            name="arrow-down-circle-outline"
            size={24}
            color="#1A1D16"
          />
          <Text style={styles.bigButtonText}>Download</Text>
        </View>
        <View style={[styles.bigButton, styles.mapButton]}>
          <Ionicons name="map" size={22} color="#1A1D16" />
          <Text style={styles.bigButtonText}>Map</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { paddingHorizontal: 20, paddingBottom: 24 },
  bottomBar: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  circleButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    flexDirection: "row",
    gap: 36,
    paddingHorizontal: 22,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1D16",
    marginTop: 20,
    marginBottom: 14,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipText: {
    fontSize: 16,
    color: "#1A1D16",
    fontWeight: "500",
  },
  progressCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    padding: 18,
    marginTop: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  progressText: {
    fontSize: 18,
    color: "#1A1D16",
    fontWeight: "500",
  },
  progressBig: {
    fontSize: 34,
    fontWeight: "bold",
  },
  hide: {
    fontSize: 16,
    color: "#555555",
    textDecorationLine: "underline",
  },
  track: {
    height: 16,
    borderRadius: 8,
    backgroundColor: "#E3E3E3",
    marginTop: 18,
    justifyContent: "center",
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#A6EB8A",
  },
  sortRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 20,
  },
  sortLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  sortText: {
    fontSize: 17,
    color: "#1A1D16",
    fontWeight: "500",
  },
  trailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 18,
  },
  trailPhoto: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  trailInfo: {
    flex: 1,
  },
  trailName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1A1D16",
  },
  trailPark: {
    fontSize: 16,
    color: "#6B6B6B",
    marginTop: 2,
  },
  trailMeta: {
    fontSize: 16,
    color: "#6B6B6B",
    marginTop: 2,
  },
  bigButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 54,
    borderRadius: 27,
  },
  downloadButton: { backgroundColor: "#A6EB8A" },
  mapButton: { backgroundColor: "#E8E8E8" },
  bigButtonText: { fontSize: 20, fontWeight: "500", color: "#1A1D16" },
  alertWrap: { marginTop: 8 },
});

export default Index;
