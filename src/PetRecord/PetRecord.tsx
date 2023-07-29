// Создайте компонент PetRecord. В качестве параметров компонент должен принимать number id,
// строку petName, строку additionalInfo, boolean dysplayInfo. Компонент должен отображать на
// странице полученную информацию в виде блока:
// ##  ИМЯ
// Дополнительная информация
// Причем, дополнительная информация должна отображаться, только если dysplayInfo ==true

// 2)
// Создайте компонент, в котором создайте 3 объекта Petи для каждого из них вызовете компонент
//PetRecord передавая необходимые параметры.

import React from 'react';

interface IPet {
  id: number;
  petName: string;
  additionalInfo: string;
  dysplayInfo: boolean;
}

interface Props {
  pet: IPet;
}

export default function PetRecord(props: Props) {
  const { pet } = props;
  const { id, petName, additionalInfo, dysplayInfo } = pet;

  const text1 = dysplayInfo ? `## ${petName}` : '';
  const text2 = dysplayInfo ? ` ${additionalInfo}` : '';

  return (
    <>
      <p> {text1} </p>
      <p> {text2} </p>
    </>
  );
}
