import { render, screen, within } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryList/RepositoryListContainer';
import { getDisplayNumber } from '../../utils/textFormatting';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      const {
        fullName: firstFullName,
        description: firstDescription,
        language: firstLanguage,
        forksCount: firstForks,
        stargazersCount: firstStargazers,
        ratingAverage: firstRatingAverage,
        reviewCount: firstReviewCount,
      } = repositories.edges[0].node;

      const {
        fullName: secondFullName,
        description: secondDescription,
        language: secondLanguage,
        forksCount: secondForks,
        stargazersCount: secondStargazers,
        ratingAverage: secondRatingAverage,
        reviewCount: secondReviewCount,
      } = repositories.edges[1].node;

      // firstRepositoryItem
      expect(
        within(firstRepositoryItem).getByText(firstFullName)
      ).toBeDefined();
      expect(
        within(firstRepositoryItem).getByText(firstDescription)
      ).toBeDefined();
      expect(
        within(firstRepositoryItem).getByText(firstLanguage)
      ).toBeDefined();
      expect(
        within(within(firstRepositoryItem).getByTestId('forksCount')).getByText(
          getDisplayNumber(firstForks)
        )
      ).toBeDefined();
      expect(
        within(
          within(firstRepositoryItem).getByTestId('stargazersCount')
        ).getByText(getDisplayNumber(firstStargazers))
      ).toBeDefined();
      expect(
        within(
          within(firstRepositoryItem).getByTestId('ratingAverage')
        ).getByText(getDisplayNumber(firstRatingAverage))
      ).toBeDefined();
      expect(
        within(
          within(firstRepositoryItem).getByTestId('reviewCount')
        ).getByText(getDisplayNumber(firstReviewCount))
      ).toBeDefined();

      // secondRepositoryItem
      expect(
        within(secondRepositoryItem).getByText(secondFullName)
      ).toBeDefined();
      expect(
        within(secondRepositoryItem).getByText(secondDescription)
      ).toBeDefined();
      expect(
        within(secondRepositoryItem).getByText(secondLanguage)
      ).toBeDefined();

      expect(
        within(
          within(secondRepositoryItem).getByTestId('forksCount')
        ).getByText(getDisplayNumber(secondForks))
      ).toBeDefined();

      expect(
        within(
          within(secondRepositoryItem).getByTestId('stargazersCount')
        ).getByText(getDisplayNumber(secondStargazers))
      ).toBeDefined();
      expect(
        within(
          within(secondRepositoryItem).getByTestId('ratingAverage')
        ).getByText(getDisplayNumber(secondRatingAverage))
      ).toBeDefined();
      expect(
        within(
          within(secondRepositoryItem).getByTestId('reviewCount')
        ).getByText(getDisplayNumber(secondReviewCount))
      ).toBeDefined();
    });
  });
});
