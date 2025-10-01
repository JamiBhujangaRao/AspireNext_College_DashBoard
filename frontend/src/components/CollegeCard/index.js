import React from 'react';
import {
    CardContainer,
    CollegeName,
    CollegeInfo,
    ActionButton,
} from './styledComponents.js';

const CollegeCard = ({ college, onAction, actionLabel, disabled = false }) => {
    return (
        <CardContainer>
            <CollegeName>{college.collage_name}</CollegeName>
            <CollegeInfo>Location: {college.location}</CollegeInfo>
            <CollegeInfo>Course: {college.course}</CollegeInfo>
            <CollegeInfo>Fee: ₹{college.fee}</CollegeInfo>
            <ActionButton onClick={() => onAction(college.college_id)} disabled={disabled}>
                {actionLabel}
            </ActionButton>
        </CardContainer>
    );
};

export default CollegeCard;
