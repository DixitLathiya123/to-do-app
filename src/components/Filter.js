import React from 'react';
import { Button } from './common/Button'; 
import '../styles/Filter.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      <Button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </Button>
      <Button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </Button>
      <Button
        className={filter === 'pending' ? 'active' : ''}
        onClick={() => setFilter('pending')}
      >
        Pending
      </Button>
    </div>
  );
};

export default Filter;
