import { AccountCard } from "./components/AccountCard"
import { AccountsContainer } from "./components/AccountsContainer"
import { AccountsTitle } from "./components/AccountsTitle"
import { BalanceLabel } from "./components/BalanceLabel"
import { DashboardContainer } from "./components/DashboardContainer"
import { Header } from "./components/Header"
import { LeftSection } from "./components/LeftSection"
import { RightSection } from "./components/RightSection"
import { TotalBalance } from "./components/TotalBalance"
import { TransactionAmount } from "./components/TransactionAmount"
import { TransactionDetails } from "./components/TransactionDetails"
import { TransactionIcon } from "./components/TransactionIcon"
import { TransactionItem } from "./components/TransactionItem"
import { TransactionsTitle } from "./components/TransactionsTitle"
import { TransactionText } from "./components/TransactionText"
import { transactions } from "./utils/transactions"

export const Home = () => {
  return (
    <DashboardContainer>
      <Header name="Jose Carlos" />
      <LeftSection>
        <TotalBalance>
          <BalanceLabel>Saldo total</BalanceLabel>
          R$ 369,00
        </TotalBalance>
        <AccountsTitle>Minhas Contas</AccountsTitle>
        <AccountsContainer>
          <AccountCard bankName="Nubank" balance="R$ 123,00" />
          <AccountCard bankName="Nubank" balance="R$ 123,00" />
        </AccountsContainer>
      </LeftSection>

      <RightSection>
        <TransactionsTitle>Transações</TransactionsTitle>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id}>
            <TransactionDetails>
              <TransactionIcon>{transaction.icon}</TransactionIcon>
              <TransactionText>
                {transaction.title}
                <br />
                {transaction.date}
              </TransactionText>
            </TransactionDetails>
            <TransactionAmount isPositive={transaction.amount > 0}>
              {transaction.amount > 0 ? `+ R$ ${transaction.amount}` : `- R$ ${Math.abs(transaction.amount)}`}
            </TransactionAmount>
          </TransactionItem>
        ))}
      </RightSection>
  </DashboardContainer>
  )
}
