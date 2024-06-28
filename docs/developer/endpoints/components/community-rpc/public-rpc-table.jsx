import React, { useEffect, useState } from 'react';
import { communityMainnetEndpointsList as initialRows } from './endpoints.const';

const customSort = (rows) => {
  const grouped = rows.reduce((acc, row) => {
    if (!acc[row.provider]) {
      acc[row.provider] = [];
    }

    acc[row.provider].push(row);

    return acc;
  }, {});

  const shuffledGroups = Object.keys(grouped).map((provider) => ({
    provider,
    rows: grouped[provider].map((row) => ({ ...row, sortKey: Math.random() })),
  }));

  shuffledGroups.sort((a, b) => a.rows[0].sortKey - b.rows[0].sortKey);

  return shuffledGroups.flatMap((group) => group.rows);
};

const sortByService = (rows, order) => {
  return rows.slice().sort((a, b) => {
    if (a.service < b.service) return order === 'asc' ? -1 : 1;
    if (a.service > b.service) return order === 'asc' ? 1 : -1;

    return 0;
  });
};

const CommunityMainnetEndpointsTable = () => {
  const [rows, setRows] = useState([]);
  const [sortOrder, setSortOrder] = useState('random');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSortByService = () => {
    console.log(sortDirection);

    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';

    setRows(sortByService(rows, newDirection));
    setSortOrder('service');
    setSortDirection(newDirection);
  };

  const randomSort = (rows) => {
    const sortedRows = customSort(rows ? rows : initialRows);
    setRows(sortedRows);
  };

  useEffect(() => {
    randomSort();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              style={{ fontWeight: 700, fontSize: '1em', padding: '.25em' }}
              onClick={() => randomSort(rows)}
            >
              Provider 🎲
            </button>
          </th>
          <th>
            <button
              style={{ fontWeight: 700, fontSize: '1em', padding: '.25em' }}
              onClick={handleSortByService}
            >
              Service 🔌 {sortDirection === 'asc' ? '⬆️' : '⬇️'}
            </button>
          </th>
          <th>URL 🔗</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.provider}</td>
            <td>{row.service}</td>
            <td>
              <a href={row.url} target='_blank' rel='noopener noreferrer'>
                {row.url}
              </a>
            </td>
            <td>{row.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommunityMainnetEndpointsTable;
