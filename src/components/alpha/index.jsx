import {
  Document,
  Page,
  View,
  Text,
  Svg,
  Line,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    width: 794,
    height: 1122,
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    // padding: 20,
  },
  header: {
    width: "100%",
    textAlign: "center",
    paddingBottom: 5,
    backgroundColor: "#0C6BA0",
    opacity: 0.2,
  },
  headerTitle: {
    fontSize: 24,
    opacity: 1,
  },
  headerSubTitle: {
    fontSize: 18,
    paddingTop: 8,
    opacity: 1,
  },
  section: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  sectionBody: {
    marginLeft: 170,
  },
  sectionParagraph: {},
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size={[794, 1122]} style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ismail Hosen Alif</Text>
        <Text style={styles.headerSubTitle}>
          Myemnsigngh, 2200, Bangladesh | +8801625794888 | cvbuilderpro@live.com
        </Text>
      </View>
      {/* <Header/> */}
      <View style={styles.section}>
        <Text>Summary</Text>
        <Svg height="3" width="100%">
          <Line
            x1="0"
            y1="0"
            x2="1000"
            y2="0"
            strokeWidth={2}
            stroke="rgb(0,0,0)"
          />
        </Svg>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eum praesentium ea fuga exercitationem, cupiditate ratione iste
            assumenda eos officia optio magnam fugiat vel ipsam numquam?
            Necessitatibus, quaerat.
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Experience</Text>
        <Svg height="3" width="100%">
          <Line
            x1="0"
            y1="0"
            x2="1000"
            y2="0"
            strokeWidth={2}
            stroke="rgb(0,0,0)"
          />
        </Svg>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eum praesentium ea fuga exercitationem, cupiditate ratione iste
            assumenda eos officia optio magnam fugiat vel ipsam numquam?
            Necessitatibus, quaerat.
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Skills</Text>
        <Svg height="3" width="100%">
          <Line
            x1="0"
            y1="0"
            x2="1000"
            y2="0"
            strokeWidth={2}
            stroke="rgb(0,0,0)"
          />
        </Svg>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionParagraph}>• Html</Text>
          <Text style={styles.sectionParagraph}>• Css</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Education</Text>
        <Svg height="3" width="100%">
          <Line
            x1="0"
            y1="0"
            x2="1000"
            y2="0"
            strokeWidth={2}
            stroke="rgb(0,0,0)"
          />
        </Svg>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eum praesentium ea fuga exercitationem, cupiditate ratione iste
            assumenda eos officia optio magnam fugiat vel ipsam numquam?
            Necessitatibus, quaerat.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
