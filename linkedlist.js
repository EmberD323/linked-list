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
            let currentNode = this.head;
            //search until there is a node with a null next
            while (currentNode.next !== null) {
                //move to next node
                currentNode = currentNode.next;
            }
            //whn the while is finished ie when there is a next = null, add this new node as the next
            currentNode.next = newNode;
        }
    }
    preend(data){
        //create node
        const newNode = new Node(data);
        //if theres a head already, newNode.next should be that node (works for null too)
        newNode.next = this.head;
        //change head reference to this node
        this.head = newNode;
    }
    size(){
        let currentNode = this.head;
        count = 0;
        if (this.head == null) {return count}
        count =1;
        while (currentNode.next !== null) {
            count++;
        }
        return count
    }
    headFind(){
        return this.head
    }
    tailFind(){
        let currentNode = this.head;
            //search until there is a node with a null next
            while (currentNode.next !== null) {
                //move to next node
                currentNode = currentNode.next;
            }
        return currentNode
    }
    at(index){
        //index 0
        if (index == 0){return this.head}
        let currentNode = this.head
        //loop across list until index and return node
        for(let i=0;i<index;i++){
            currentNode = currentNode.next;
        }
        return currentNode
    }
    pop(){
        let currentNode = this.head;
            //search while nodes have a next
            while (currentNode.next !== null) {
                //if two after currentNode is null then change next node to empty next
                if(currentNode.next.next == null){
                    currentNode.next = null;
                    return
                }
                //otherwise move to next node
                currentNode = currentNode.next;
            }
    }
    contains(valueToFind){
        let currentNode = this.head;
        //search while nodes have values
        while (currentNode.value !== null) {
            if(currentNode.value == valueToFind){
                return true
            }
            //otherwise move to next node
            currentNode = currentNode.next;
        }
        return false
    }
    find(valueToFind){
        let currentNode = this.head;
        let index = 0;
        //search while nodes have values
        while (currentNode.value !== null) {
            if(currentNode.value == valueToFind){
                return index
            }
            //otherwise move to next node
            currentNode = currentNode.next;
            index++;
        }
        return null
    }
    toString(){
        //( value ) -> ( value ) -> ( value ) -> null
        let string = "( " + this.head+ " )"
        let currentNode = this.head.next;
        //search while nodes have values
        while (currentNode.value !== null) {
            string =+ " -> ( " + currentNode.value + " )"
            //otherwise move to next node
            currentNode = currentNode.next;
        }
        string =+" -> null";
    }
    insertAt(value,index){
        //if index is 0 then preend
        if(index == 0){
            LinkedList.preend(value);
            return
        }
        //if index is greater than number of items in list then add to end
        let listLength = size();
        if(index> listLength-1){
            LinkedList.append(value);
            return
        }
        //otherwise slot in
        //create new node
        const newNode = new Node(value);
        //find node current node at that index = nodeAfter
        let nodeAfter = LinkedList.at(index);
        //and node before it = nodeBefore
        let nodeBefore = LinkedList.at(index - 1);
        newNode.next = nodeAfter;
        nodeBefore.next = newNode;
    }
    removeAt(index){
        let listLength = size();
        if(index > listLength-1){
            return
        }
        //if index is last in array
        if(index == listLength-1){
            LinkedList.pop();
            return
        }
        let nodeAfter = LinkedList.at(index+1)
        //if index = head
        if(index == 0){
            this.head = nodeAfter;
            return
        }
        let nodeBefore = LinkedList.at(index-1);
        nodeBefore.next = nodeAfter;
    }
};

