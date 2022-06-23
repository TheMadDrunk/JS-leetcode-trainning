//by TheMadDrunk
//23/06/2022

//link to problem : https://leetcode.com/problems/merge-two-sorted-lists

//solution

var mergeTwoLists = function(list1,list2) {
    let i=0,j=0;
    let out = new ListNode(0,null);
    let curr = out;
    while(list1 !== null || list2 !== null ){
        let tmp =  null;
        if(list1 !== null && list2 === null){
            tmp = new ListNode(list1.val,null);
            list1 = list1.next;
        }
        else if(list1 === null && list2 !== null){
            tmp = new ListNode(list2.val,null);
            list2 = list2.next;
        }
        else if(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
                tmp = new ListNode(list1.val,null);
                list1 = list1.next;
            }
            else{
                tmp = new ListNode(list2.val,null);
                list2 = list2.next;
            }
        }
        
        curr.next  =  tmp;
        curr = curr.next;
        
    }
    
    return out.next;
};