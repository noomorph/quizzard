<div class="screen" id="outro" data-bind="if: ended">
  <table class="wide">
    <tr><th class="w8">ФИО</th><td class="under-border" data-bind="text: user.name"></td></tr>
    <tr><th class="w8">Возраст</th><td class="under-border" data-bind="text: user.age"></td></tr>
    <tr><th class="w8">Дата</th><td class="under-border" data-bind="text: creationDate"></td></tr>
  </table>
  <table class="wide">
    <tr>
      <td class="topped">
        <table class="bordered" style="float: left">
          <thead> <tr>
            <th>№ п/п</th>
            <th>Ответ</th>
          </tr> </thead>
          <tbody data-bind="foreach: questions.half(0)">
          <tr data-bind="if: $data">
            <td data-bind="text: id"></td>
            <td data-bind="html: answerText"></td>
          </tr>
          </tbody>
        </table>
        <table class="bordered" style="float: left">
          <thead> <tr>
            <th>№ п/п</th>
            <th>Ответ</th>
          </tr> </thead>
          <tbody data-bind="foreach: questions.half(1)">
          <tr data-bind="if: $data">
            <td data-bind="text: id"></td>
            <td data-bind="html: answerText"></td>
          </tr>
          </tbody>
        </table>
        <div style="clear: both;"></div>
      </td>
      <td></td>
      <td class="topped">
        <table class="bordered">
          <thead>
          <tr>
            <th>Шкала</th>
            <th>Балл</th>
            <th data-bind="visible: $root.t">T</th>
          </tr>
          </thead>
          <tbody data-bind="foreach: scalesArray">
          <tr>
            <td data-bind="attr: { title: scale.description }, text: key"></td>
            <td data-bind="text: scale.score"></td>
            <td data-bind="visible: $root.t, text: scale.tscore"></td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</div>
