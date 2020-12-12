# Todo

## List of features

1. User can:
  + see his account
  + create bills (one for each currency, one deposit)
  + transform existing bill to deposit
  + see his bills, currenccy, total, limit
  + see transaction history per every bill
  + change username, password, info
  + emit transaction to every **NOT BLOCKED** bill, except bank bills, by bill number, including transaction between his own bills
2. VIP-user has: 
  + no transaction commission
  + unavaiable bills to freeze
3. Bank can: 
  + change exchange rate, transaction commission 
  + see full transaction history
  + see list of users and their bills
  + freeze bills

## Screens and their actions 

### User: 
  + HomePage - transaction history per each bill (limited), exchange rate
    > number, balance, currency, limit from bill  
    > receiver, transmitter, total, comment from transaction where success  
    > exchange rate  
  + NewTransaction - create transaction
  + TransactionHistory - all transitions (flexible access to data)
  + Settings - change personal info, account permissions
### Vip-User:
Has the same Interface as Regular-User

## Implementations

  + To make transaction, reciever and transmitter bill must be not blocked, not deposit, transmitter (balance + limit) should be greater than transaction value. Even if transaction was not successfull, it whrites down in `transaction_history`
  + if transaction happens between different currency, there should be exchange according to rate
  + To transform bill into deposit, it must be not blocked and deposit already and its balance should be greater than `DEPOSIT_MIN` 