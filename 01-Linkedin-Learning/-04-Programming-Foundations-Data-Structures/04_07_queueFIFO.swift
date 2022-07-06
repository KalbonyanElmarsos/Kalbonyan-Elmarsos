class Queue {
    var queueArray = [String]()
    
    func enqueue(item: String) {
        self.queueArray.append(item)
    }
    
    func dequeue() -> String? {
        if self.queueArray.first != nil {
            let firstString = self.queueArray.first
            self.queueArray.removeFirst()
            return firstString!
        } else {
            return nil
        }
    }
    
    func peek() -> String? {
        if self.queueArray.first != nil {
            return self.queueArray.first
        } else {
            return nil
        }
    }
}

var myQueue = Queue()
myQueue.enqueue(item: "Peggy")
myQueue.enqueue(item: "Larry")
myQueue.enqueue(item: "Serena")

print(myQueue.peek()!)
print(myQueue.peek()!)
var firstToLeave = myQueue.dequeue()
print(myQueue.peek()!)