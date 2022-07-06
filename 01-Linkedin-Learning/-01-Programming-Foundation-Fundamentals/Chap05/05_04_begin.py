def withdraw_money(current_balance, amount):
    if (current_balance >= amount):
        current_balance = current_balance - amount
        print("The balance is", current_balance)

withdraw_money(100, 80)
