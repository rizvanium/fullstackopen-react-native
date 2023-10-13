import { View, Image, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    borderRadius: 3,
  },
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainItem: {
    marginBottom: 7,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    paddtingTop: 5,
    paddingBottom: 3,
    paddingRight: 6,
    paddingLeft: 6,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
});

const getDisplayNumber = (number) => {
  if (number >= 1000) {
    return +(number / 1000).toFixed(1) + 'k';
  }
  return number;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          style={styles.logo}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text
            style={[styles.mainItem, { marginBottom: 7 }]}
            fontWeight="bold"
            fontSize="heading"
          >
            {item.fullName}
          </Text>
          <Text
            style={[styles.mainItem, { marginBottom: 9 }]}
            color="textSecondary"
            fontSize="subHeading"
          >
            {item.description}
          </Text>
          <View style={styles.label}>
            <Text color="white">{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text fontWeight="bold">
            {getDisplayNumber(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.detailItem}>
          <Text fontWeight="bold">{getDisplayNumber(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.detailItem}>
          <Text fontWeight="bold">{getDisplayNumber(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.detailItem}>
          <Text fontWeight="bold">{getDisplayNumber(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
