import dayjs from 'dayjs';
import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  rating: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const ReviewItem = ({ item }) => {
  return (
    <View style={[theme.content, styles.container]}>
      <View style={{ marginRight: 16 }}>
        <Text
          style={styles.rating}
          fontSize="heading"
          fontweight="bold"
          color="primary"
        >
          {item.rating}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text fontSize="subheading" fontWeight="bold">
          {item.repository.fullName}
        </Text>
        <Text fontSize="subheading" color="textSecondary">
          {dayjs(item.createdAt).format('DD.MM.YYYY')}
        </Text>
        <Text style={{ marginTop: 6 }} fontSize="subheading">
          {item.text}
        </Text>
      </View>
    </View>
  );
};

export default ReviewItem;
