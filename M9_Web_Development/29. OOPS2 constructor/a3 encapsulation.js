class BankAccount {
    #accountNumber;
    #balance;
  
    constructor() {
      this.#accountNumber = this.generateAccountNumber();
      this.#balance = 0;
    }
  
    generateAccountNumber() {
      // Generate a random account number logic (for simplicity, using a fixed number here)
      // Write Code here ========
      return Math.random().toString(36).substring(2, 10).toUpperCase();

    }
  
    deposit(amount) {
        // Write Code here ========
        return this.#balance += amount;
    }
  
    withdraw(amount) {
        // Write Code here ========
        if (amount > this.#balance) {
            return 'Insufficient funds';
        }   
        return this.#balance -= amount;
    }
  }

  const account = new BankAccount();
  console.log(account.deposit(1000));
  console.log(account.withdraw(500));
  console.log(account.withdraw(1000));
