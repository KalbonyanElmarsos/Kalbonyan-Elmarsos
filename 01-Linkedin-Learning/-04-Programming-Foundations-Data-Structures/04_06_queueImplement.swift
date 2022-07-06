class Queue {
    var queueArray = [String]()
    
    //enqueue
    func enqueue(item:String) {
        self.queueArray.append(item)
    }
    
    //dequeue
    func dequeue()->String? {
        if self.queueArray.first != nil {
            let firstString = self.queueArray.first
            self.queueArray.removeFirst()
            return firstString!
        } else {
            return nil
        }
    }
    
    //peek
    func peek() -> String? {
        if self.queueArray.first != nil {
            return self.queueArray.first
        } else {
            return nil
        }
    }
}