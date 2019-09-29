import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { query } from './model';
import List from './List';

export default function Home() {
  const { loading, error, data = {} } = useQuery(query());

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { repository: { issues = {} } } = data;
  return (
    <div>
      <List {...issues} />
    </div>
  );
}
