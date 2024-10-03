//node constructor
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    //list constructor
    constructor() {
        this.head = null;
    }
    append(data) {
        //create node
        const newNode = new Node(data);
        //if list is empty, assign this node to head
        if (this.head == null) {
            this.head = newNode;
        } else {
            //traveses the list until it reaches last node and appends new node
            //start at head
            let current = this.head;
            //search until there is a node with a null next
            while (current.next !== null) {
                //move to next node
                current = current.next;
            }
            //whn the while is finished ie when there is a next = null, add this new node as the next
            current.next = newNode;
        }
    }
};

