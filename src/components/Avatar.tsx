import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c4c8ca; 
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Avatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('');

  return (
    <AvatarContainer>
      {initials}
    </AvatarContainer>
  );
};

export default Avatar;
