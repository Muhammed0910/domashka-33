//1
//создайте новый элемент и добавьте его в блок ниже с помощью append
<div id='block'></div>
//?
2
//создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
<div id='block'></div>
//?
3
//удалите тег 'p' из скрипта ниже с помощью DOM метода
<div id='block'>
    <p>Some text</p>
</div>
<script>
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    document.body.append(div);
    setTimeout(() => div.remove(), 1000);
</script>
4
//замените тег 'p' на <i>Hello World</i>
<div id='block'>
    <p>Some text</p>
</div>
//?
5
//выведите в консоли коллекцию всех элементов с классом .block
//?
6
//выведите в консоли первый элемент из ранее созданной коллекции
//?
7
//выведите в консоли количество элементов в ранее созданной коллекции
//?
8
//в чем разница между nodeList и HtmlCollection
//NodeList может хранить любые типы узлов, например текстовые узлы и комментарии, а HTMLCollection — только узлы HTML элементов