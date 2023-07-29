import React from 'react';
import PetRecord from '../PetRecord/PetRecord';

const pet1 = {
  id: 123,
  petName: 'name1',
  additionalInfo: 'additionalInfo1',
  dysplayInfo: false,
};

const pet2 = {
  id: 456,
  petName: 'name2',
  additionalInfo: 'additionalInfo2',
  dysplayInfo: true,
};

const pet3 = {
  id: 789,
  petName: 'name3',
  additionalInfo: 'additionalInfo3',
  dysplayInfo: true,
};

export default function Pet() {
  return (
    <>
      <PetRecord pet={pet1} />
      <PetRecord pet={pet2} />
      <PetRecord pet={pet3} />
    </>
  );
}
