import React, { useState, useEffect } from 'react';
import Header from '../Header';
import CollegeCard from '../CollegeCard';
import Filters from '../Filters';
import { CollegesContainer, CollegeGrid } from './styledComponents';
import { getColleges, markAsFavorite } from '../../api/colleges';

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [filters, setFilters] = useState({
    searchQuery: '',
    location: '',
    course: '',
    minFee: '',
    maxFee: '',
    sortBy: '',
  });

  const fetchColleges = async (overrideFilters) => {
    try {
      const data = await getColleges(overrideFilters ?? filters);
      setColleges(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => {
      const next = { ...prev, [name]: value };
      fetchColleges(next);
      return next;
    });
  };

  const handleFavorite = async (id) => {
    try {
      await markAsFavorite(id);
      setColleges(prev =>
        prev.map(c => c.college_id === id ? { ...c, is_favorite: 1 } : c)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Header />
      <CollegesContainer>
        <Filters filters={filters} onFilterChange={handleFilterChange} />
        <CollegeGrid>
          {colleges.length === 0 ? (
            <p>No colleges found.</p>
          ) : (
            colleges.map(college => (
              <CollegeCard
                key={college.college_id}
                college={college}
                onAction={handleFavorite}
                actionLabel={college.is_favorite ? '⭐ Favorited' : 'Add to Favorites'}
                disabled={college.is_favorite}
              />
            ))
          )}
        </CollegeGrid>
      </CollegesContainer>
    </>
  );
};

export default Colleges;
