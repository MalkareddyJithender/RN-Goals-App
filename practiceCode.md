# core components (View,Text) and styling overview
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}> Another Piece of Text! </Text>
      </View>
      {/* inline styling approach */}
      {/* style={{
        margin:16,
        borderWidth:2,
        borderColor:'red',
        padding:16
      }} */}
      <Text style={styles.dummyText}> Hello Malkareddy Jithender! </Text>
      <Button title='Click Me!' />
    </View>
  );
}

// style sheet object approach
// - seperates jsx code and styling & reusable styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
    margin:16,
    padding:16,
    borderRadius:5,
    borderWidth:2,
    borderColor:'green'
  }
});

<!-- scroll view implementation-->
<ScrollView>
  {courseGoals.map(goal => 
  ( <View key={goal} style={styles.goalItem}>
  <Text style={styles.goalText}>{goal}</Text>
  </View>)
  )}
</ScrollView>