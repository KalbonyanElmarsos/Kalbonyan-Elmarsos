class Stack {
    var stackArray = [String]()
    
    func push(item:String) {
        self.stackArray.append(item)
    }
    
    func pop() -> String?{
        if self.stackArray.last != nil {
            let lastString = self.stackArray.last
            self.stackArray.removeLast()
            return lastString!
        } else {
            return nil
        }
    }
    
    func peek() -> String? {
        if self.stackArray.last != nil {
            return self.stackArray.last
        } else {
            return nil
        }
    }
}

var deck:Stack = Stack()

deck.push(item: "Heart : Queen")
deck.push(item: "Spade : Jack")
deck.push(item: "Heart : 9")
deck.push(item: "Diamond : 4")
print(deck.peek()!)
print(deck.peek()!)

var firstItemPopped = deck.pop()
var secondItemPopped = deck.pop()
print(firstItemPopped!)
print(secondItemPopped!)