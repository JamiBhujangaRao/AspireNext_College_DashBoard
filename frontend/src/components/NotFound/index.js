import React from 'react';
import { Link } from 'react-router-dom';
import {
    NotFoundContainer,
    NotFoundContent,
    Heading,
    Description,
    HomeButton,
} from './styledComponents';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <NotFoundContent>
                <Heading>404</Heading>
                <Description>Oops! The page you are looking for does not exist.</Description>
                <Link to="/">
                    <HomeButton>Go to Home</HomeButton>
                </Link>
            </NotFoundContent>
        </NotFoundContainer>
    );
};

export default NotFound;
