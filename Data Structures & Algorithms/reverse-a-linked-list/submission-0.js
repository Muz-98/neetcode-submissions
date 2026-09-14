/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;
        let temp = null;
        let curr = head;
        let nex = curr.next;

        while (curr !== null){
            nex = curr.next;
            curr.next = temp;
            temp = curr;
            curr = nex
            
        }

        return temp;
    }
}
