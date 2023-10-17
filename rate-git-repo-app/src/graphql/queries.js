import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
          name
          fullName
          ownerName
          reviewCount
          createdAt
          ratingAverage
          stargazersCount
          forksCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      name
      fullName
      ownerName
      reviewCount
      createdAt
      ratingAverage
      stargazersCount
      forksCount
      description
      language
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
