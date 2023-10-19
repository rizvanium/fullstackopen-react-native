import dayjs from 'dayjs';
import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import PrimaryButton from '../PrimaryButton';
import useRemoveReview from '../../hooks/useRemoveReview';
import createAlert from '../../utils/createAlert';

const styles = StyleSheet.create({
  main: {
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

const ReviewItem = ({ item, navigate }) => {
  const [remove] = useRemoveReview(item.id);

  const handleRemoval = () => {
    createAlert(
      'Delete review',
      'Are you sure you want to delete this review?',
      remove
    );
  };

  return (
    <View style={theme.content}>
      <View style={styles.main}>
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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <PrimaryButton
          text="View repository"
          onPress={() => navigate(`/repository/${item.repositoryId}`)}
        />
        <PrimaryButton
          text="Delete review"
          style={{ backgroundColor: theme.colors.error }}
          onPress={() => handleRemoval()}
        />
      </View>
    </View>
  );
};

export default ReviewItem;
