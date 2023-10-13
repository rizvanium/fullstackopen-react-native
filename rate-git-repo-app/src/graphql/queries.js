import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
