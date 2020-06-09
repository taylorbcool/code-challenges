"""
Detect a cycle in a linked list. Note that the head pointer may be 'None' if the list is empty.

A Node is defined as: 
 
    class Node(object):
        def __init__(self, data = None, next_node = None):
            self.data = data
            self.next = next_node
"""


def has_cycle(head):
    pointer = head
    s = set()

    while pointer:
        
        if pointer not in s:
            s.add(pointer)
        
        else:
            return True

        pointer = pointer.next
    
    return False