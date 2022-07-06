class Stack {
    var stackArray = [String]()
    //push
    func push(item:String) {
        self.stackArray.append(item)
    }
    
    //pop
    func pop()->String? {
        if self.stackArray.last != nil {
            let lastString = self.stackArray.last
            self.stackArray.removeLast()
            return lastString!
        } else {
            return nil
        }
    }
    
    //peek
    func peek() -> String? {
        if self.stackArray.last != nil {
            return self.stackArray.last
        } else {
            return nil
        }
    }
}