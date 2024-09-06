import React from 'react';
import { CardContainer } from './CardContainer';
import { BankLogo } from './BankLogo';
import { BankName } from './BankName';
import { Balance } from './Balance';
import { BalanceLabel } from './BalanceLabel';

interface AccountCardProps {
  bankName: string;
  balance: string;
}

export const AccountCard = ({ bankName, balance }:AccountCardProps) => {
  return (
    <CardContainer>
      <BankLogo>🏦</BankLogo>
      <BankName>{bankName}</BankName>
      <Balance>{balance}</Balance>
      <BalanceLabel>Saldo atual</BalanceLabel>
    </CardContainer>
  );
};