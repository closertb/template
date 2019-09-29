import gql from 'graphql-tag';
import { OWNER, PROJECT } from '../../configs/constants';

export const query = ({ pn = 1, ps = 10 }) => {
  const total = pn * ps;
  return gql`{
    repository(owner: ${OWNER}, name: ${PROJECT}) {
      issues(last: ${total}, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }`;
};
