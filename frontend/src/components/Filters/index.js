import React from 'react';
import { FiltersContainer, FilterLabel, FilterSelect, FilterInput } from './styledComponents';

const Filters = ({ filters, onFilterChange }) => {
    return (
        <FiltersContainer>
            <FilterLabel>
                Search:
                <FilterInput
                    type="text"
                    name="searchQuery"
                    value={filters.searchQuery}
                    onChange={onFilterChange}
                    placeholder="Search by College Name"
                />
            </FilterLabel>

            <FilterLabel>
                Location:
                <FilterSelect
                    name="location"
                    value={filters.location}
                    onChange={onFilterChange}
                >
                    <option value="">All</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                </FilterSelect>
            </FilterLabel>

            <FilterLabel>
                Course:
                <FilterSelect
                    name="course"
                    value={filters.course}
                    onChange={onFilterChange}
                >
                    <option value="">All</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="MBA">MBA</option>
                </FilterSelect>
            </FilterLabel>

            <FilterLabel>
                Fee Min:
                <FilterInput
                    type="number"
                    name="minFee"
                    value={filters.minFee}
                    onChange={onFilterChange}
                    placeholder="Minimum Fee"
                />
            </FilterLabel>

            <FilterLabel>
                Fee Max:
                <FilterInput
                    type="number"
                    name="maxFee"
                    value={filters.maxFee}
                    onChange={onFilterChange}
                    placeholder="Maximum Fee"
                />
            </FilterLabel>

            <FilterLabel>
                Sort by Fee:
                <FilterSelect
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={onFilterChange}
                >
                    <option value="">None</option>
                    <option value="fee_asc">Low → High</option>
                    <option value="fee_desc">High → Low</option>
                </FilterSelect>
            </FilterLabel>
        </FiltersContainer>
    );
};

export default Filters;
