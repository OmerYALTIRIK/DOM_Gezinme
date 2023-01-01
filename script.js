// Traversing the DOM (DOM'da Gezinmek)
let val;
let list = document.querySelector('.list-group'); // ul'yi seçtik
val = list; // list değişkenine ul'yi atadık
val = list.childNodes; // NodeList (text node'lar da dahil) döner (herbir element'in altında bir text node vardır)
val = list.childNodes[0]; // ilk text node'u döner
val = list.childNodes[0].nodeName; // #text döner (text node'ların ismi #text'dir)
val = list.childNodes[0].nodeType; // 3 döner (text node'ların tipi 3'tür) (1: Element, 2: Attribute, 3: Text, 8: Comment, 9: Document, 10: Doctype)
val = list.children; // HTMLCollection (text node'lar hariç) sadece elementleri döner
val = list.children[0]; // ilk li'yi döner
val = list.children[2].textContent = 'new item'; // ikinci indexteki li'nin içeriğini değiştirdik ama altındaki a etiketi silindi bu yöntemle
val = list.children[3].children; // üçüncü indexteki li'nin altındaki a'ya ulaştık
val = list.firstChild; // a'nın altındaki ilk text node'u döner (a'nın altındaki ilk node'u döner) çünkü gideceği başka bir node olmadığı için  (ul'nin altındaki ilk node'u döner)
val = list.firstElementChild; // ul'nin altındaki ilk li'yi döner (ul'nin altındaki ilk element'i döner)
val = list.lastChild; // ul'nin altındaki son text node'u döner (ul'nin altındaki son node'u döner) 
val = list.lastElementChild; // ul'nin altındaki son li'yi döner (ul'nin altındaki son element'i döner)
val = list.childElementCount; // ul'nin altındaki element sayısını döner (ul'nin altındaki element sayısını döner)
val = list.parentNode; // ul'nin parent'ı yani ul'ün bulunduğu div'i döner (yani üst node'u döner)
val = list.parentElement; // ul'nin parent'ı yani ul'ün bulunduğu div'i döner (yani üst elementi döner) burada parentElement ile parentNode aynı şeyi döndürür ama parentNode tüm node'ları döndürürken parentElement sadece elementleri döndürür
val = list.parentElement.parentElement; // ul'nin parent'ının parent'ı yani ul'ün bulunduğu div'in bulunduğu div'i döner (yani üst element'in üst elementini döner)
val = list.children[0].nextSibling; // ilk li'nin altındaki ilk text node'u döner (ilk li'nin altındaki ilk node'u döner)
val = list.children[0].nextElementSibling; // ilk li'nin altındaki ikinci li'yi döner (ilk li'nin altındaki ikinci element'i döner)
val = list.children[1].previousSibling; // ikinci li'nin altındaki ilk text node'u döner (ikinci li'nin altındaki ilk node'u döner)
val = list.children[1].previousElementSibling; // ikinci li'nin altındaki ilk li'yi döner (ikinci li'nin altındaki ilk element'i döner)
// console.log(val);
/* for (let i=0; i<list.childNodes.length; i++) { // list.children.length ile ul'nin altındaki element sayısını aldık
    console.log(list.childNodes[i]); // ul'nin altındaki tüm node'ları yazdırdık
} */
for (let i=0; i<list.childNodes.length; i++) {
    if (list.childNodes[i].nodeType === 1) { // nodeType 1 olanları yani elementleri yazdırdık text node'ları yazdırmadık
        console.log(list.childNodes[i]);
    }
}