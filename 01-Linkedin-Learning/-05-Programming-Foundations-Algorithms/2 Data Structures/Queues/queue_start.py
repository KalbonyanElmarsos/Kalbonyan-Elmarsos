# try out the Python queue functions
from collections import deque

# TODO: create a new empty deque object that will function as a queue
queue = deque()


# TODO: add some items to the queue
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)
# TODO: print the queue contents
print(queue)


# TODO: pop an item off the front of the queue
x = queue.popleft()
print(x)
print(queue)