var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}



// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {

    getNode = function(node){
        if(node['name'] == name){
            console.log(node['id']);
            // return
        } 
        if(node.left){
            getNode(node.left);
        }
        if(node.right){
            getNode(node.right);
        }
    }
    getNode(tree);
}



// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {

    getNode = function(node){
        if(node['id'] == id){
            console.log(node['name']);
            // return
        } 
        if(node.left){
            getNode(node.left);
        }
        if(node.right){
            getNode(node.right);
        }
    }
    getNode(tree);
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(root) {
    if(!root){
        return;
    }
    console.log('name: ' + root.name);
    console.log('id:' + root.id);
    if(root.left){
        getListWithDLR(root.left);
    }
    if(root.right){
        getListWithDLR(root.right);
    }
}
// getListWithDLR(tree);

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(root){
    if(!root){
        return;
    }
    if(root.left){
        getListWithLDR(root.left);
    }
    console.log('name: ' + root.name);
    console.log('id:' + root.id);
    if(root.right){
        getListWithLDR(root.right);
    }
}
// getListWithLDR(tree);


// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    if(!root){
        return;
    }
    if(root.left){
        getListWithLDR(root.left);
    }
    if(root.right){
        getListWithLDR(root.right);
    }
    console.log('name: ' + root.name);
    console.log('id:' + root.id);
}



