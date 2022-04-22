//Core 规定了 通用的文档与对象的转换方式


/*
在DOM1中，Core标准一共有18个对象
	• 一个异常对象
	• 14个表示文档的对象
	• 3个辅助对象

在DOM2中，没有新变化，只是给对象增加了一下属性


DOM3 宽展为28个对象
	扩展了10个辅助对象
	但是，除了DOMError辅助对象外，其他9个辅助对象在DOM4的草案中已经删除掉了。
*/


//在DOM中文档的结构是以节点来表示的，所有的元素（对象）都叫作节点。
/*
	节点很多，总的节点叫Node
	节点之间的（类型）区分靠 nodeType 属性
❑	Node.ELEMENT_NODE = 1;
❑ Node.ATTRIBUTE_NODE = 2;
❑ Node.TEXT_NODE = 3;
❑ Node.CDATA_SECTION_NODE = 4;
❑ Node.ENTITY_REFERENCE_NODE = 5;
❑ Node.ENTITY_NODE = 6;
❑ Node.PROCESSING_INSTRUCTION_NODE = 7;
❑ Node.COMMENT_NODE = 8;
❑ Node.DOCUMENT_NODE = 9;
❑ Node.DOCUMENT_TYPE_NODE = 10;
❑ Node.DOCUMENT_FRAGMENT_NODE = 11;
❑ Node.NOTATION_NODE = 12;

*/


